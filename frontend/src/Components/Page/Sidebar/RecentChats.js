import React from 'react'

function RecentChats() {
  return (
    <div className='py-2 mx-4 flex items-center gap-[0.5rem] border-b-2 border-[#D8B3FE] overflow-auto'>
        <div className="avatar online">
            <div className="w-[3rem] rounded-full">
                <img src="https://randomuser.me/api/portraits/men/62.jpg" alt=''/>
            </div>
        </div>
        <div>
            <p className='text-lg text-black'>John Doe</p>
        </div>
    </div>
  )
}

export default RecentChats