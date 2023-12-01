import React from 'react'
import './ChatHeader.scss';

const ChatHeader = () => {
  return (
    <div className="chatHeader">
        <div className="chatHeaderLeft">
            <h3>#Sodai</h3>
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
