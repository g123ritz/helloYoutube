import React from 'react'
import { MicrophoneImage, NotificationIcon, UploadVideo, hamburgerMenuIcon, userIconImage, youtubeLogoImage } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../redux/appSlice'


const Head = () => {
    const dispatch=useDispatch();

    const toggleMenuHandler=()=>{
     dispatch(toggleMenu());
    }
  return (
    <div className='grid grid-flow-col p-5 m-2 shadow-lg'>
     {/* left-HamburgerMenu ,youtubelogo*/}
     <div className=' flex col-span-1'>
      <img className="h-12" src={hamburgerMenuIcon} alt="hamburger Menu" onClick={toggleMenuHandler}/>
      <img  className="h-12 mx-3" src={youtubeLogoImage} alt="logo"/>
      </div>
        {/* middle-search, microphone */}
        <div  className='flex col-span-10 justify-center h-12 '>
      <input className="border border-gray-400 rounded-l-full w-1/2 px-5 py-2" type="text" placeholder='Search'/>
      <button className="border border-gray-400 rounded-r-full px-5 py-2">🔍</button>
      <button >
        <img className='border bg-gray-200 rounded-full mx-4 p-2 h-12' src={MicrophoneImage} alt="MicrophoneImage"/>
      </button>
      </div>
  
       {/* right-Create Video ,Notifications,userIcon */} 
     <div  className='flex col-span-1 h-8'>
     <img className=" mx-3" src={UploadVideo} alt="Upload Video"/>
       
      <img className=' mx-3' src={NotificationIcon} alt="NotificationIcon"/>
       <img className="mx-5" src={userIconImage} alt="user Icon"/>
     </div>
      
    </div>
  )
}

export default Head
