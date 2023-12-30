import React, { useEffect, useState } from 'react'
import './Chat.scss';
import ChatHeader from './ChatHeader'
import ChatMessage from './ChatMessage';
import { useAppSelector } from '../../app/hooks';
import { collection,CollectionReference, DocumentData, serverTimestamp ,DocumentReference, onSnapshot, Timestamp, QueryDocumentSnapshot, doc, query, orderBy } from 'firebase/firestore';
import { db } from '../../firebase';
import { addDoc } from 'firebase/firestore';
import Sidebar from '../sidebar/Sidebar';
import useSubCollection from '../../hooks/useSubCollection';
import { channel } from 'diagnostics_channel';


interface Messages {
  timestamp: Timestamp;
  message: String;
  user: null | {
      uid: string;
      photo?: string;
      email: string;
      displayName: string;
  };
  
}

const Chat = () => {
  const [inputText,setInputText] = useState<string>("");
  // const [messages,setMessages] = useState<Messages[]>([]);
  const channelName = useAppSelector((state) => state.channel.channelName);
  const channelId = useAppSelector((state) => state.channel.channelId);
  const user = useAppSelector((state) => state.user.user);
  const {subDocuments: messages} = useSubCollection("channels","messages");


  const sendMessage = async (
      e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    // channelsコレクションの中にある、messageコレクションの中にメッセージ情報を入れる。
    const collectionRef: CollectionReference<DocumentData>
    = collection(
        db,
        "channels",
        String(channelId),
        "messages",
    );

    const docRef: DocumentReference<DocumentData> = await addDoc(collectionRef,
     {
       message: inputText,
       timeStamp: serverTimestamp(),
       user: user
     }
    );
    setInputText("");
  }

  return (
    <div className="chat">
      {/* chatHeader */}
      <ChatHeader channelName={channelName}/>

      {/* chatMessage */}
      <div className="chatMessage">
        {messages.map((message,index) => 
          <ChatMessage 
            key={index}
            message={message.message}
            timestamp={message.timestamp}    // 要対応: timestampがundifinedになる問題
            user={message.user}
          />
        )}
      </div>

      {/* chatInput */}
      <div className="chatInput">
        <span>📩</span>
        <form >
          <input 
            type="text"
            placeholder='#sodaiへmessage'
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputText(e.target.value)}
            value={inputText}
          />
          <button
           type='submit'
           className='chatInputbutton'
           onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => 
              sendMessage(e)}
          >
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
