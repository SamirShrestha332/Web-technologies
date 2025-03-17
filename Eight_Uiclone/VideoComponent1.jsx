import React, { useRef, useEffect } from 'react';

const VideoComponent1 = () => {
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
      var playPromise = video.play();

  if (playPromise !== undefined) {
    playPromise.then(_ => {
      // Automatic playback started!
      // Show playing UI.
      
    })
    .catch(error => {
      // Auto-play was prevented
      // Show paused UI.
    });
  }
    }
  };

  return (
    
      <video
        ref={videoRef}
        loop
        playsInline
        autoPlay
        muted
        src="./assets/Eigthbackground.mp4"
        className="backgroundvideo"
      ></video>
    
  );
};

export default VideoComponent1;
