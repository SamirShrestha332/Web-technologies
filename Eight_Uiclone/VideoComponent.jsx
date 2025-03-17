import React, { useRef, useEffect } from 'react';

const VideoComponent = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    // This will ensure the video plays automatically and loops
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  const reloadVideo = () => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play();
    }
  };

  return (
    
      <video
        ref={videoRef}
        loop
        playsInline
        autoPlay
        muted
        src="./assets/illustrator.mp4"
        className="illustrator"
      ></video>
      
  );
};

export default VideoComponent;
