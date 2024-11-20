import React from 'react';
import Left from './Home/Lefttpart/Left';
import Right from './Home/RighttPart/Right';

function App() {

  return (
    <>
     <div className='flex h-screen'> 
        <Left/>
        <Right/>
      </div> 
    </>
  )
}

export default App;
