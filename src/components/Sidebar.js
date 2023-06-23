import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Sidebar = () => {

  const isMenuOpen = useSelector(store => store.app.isMenuOpen);
  //Early return pattern 
  // if(!isMenuOpen) return null;

  return !isMenuOpen ? null : (
    <div className='p-5  shadow-lg w-52  '>
     <ul>
     <Link to="/"><li>Home</li></Link> 
     <Link to="/demo"><li>Demo</li></Link> 
      <li>Shorts</li>
      <li>Videos</li>
      <li>Live</li>
    </ul>
      <h1 className='font-bold pt-5'>Subscription</h1>
    <ul>
      <li>Music</li>
      <li>Sports</li>
      <li>Gaming</li>
      <li>Movies</li>
    </ul>
    <h1 className='font-bold pt-5'>Watch later</h1>
    <ul>
      <li>Music</li>
      <li>Sports</li>
      <li>Gaming</li>
      <li>Movies</li>
    </ul>
    <h1 className='font-bold pt-5'>Explore</h1>
    <ul>
      <li>Music</li>
      <li>Sports</li>
      <li>Gaming</li>
      <li>Movies</li>
    </ul>
    </div>
  )
}

export default Sidebar
