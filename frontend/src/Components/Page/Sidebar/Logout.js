import React from 'react'
import {BiLogOut} from 'react-icons/bi'

function Logout() {
  return (
    <div className='border-t-2 py-2 px-3'>
        <BiLogOut className='cursor-pointer' size={28}/>
    </div>
  )
}

export default Logout