import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';


const WatchPage = () => {

  const [ searchParams ]  = useSearchParams()
  // console.log(searchParams.get("v"));

  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(closeMenu());
  },[])
  return (
    <div className='flex flex-col px-8 py-5 '>
    <div className='flex '>
    <div className=''>
    <iframe  
    width="800" 
    height="420" 
    src={"https://www.youtube.com/embed/"+searchParams.get("v")} 
    title="YouTube video player" 
    frameBorder="0" 
    allow="acceleromseter; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    allowFullScreen>
    </iframe>
    </div>
    <div>
      <LiveChat/>
    </div>
    </div>
    <div className='py-10'>
    <CommentsContainer/>
    </div>
    </div>
  )
}

export default WatchPage
