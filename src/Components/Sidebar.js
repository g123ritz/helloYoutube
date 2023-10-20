import React from 'react'
import Home from "../images/Home.jpg"
import Shorts from "../images/Shorts.jpg";
import Subscriptions from "../images/Subscriptions.jpg";
import Library from "../images/lib.png";
import {Link} from "react-router-dom"
import { useSelector } from 'react-redux'

const Sidebar = () => {
  const isMenuOpen=useSelector(store=>store.app.isMenuOpen);
  if(!isMenuOpen)
  return null;
  return (
    <div className='ml-3 p-1 '>
    <Link to="/">
   <div className='cursor-pointer mb-5'>
   
    <button >
     <img className="h-6 " src={Home} alt="home"/>
      <h1>Home</h1>
    </button>
   
</div>
 </Link>
<div className=' cursor-pointer  mb-5'>
     <button >
     <img  className="h-6" src={Shorts} alt="shorts"/>
     <h1 >Shorts</h1>
     </button>
</div>
<div className='cursor-pointer  mb-5'>
     <button >
     <img className="h-6" src={Subscriptions} alt="subscriptions"/>
      <h1>Subscriptions</h1>
      </button>
</div>
<div className='cursor-pointer mb-5'>
      <button>
      <img className="h-6" src={Library} alt="library"/>
      <h1 >Library</h1>
      </button>
    </div>
    </div>
  )
}

export default Sidebar
