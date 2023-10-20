import React from 'react'
import Button from './Button'

const list=["All","Live","Music","Gaming", "Songs", "Cricket","Cooking","Comedy","News","Recently Uploaded","Watched"];
const ButtonList = () => {
  return (
    <div className='w-max overflow-x-auto'>
    <div className=" flex  whitespace-wrap">
     {
      list.map(buttons=>
        <Button key={buttons} name={buttons} />)
     }
     </div>
    </div>
  )
}

export default ButtonList
