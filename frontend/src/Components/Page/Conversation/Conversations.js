import React, { useEffect, useRef } from 'react'
import Message from './Message'
import UseGetMessages from '../../../hooks/UseGetMessages'
import MessageSkeleton from '../skeleton/MessageSkeleton';

function Conversations() {
  const {messages,loading} = UseGetMessages();
  const lastMessageRef = useRef();
  console.log("messages:",messages);
  useEffect(() => {
		setTimeout(() => {
			lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
		}, 100);
	}, [messages]);
  return (
    <div className='px-4 py-4 flex-1 h-[36.8rem] overflow-auto'>
			{!loading &&
				messages.length > 0 &&
				messages.map((message) => (
					<div key={message._id} ref={lastMessageRef}>
						<Message message={message} />
					</div>
				))}

			{loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}
			{!loading && messages.length === 0 && (
				<p className='text-center text-white font-semibold'>Send a message to start the conversation</p>
			)}
		</div>
  )
}

export default Conversations