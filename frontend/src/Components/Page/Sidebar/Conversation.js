const Conversation = ({conversation, lastIdx}) => {
    	return (
    		<>
    			<div className='group flex gap-4 items-center hover:bg-purple-300 rounded p-2 py-1 cursor-pointer'>
    				<div className='avatar online'>
    					<div className='w-12 rounded-full'>
    						<img
    							src={conversation.profilepic}
    							alt='user avatar'
    						/>
    					</div>
    				</div>
    
    				<div className='flex flex-col flex-1'>
    					<div className='flex gap-3 justify-between'>
    						<p className=' group-hover:text-white font-bold text-black'>{conversation.fullName}</p>
    					</div>
    				</div>
    			</div>
    
				{!lastIdx && <div className='divider my-0 py-0 h-1' />}
    			
    		</>
    	);
    };
    export default Conversation;