import React from 'react'
import { CiSearch } from "react-icons/ci";

function Users() {
  return (
    <div className='py-4 px-4'>
      <div className='border-2 rounded-full p-2 flex items-center'>
        <input className='outline-none p-1 bg-white w-[15rem] text-black' type="text" placeholder='Search'/>
        <CiSearch className='cursor-pointer' size={28}/>
      </div>
    </div>
  )
}

export default Users