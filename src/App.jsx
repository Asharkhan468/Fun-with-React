import React, { useState } from 'react'

function App() {

  let [color , setColor] = useState('white')

  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor:color}}>

      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>

        <div className='flex flex-wrap justify-center gap-3 shadow-xl bg-white px-2 py-2 rounded-3xl'>
          <button onClick={()=>setColor('black')} className='outline-none px-3 py-1 rounded-full text-white shadow-xl'style={{backgroundColor:'black'}}>Black</button>

          <button onClick={()=>setColor('green')} className='outline-none px-3 py-1 rounded-full text-white shadow-xl'style={{backgroundColor:'green'}}>Green</button>

          <button onClick={()=>setColor('red')} className='outline-none px-3 py-1 rounded-full text-white shadow-xl'style={{backgroundColor:'red'}}>Red</button>

          <button onClick={()=> setColor('yellow')} className='outline-none px-3 py-1 rounded-full text-black shadow-xl'style={{backgroundColor:'yellow'}}>Yellow</button>

          <button onClick={()=> setColor('purple')} className='outline-none px-3 py-1 rounded-full text-white shadow-xl'style={{backgroundColor:'purple'}}>Purple</button>

          <button onClick={()=> setColor('#fb5607')} className='outline-none px-3 py-1 rounded-full text-white shadow-xl'style={{backgroundColor:'#fb5607'}}>Orange</button>

          <button onClick={()=> setColor('blue')} className='outline-none px-3 py-1 rounded-full text-white shadow-xl'style={{backgroundColor:'blue'}}>Blue</button>
        

        </div>

        

      </div>

    </div>
    
  )
}

export default App
