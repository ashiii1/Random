import React, { useState } from 'react';
import './style.css';

const VideoCard = ({ videoUrl, title, description }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => setIsPlaying(true);

  return (
    <div className="video-card">
    {!isPlaying ? (
      <div className="video-preview" onClick={handlePlay}>
        <video
          src={videoUrl}
          preload="metadata"
          muted
          playsInline
        />
        <div className="play-overlay">▶</div>
      </div>
    ) : (
      <video
        src={videoUrl}
        controls
        autoPlay
      />
    )}
    <div className="video-info">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  </div>
  
  );
};

export default VideoCard;
