import React from 'react'

function Message() {
  return (
    <div className='chat chat-end'>
        <div className=' chat-image avatar'>
            <div className='w-10 rounded-full'>
                <img src="https://randomuser.me/api/portraits/men/62.jpg" alt="" />
            </div>
        </div>
        <div className={`chat-bubble text-black font-medium bg-white`}>
            hey how's its going?
        </div>
        <div className='chat-footer opacity-50 text-xs gap-1 items-center text-black'>
            12:42
        </div>
    </div>
  )
}

export default Message