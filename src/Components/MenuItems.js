import React from 'react'
import Home from "../images/Home.jpg"
import Shorts from "../images/Shorts.jpg";
import Subscriptions from "../images/Subscriptions.jpg";
import Library from "../images/lib.png";
import history from "../images/history.jpg"
import yourvideos from "../images/yourvideos.jpg"
import watchLater from "../images/watchLater.jpg"
import likedvideos from "../images/likedvideos.jpg"
import {Link} from "react-router-dom"
// import { hamburgerMenuIcon, youtubeLogoImage } from '../utils/constants'

const MenuItems = () => {
  
  return (
    <div className=' shadow-lg w-72 '>
    {/* <div className=' flex'>
      <img className="h-12" src={hamburgerMenuIcon} alt="hamburger Menu"/>
      <img  className="h-12 mx-3" src={youtubeLogoImage} alt="logo"/>
      </div> */}
      <Link to="/">
   <div>
    <button className='flex m-2 p-2 align-middle cursor-pointer hover:bg-gray-100'>
     <img className="h-6 m-1" src={Home} alt="home"/>
      <h1>Home</h1>
    </button>
</div>
</Link>
<div>
     <button  className='flex m-2 p-2 align-middle cursor-pointer hover:bg-gray-100'>
     <img  className="h-6 m-1" src={Shorts} alt="shorts"/>
     <h1 >Shorts</h1>
     </button>
</div>
<div>
     <button  className='flex m-2 p-2 align-middle cursor-pointer hover:bg-gray-100'>
     <img className="h-6 m-1" src={Subscriptions} alt="subscriptions"/>
      <h1>Subscriptions</h1>
      </button>
</div>
<hr/>
<div>
      <button  className='flex m-2 p-2 align-middle cursor-pointer hover:bg-gray-100'>
      <img className="h-6 m-1" src={Library} alt="library"/>
      <h1 >Library</h1>
      </button>
    </div>

    <div>
      <button  className='flex m-2 p-2 align-middle cursor-pointer hover:bg-gray-100'>
      <img className="h-6 m-1" src={history} alt="history"/>
      <h1 >History</h1>
      </button>
    </div>

    <div>
      <button  className='flex m-2 p-2 align-middle cursor-pointer hover:bg-gray-100'>
      <img className="h-6" src={yourvideos} alt="yourvideos"/>
      <h1>Your videos</h1>
      </button>
    </div>

    <div>
      <button  className='flex m-2 p-2 align-middle cursor-pointer hover:bg-gray-100'>
      <img className="h-6 m-1" src={watchLater} alt="watchlater"/>
      <h1>Watch later</h1>
      </button>
    </div>

    <div>
      <button  className='flex m-2 p-2 align-middle cursor-pointer hover:bg-gray-100'>
      <img className="h-6 m-1" src={likedvideos} alt="likedvideos"/>
      <h1>Liked videos</h1>
      </button>
    </div>
    </div>
 
   
  )
}

export default MenuItems
