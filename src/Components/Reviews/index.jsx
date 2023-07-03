import React from 'react'
import "./style.css";

const ReviewsCard = ({perImage, name, starImage, description}) => {
  return (
    <div className='review-card'>
      <div className="info">
        <img src={perImage} alt="perosn" />
        <div className="text">
          <h3>{name}</h3>
          <ul>
            <li><img src={starImage} alt="star" /></li>
            <li><img src={starImage} alt="star" /></li>
            <li><img src={starImage} alt="star" /></li>
            <li><img src={starImage} alt="star" /></li>
            <li><img src={starImage} alt="star" /></li>
          </ul>
        </div>
      </div>
      <p> {description}
        “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit 
        a amet viverra. Nunc pretium in amet at mattis cras. Quisque commodo mattis ornare 
        a nec odio. Pulvinar orci, egestas eget nulla duis at iaculis nunc, elit. “
      </p>
    </div>
  )
}

export default ReviewsCard;