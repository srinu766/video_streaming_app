import React, { useRef, useState } from 'react'

const Demo2 = () => {
    const [y, setY] = useState(0)
    let x=10;
    const ref = useRef(0)
   
  return (
    <div className='m-4 p-3 border border-black w-96 h-96 bg-slate-50'>

    <button onClick={()=>{x=x+1}} 
    className='p-2 m-2 bg-green-300'>Increase x</button>
    <span className='p-2 m-2 font-bold'>let = {x}</span><br/>


    <button onClick={()=>{setY(y+1)}}
    className='p-2 m-2 bg-green-300'>Increase x</button>
    <span className='p-2 m-2 font-bold'>let = {y}</span><br/>


    <button onClick={()=>{
    ref.current = ref.current + 1;
    console.log("ref => "+ref.current)}} 
    className='p-2 m-2 bg-green-300'>Increase ref</button>
    <span className='p-2 m-2 font-bold'>Ref = {ref.current}</span>

    </div>
  )
}

export default Demo2
