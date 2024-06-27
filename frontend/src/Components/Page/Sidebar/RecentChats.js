import React from 'react'
import Conversation from './Conversation';
import useGetConversations from '../../../hooks/UseGetConversations';

function RecentChats() {
  const {loading,conversations} = useGetConversations();
  console.log("conversations:",conversations);
  return (
    <div className='py-2 flex flex-col h-[35.5rem] overflow-auto'>

      {conversations.map((conversation,idx)=>(
        <Conversation 
          key={conversation._id}
          conversation={conversation}
          lastIdx={idx === conversation.length-1}
        />
      ))}

      {loading ? <span className=" loading loading-spinner mx-auto"></span> : null}
    </div>
  );
};

export default RecentChats