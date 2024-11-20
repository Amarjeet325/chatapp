import React from 'react'

function Chatuser() {
  return (
    <div className='flex items-center justify-center space-x-3 bg-slate-600 hover:bg-slate-700 duration-300'>
      <div className="avatar online">
  <div className="w-14 rounded-full">
    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
  </div>
</div>
<div>
    <h1 className='font-bold text-xl'>Amarjeet</h1>
    <span className='text-sm'>Offline</span>
</div>
    </div>
  )
}

export default Chatuser
