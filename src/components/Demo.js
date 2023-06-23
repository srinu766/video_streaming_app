import React,{useState, useMemo} from 'react'
import { findPrime } from '../utils/helper'


const Demo = () => {
  
    const [text, setText] = useState()
    const [isDarkTheme, setIsDarkTheme] = useState(false)

    // console.log(isDarkTheme)

    // console.log("rendering...")
    // const prime =findPrime(text)
    const prime = useMemo(()=>findPrime(text), [text]);

  return (
    <>
    <div className={
      'p-2 m-2 w-96 h-96 px-2 border border-red' + 
     ( isDarkTheme &&  " bg-black text-white")}>
      <div>
      <button className='p-2 m-2 bg-green-300'
       onClick={() => setIsDarkTheme(!isDarkTheme)}>Toggle</button>
       </div>
        <input type='number' placeholder='Enter Number...' 
        className={'border border-black w-72 '+(isDarkTheme && " text-black")}
        value={text} 
        onChange={(e)=>setText(e.target.value)}/>
      
      <div>
        <h1 className='mt-4 font-bold text-xl'>nth prime number : {prime}</h1>
      </div>
     
    </div>
    
      </>
  )
}

export default Demo
