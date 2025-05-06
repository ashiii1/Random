import React, { useState } from 'react';
import './style.css';

const VideoCard = ({ videoUrl, title, description }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => setIsPlaying(true);

  return (
    <div className="video-card" style={{ aspectRatio: '9 / 16' }}>
      {!isPlaying ? (
        <div className="video-preview" onClick={handlePlay}>
          <video
            src={videoUrl}
            preload="metadata"
            muted
            playsInline
            style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }}
          />
          <div className="play-overlay">▶</div>
        </div>
      ) : (
        <video
          src={videoUrl}
          controls
          autoPlay
          style={{ width: '100%', height: '100%', borderRadius: '12px' }}
        />
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default VideoCard;
