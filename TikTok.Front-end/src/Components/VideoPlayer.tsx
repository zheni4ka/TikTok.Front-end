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
    <div style={{ width: '1000px', display: 'flex', flexDirection: 'column'}}>
      <video
        ref={null}
        style={{marginInline: 'auto', marginBlock: '', height: window.innerHeight - 150, width: '300px', borderRadius: '30px'}}
        id={'${id}'}
        src="https://res.cloudinary.com/codelife/video/upload/v1637805738/intro_l5ul1k.mp4"
        controls
        autoPlay
        data-cld-colors='{ "base": "#0071   ba", "accent": "#db8226", "text": "#fff" }'
        data-cld-public-id={publicId}
        {...props}
      />
    </div>
  )
}


export default VideoPlayer;