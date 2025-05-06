import React from 'react';
import './style.css';

const VideoCard = ({ videoUrl, title, description }) => {
  return (
    <div className="video-card">
      <iframe
        width="100%"
        height="200"
        src={videoUrl}
        title={title}
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default VideoCard;