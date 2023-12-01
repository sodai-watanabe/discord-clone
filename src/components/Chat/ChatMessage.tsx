import React from 'react'
import './ChatMessage.scss';
const ChatMessage = () => {
  return (
    <div className='message'>
      <span className='icon'>👧</span>
      <div className="messageInfo">
        <h4>
          Sodai
          <span className="messageTimestamp">2023/8/6</span>
        </h4>
        <p>message本文</p>
      </div>
    </div>
  )
}

export default ChatMessage
