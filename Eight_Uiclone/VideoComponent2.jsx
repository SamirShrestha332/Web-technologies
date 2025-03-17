import React, { useRef, useEffect } from 'react';

const VideoComponent2= () => {
  const videoRef = useRef(null);

  useEffect(() => {
    // This will ensure the video plays automatically and loops
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  // Function to reload and play the video
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
        src="./assets/Mobile-video.mp4"
        className="mobilevideo"
      ></video>
    
  );
};

export default VideoComponent2;
