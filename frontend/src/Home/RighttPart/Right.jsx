import React from 'react';
import Chatuser from './Chatuser';
import Massages from './Massages';
import Typesend from './Typesend';

function Right() {
  return (
    <div className='w-[70%] bg-slate-900 text-gray-300'>
      
      <Chatuser/>
      <Massages/>
      <Typesend/>
       </div>
  )
}

export default Right;
