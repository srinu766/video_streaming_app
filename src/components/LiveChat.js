import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';
import { generateRandomName, randomMessage } from '../utils/helper';

const LiveChat = () => {

  const dispatch = useDispatch();
  const chatMessages = useSelector(store => store.chat.messages)

  useEffect(()=>{
      const i = setInterval(()=>{
        //API Polling
        // console.log("api polling");
        dispatch(addMessage({
          name:generateRandomName(),
          message:randomMessage(5)+" please wellcome 🚀"
        }))
      },2000)

      return ()=>clearInterval(i);
  },[]);

  const [liveMessage, setLiveMessage] = useState("");

  return (
    <>
    <div className='w-[350px] h-[460px] ml-4 p-2 border border-black overflow-y-scroll bg-slate-100 flex flex-col-reverse'>
     <div>
      {chatMessages.map((c, index)=>
      <ChatMessage key={index} 
      name={c.name} message={c.message}
      />)
      }
    </div>
    </div>
    <form className=' p-2 ml-2 border border-black' onSubmit={(e)=>{
      e.preventDefault();
      dispatch(addMessage({
        name:"Srinu",
        message :liveMessage,
      }))

    }}>
    <input className='px-2  w-72' type='text' placeholder='enter message...'
      value={liveMessage} 
      onChange={(e)=>{
      setLiveMessage(e.target.value)
      }}
      />
      <button className='bg-green-400 px-1 py-1 rounded-lg border border-black ml-2'>Send</button>
    </form>
    </>
  )
}

export default LiveChat
