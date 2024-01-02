import React from 'react';
import "./Home.css";
import Product from './Product';

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
        className="home__image"
           src="	https://m.media-amazon.com/images/I/71j8damPo5L._SX3000_.jpg"
           alt=''
        />

        <div className="home__row">
            <Product
            id="12345674"
              title="Ghosts of Honolulu: A Japanese Spy, A Japanese American Spy Hunter, and the Untold Story of Pearl Harbor"
              price={1790}
              image="https://m.media-amazon.com/images/I/710Iu+HoHpL._SY466_.jpg"
              rating={4}
              />
            
            <Product 
            id="12678554"
            title="Ankis Platform Heels 4 Inches Chunky heels Sandals for Women Comfy Open Toe Block Heeled Sandals Black Nude White Silver Gold Ankle"
            price={4230}
            image="https://m.media-amazon.com/images/I/71z8sCtefUL._AC_SY625_.jpg"
            rating={5}
            
            />
        </div>

        <div className="home__row">
        <Product
         id="1266799"
         title="Marc Jacobs Women's The Medium Tote Bag"
         price={15786}
         image="https://m.media-amazon.com/images/I/71CqZk9HNrL._AC_SY695_.jpg"
         rating={4}
        
        />
            <Product 
            id="14667588"
            title="Nine West Women's Crystal Accented Bracelet Watch"
            price={4678}
            image="https://m.media-amazon.com/images/I/81-HbGIsxVL._AC_SY741_.jpg"
            rating={4}
            
            />
            <Product 
            id="16589499"
            title="livbote Travel Backpack for Women, Carry on Backpack with USB Charging Port"
            price={3980}
            image="https://m.media-amazon.com/images/I/617xPEMO2AL._AC_SX466_.jpg"
            rating={4}
            
            />
            
        </div>

        <div className="home__row">
        <Product
        id="13626549"
        title="ANUA Double Cleansing Duo SET (Cleasnig Oil + Cleansing Foam)"
        price={2886}
        image="https://m.media-amazon.com/images/I/51+U7rzTBmL._SX466_.jpg"
        rating={4}
        />

       <Product
        id="37877779"
        title="SAMSUNG 28-Inch ViewFinity UR55 Series 4K UHD IPS Computer Monitor, HDR10"
        price={16986}
        image="https://m.media-amazon.com/images/I/71MRnLmm8iL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
        rating={4}
        />
            
        </div>
      </div>
    </div>
  )
}

export default Home