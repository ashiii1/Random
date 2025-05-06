import React from 'react';
import "./style.css";
import TitleSection from '../../../mock/SpecialCard/Title';
import VIDEOS_DATA from '../../../mock/videos';
import VideoCard from '../../../Components/VideoCard';
import Container from '../../../Components/Container/Container1';

const Blogs = () => {
  return (
    <div className='blogs' id='blogs'>
      <Container>
        <TitleSection title="Videos" subTitle="Peanut Butter Stories by Pradeep Dhaka" />
        <div className="blog-boxs">
          {VIDEOS_DATA.map(({ id, videoUrl, title, description }) => (
            <VideoCard
              key={id}
              videoUrl={videoUrl}
              title={title}
              description={description}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Blogs;
