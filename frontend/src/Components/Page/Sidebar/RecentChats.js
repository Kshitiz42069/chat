import React from 'react'
import Conversation from './Conversation';
import useGetConversations from '../../../hooks/UseGetConversations';

function RecentChats() {
  const {loading,conversations} = useGetConversations();
  console.log("conversations",conversations);
  return (
    <div className='py-2 flex flex-col overflow-auto'>
      <Conversation />
    </div>
  );
};

export default RecentChats