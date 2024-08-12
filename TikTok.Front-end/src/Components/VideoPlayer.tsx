import { Button } from 'antd';
import React from 'react'
import { HeartOutlined, CommentOutlined } from '@ant-design/icons';

import { useEffect, useRef } from 'react';

const VideoPlayer :  React.FC = (id, publicId, ...props) => {
  const videoRef = useRef();
  const cloudinaryRef = useRef();
  const playerRef = useRef();

  // Store the Cloudinary window instance to a ref when the page renders

  useEffect(() => {

  }, []);

  return (
    <div style={{ width: '45%', display: 'flex', flexDirection: 'column', marginInline: 'auto', overflow: 'scroll', height: '100vh'}}>
      
    <div>
      <div style={{display: 'flex', flexDirection: 'row'}}>
      
      <video
        ref={null}
        style={{marginInline: 'auto', height: window.innerHeight-200, width: '300px', borderRadius: '30px'}}
        id={'${id}'}
        src="https://res.cloudinary.com/codelife/video/upload/v1637805738/intro_l5ul1k.mp4"
        controls
        
        autoPlay
        data-cld-public-id={publicId}
        {...props}
        />

        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', gap: '15px'}}>
            <div style={{display: 'flex', flexDirection: 'column', gap: '5px'}}>
                <Button className='btn'>
                  <HeartOutlined style={{fontSize: '25px'}}/>
                </Button>
                <strong style={{color: 'white', textAlign: 'center'}}>0</strong>
            </div>
            <Button className='btn'><CommentOutlined style={{fontSize: '25px'}}/></Button>
            <Button className='btn'/>
            <Button className='btn'/>
        </div>

        </div>
    </div>
  </div>
  )
}


export default VideoPlayer;