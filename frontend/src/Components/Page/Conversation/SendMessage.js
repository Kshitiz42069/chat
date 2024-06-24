import React from 'react'
import {BsSend} from 'react-icons/bs'

function SendMessage() {
  return (
    <div className='px-4 py-3 w-full bg-white'>
      <div className='w-full flex items-center gap-4'>
        <input className='bg-white outline-none w-full text-black' type="text" placeholder='Type ypur message..'/>
        <BsSend/>
      </div>
    </div>
  )
}

export default SendMessage