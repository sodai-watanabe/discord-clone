import React from 'react'
import './Chat.scss';
import ChatHeader from './ChatHeader'
import ChatMessage from './ChatMessage';

const Chat = () => {
  return (
    <div className="chat">
      {/* chatHeader */}
      <ChatHeader />
      {/* chatMessage */}
      <div className="chatMessage">
        <ChatMessage />
        <ChatMessage />
        <ChatMessage />
      </div>
      {/* chatInput */}
      <div className="chatInput">
        <span>📩</span>
        <form >
          <input type="text" placeholder='#sodaiへmessage' />
          <button type='submit' className='chatInputbutton'>
            送信
          </button>
        </form>
        <div className="rightIcon">
          <span>🎁</span>
          <span>🎥</span>
          <span>😀</span>
        </div>
      </div>
    </div>
  )
}

export default Chat
