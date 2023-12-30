import React from 'react'
import './ChatMessage.scss';
import { Timestamp } from 'firebase/firestore';
import { Avatar } from '@mui/material';

type Props = {
  timestamp: Timestamp;
  message: String;
  user: null | {
      uid: string;
      photo?: string;
      email: string;
      displayName: string;
  };
  
}

const ChatMessage = (props: Props) => {
  const { message, timestamp, user } = props;
  // console.log(timestamp);

  return (
    <div className='message'>
      <Avatar src={user?.photo}/>
      {/* <span className='icon'>👧</span> */}
      <div className="messageInfo">
        <h4>
          {user?.displayName}
          <span className="messageTimestamp">
            {new Date (timestamp?.toDate()).toLocaleString()}
          </span>
        </h4>
        <p>{message}</p>
      </div>
    </div>
  )
}

export default ChatMessage
