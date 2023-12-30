import React, { useEffect,useState } from 'react'
import './Sidebar.scss';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SidebarChannel from './SidebarChannel';
import { auth ,db } from '../../firebase';
import { useAppSelector } from '../../app/hooks';
import { RootState } from '../../app/store';
import { InitialUserStatus } from '../../Type';
import Chat from '../Chat/Chat';
import { Login } from '@mui/icons-material';
import { DocumentData, QuerySnapshot, addDoc, collection ,onSnapshot,query } from 'firebase/firestore';
import useCollection from '../../hooks/useCollection';




const Sidebar = () => {
  const user = useAppSelector((state: RootState) => state.user.user)
  const { documents: channels } = useCollection("channels")

  const addChannel = async () => {
    let channelName: string | null = prompt("新しいチャンネルを作成します")

    if (channelName) {
      await addDoc(collection(db, "channels"), {
        channelName: channelName,
      });
    }
  }

  return (
    <div className="sidebar">
      {/* sidebarLeft */}
      <div className="sidebarLeft">
        <div className="serverIcon">
          <img src="./logo192.png" alt="" />
        </div>
        <div className="serverIcon">
          <img src="./logo192.png" alt="" />
        </div>
      </div>
      
      {/* sidebarRight */}
      <div className="sidebarRight">
        <div className="sidebarTop">
          <h3>discord</h3>
          <span>~</span>
        </div>

        {/* sidebarChannels */}
        <div className="sidebarChannels">
          <div className="sidebarChannelsHeader">
            <div className="sidebarHeader">
              <span>~</span>
              <h4>プログラミングチャンネル</h4>
            </div>        
            <span className='sidebarAddIcon' onClick={addChannel}>+</span>
          </div>

          {/* sidebarChannel */}
          <div className="sidebarChannel">
            {channels.map((channel) => ( 
               <SidebarChannel 
                channel={channel} 
                id={channel.id}
                key={channel.id}
                />
            ))} 
          </div>

          {/* sidebarFooter */}
          <div className="sidebarFooter">
            <div className="sidebarAccount">
              <img src={user?.photo} alt="" onClick={() => auth.signOut()}/>
              <h4>{user?.displayName}</h4>
              <span>{user?.uid.substring(0,4)}</span>
            </div>
            <div className="sidebarVoice">
              <span>$</span>
              <span>&</span>
              <span>%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
