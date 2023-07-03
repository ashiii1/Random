import React from 'react'
import "./style.css";
import TitleSection from '../../../mock/SpecialCard/Title';
import MenuComponent from '../../../Components/OurMenu';
import MENU_BOX1 from "../../../mock/MenuInfo/box1";
import MENU_BOX2 from "../../../mock/MenuInfo/box2";
import Container from '../../../Components/Container/Container1';

const OurMenu = () => {
  return (
    <div className='our-menu' id='menu'>
      <Container>
        <TitleSection title="Straight From Kitchen" subTitle="Our Menu"/>
        <div className='menu'>
          <div className="box">
            {
              MENU_BOX1.map(({id, title, subTitle, image, price}) => (
                <MenuComponent key={id} image={image} title={title} subTitle={subTitle} price={price}/>
              ))
            }
          </div>
          <div className="box">
            {
              MENU_BOX2.map(({id, title, subTitle, image, price}) => (
                <MenuComponent key={id} image={image} title={title} subTitle={subTitle} price={price}/>
              ))
            }
          </div>
        </div>
      </Container>
    </div>
  )
}

export default OurMenu;