
import "./home.css"
import Nowplaying from './nowplaying/Nowplaying'
import Toprated from './toprated/Toprated'
import Popular from './popular/Popular'
import Upcoming from './upcoming/Upcoming'
import React, { useState } from 'react'
import LoadingBar from 'react-top-loading-bar'
export default function Home() {
  const [progress, setProgress] = useState(0)

  return (
    <>
    <div className='container'>
       <LoadingBar
        height={3}
        color='#17B7DA'
        progress={progress} 
      />
      <Nowplaying setProgress={setProgress}/>
      <Upcoming/>
      <Toprated/>
      <Popular/>
    </div>
    </>
  )
}
