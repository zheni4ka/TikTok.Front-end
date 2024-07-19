import React from 'react'

import { useEffect, useRef } from 'react';

const VideoPlayer :  React.FC = (id, publicId, ...props) => {
  const videoRef = useRef();
  const cloudinaryRef = useRef();
  const playerRef = useRef();
  

  // Store the Cloudinary window instance to a ref when the page renders

  useEffect(() => {

  }, []);

  return (
    <div style={{ width: '320px', display: 'flex', flexDirection: 'column', marginInline: 'auto', overflow: 'scroll', height: '100vh'}}>
      
    <div style={{gap: '15px'}}>

      <video
        ref={null}
        style={{marginInline: 'auto', height: window.innerHeight-150, width: '300px', borderRadius: '30px'}}
        id={'${id}'}
        src="https://res.cloudinary.com/codelife/video/upload/v1637805738/intro_l5ul1k.mp4"
        controls
        autoPlay
        data-cld-public-id={publicId}
        {...props}
        />

      <video
        ref={null}
        style={{marginInline: 'auto', height: window.innerHeight-150, width: '300px', borderRadius: '30px'}}
        id={'${id}'}
        src="https://res.cloudinary.com/codelife/video/upload/v1637805738/intro_l5ul1k.mp4"
        controls
        autoPlay
        data-cld-public-id={publicId}
        {...props}
        />

      <video
        ref={null}
        style={{marginInline: 'auto', height: window.innerHeight-150, width: '300px', borderRadius: '30px'}}
        id={'${id}'}
        src="https://res.cloudinary.com/codelife/video/upload/v1637805738/intro_l5ul1k.mp4"
        controls
        autoPlay
        data-cld-public-id={publicId}
        {...props}
        />

    </div>
  </div>
  )
}


export default VideoPlayer;