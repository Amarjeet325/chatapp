import React from 'react'
import { IoSend } from "react-icons/io5";
function Typesend() {
  return (
    <div className='flex space-x-3 h-[8vh] text-center'>
        <div className='w-[70%]'>  
    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
    </div>
    <button>
    <IoSend className='text-3xl' /> 
    </button>
       </div>
  )
}

export default Typesend
