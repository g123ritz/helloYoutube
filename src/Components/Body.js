import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

// import MenuItems from './MenuItems'

const Body = () => {
  
    // return(
    //   <div className='grid grid-flow-col'>
    //   <Sidebar className="col-span-1"/>
    //   <Outlet className="col-span-11"/>
    // </div>
    // )
  
  // return (
  //   <div className='grid grid-flow-col'>
  //     <MenuItems className="col-span-1"/>
  //     <Outlet className="col-span-11"/>
  //   </div>
  // )
  return (
    <div className='flex'>
      <Sidebar/>
      <Outlet/>
    </div>
  )
}

export default Body
