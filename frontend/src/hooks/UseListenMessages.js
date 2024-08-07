import { useEffect } from 'react';

import {useSocketContext} from '../context/SocketContext'
import useConversation from '../zustand/useConversation'

function UseListenMessages() {
  const  {socket}= useSocketContext();
  const {messages, setMessages} = useConversation();

  useEffect(()=>{
    socket?.on("newMessage",(newMessage)=>{
        newMessage.shouldShake = true;
        setMessages([...messages,newMessage])
    });

    return ()=> socket?.off("newMessage");
  },[socket,setMessages,messages])
}

export default UseListenMessages