import React from 'react'
import './ChatHeader.scss';
import { channel } from 'diagnostics_channel';

type Props = {
  channelName: string | null;
};

const ChatHeader = ( props: Props ) => {
  const {channelName} = props;

  return (
    <div className="chatHeader">
        <div className="chatHeaderLeft">
            <h3>{channelName}</h3>
        </div>
        <div className="chatHeaderRight">
           <span>📢</span> 
           <span>📌</span> 
           <span>👥</span>
           <div className="chatHeaderSearch">
            <input type="text" placeholder='検索'/>
            <span>🔎</span>
           </div>
           <span>📮</span>
           <span>🆘</span>
        </div>
    </div>
  )
}

export default ChatHeader
