import React from 'react'

function User() {
  return (
    <div>
      
      <div className='flex space-x-4 px-6 py-4 duration-200 hover:bg-slate-600'>
      <div className="avatar online">
               <div className="w-12 rounded-full">
                 <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
             </div>
        </div>
        <div>
            <h1 className='font-bold'>Amarjeet</h1>
            <span>amar@mail.com</span>
        </div>

      </div>
    </div>
  )
}

export default User
