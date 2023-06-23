import React from 'react'

const ChatMessage = ({name, message}) => {
  return (
    <div>
    <div className='flex shadow-sm my-1 rounded-lg '>
        <img className="h-7" src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"/>
        <h1 className='font-bold px-2'>{name}</h1>
        <h1>{message}</h1>
        
    </div>
   <div>
  
   </div>
    </div>
    
  )
}

export default ChatMessage
