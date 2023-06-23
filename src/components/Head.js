import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_SUGGETION_API } from "../utils/constants";
import { cacheResult } from "../utils/searchSlice";

const Head =()=>{
    const dispatch = useDispatch();
    const toggleHandlerMenu = ()=>{
        dispatch(toggleMenu())
    }
    const [searchQuery, setSearchQuery  ] = useState("")
    const [suggetions, setSuggetions] = useState([]);
    const [showSuggetions, setShowSuggetions] = useState(false);

    const searchCache = useSelector((store)=>store.search);
    


    useEffect(()=>{
        //API call
      const timer = setTimeout(() =>{
        if(searchCache[searchQuery]){
            setSuggetions(searchCache[searchQuery]);
        }else{
            // getSearchSuggetions() 
        }
        },200);

      return()=>{
        clearTimeout(timer);
      }
    },[searchQuery]);

    const getSearchSuggetions = async ()=>{

        const data = await fetch(YOUTUBE_SEARCH_SUGGETION_API + searchQuery);
        const json = await data.json();
        setSuggetions(json[1]);

        dispatch(
            cacheResult({
             [searchQuery]:json[1],
        }));
    };


    return(
        <div className="grid grid-flow-col p-3 m-2 shadow-lg">

        <div  className="flex col-span-1 ">
        <img
        onClick={()=>toggleHandlerMenu()}
        alt="menu"
         src="https://www.svgrepo.com/show/506800/burger-menu.svg" 
            className="h-6 m-2 cursor-pointer"
        />

        <a href="/">
        <img 
        alt="youtube-logo"
        src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6.jpg" 
            className="h-10 "
        />
        </a>

        </div>
        <div 
        className="col-span-10 m-2 px-14 ">
            <input 
            type="text" 
            className="w-1/2 border border-gray-400 p-1 rounded-l-full px-7"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggetions(true)}
            onBlur={() => setShowSuggetions(false)}
            ></input>
            <button onClick={()=>setSearchQuery()} className="border border-gray-400 px-5 py-1 rounded-r-full bg-gray-100">🔍</button>
           {showSuggetions && ( <div className="fixed bg-white py-5 px-5 w-[26rem] rounded-lg shadow-lg border border-gray-500">
                <ul>
                {suggetions.map((s)=><li className="py-1 shadow-sm hover:bg-slate-100" key={s} >🔍 {s}</li>)}
                </ul>
            </div>)}


        </div>
        <div 
        alt="profile"
        className="col-span-1 m-2">
        <img className="h-8" src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"/>
        </div>


        </div>
    )
}
export default Head;