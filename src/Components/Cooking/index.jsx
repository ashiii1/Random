import React from 'react'
import "./style.css";
import Button from '../../mock/SpecialCard/Button';

const CookingComponent = () => {
  return (
    <div className='cooking-content'>
      <h2>Cooking ingredients</h2>
      <h3>What goes in</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. 
        Nunc pretium in amet at mattis cras. Quisque commodo mattis ornare a nec odio. Pulvinar orci, 
        egestas eget nulla duis at iaculis nunc, elit. Nibh auctor purus nunc tellus pellentesque nibh 
        mattis. Malesuada integer consectetur. Imperdiet aliquam quam mauris semper suscipit. Molestie 
        maecenas interdum pharetra id velit sed nec.tetur sit sagittis pretium eget vitae semper pellentesque 
        pellentesque.
      </p>
      <Button btn="Read more"/>
    </div>
  )
}

export default CookingComponent;