import React from 'react'
import User from './User'

function Users() {
  return (
   <div className=''>
     <div>
      <h1 className='px-8 py-2 text-white font-semibold bg-slate-800 rounded-sm '>
        Massage</h1>
     <div className='flex-1 overflow-y-auto' style={{maxHeight:"calc(82vh - 10vh"}}>
     <User/>
     <User/>
     <User/>
     <User/>
     <User/>
     <User/>
     <User/>
     <User/>
     <User/>
     <User/>
     <User/>
     <User/>
     <User/>
     <User/>
     <User/>
     <User/>
     <User/>
     <User/>
     </div>

    </div>
   </div>
  )
}

export default Users
