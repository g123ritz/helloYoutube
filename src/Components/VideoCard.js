import React from 'react'

const VideoCard = ({info}) => {
  // console.log(info);
  const{snippet,statistics}=info;
  const{channelTitle,title,thumbnails}=snippet;
  return (
    <div className='p-4 m-4 w-80 shadow-lg'>
     <img className='rounded-lg' alt="thumbnail" src={thumbnails.medium.url}/>
     <ul>
      <li className='font-bold py-2'>{title}</li>
      <li>{channelTitle}</li>
      <li>{statistics.viewCount} views</li>
     </ul>  
    </div>
  )
}

export default VideoCard
