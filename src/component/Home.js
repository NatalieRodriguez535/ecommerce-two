import React, { useState } from "react";
//package im using npm component
import SimpleImageSlider from "react-simple-image-slider";
import "../styles/home.css";

function Home() {
  //Name of the state
  //function to set the state
  //useState which is a function to use as state defualt

  const [images, setImages] = useState([
    { url: "./images/ecom-plant-pic-1.jpeg " },
    { url: "./images/ecom-plant-pic-2.jpeg" },
    { url: "./images/ecom-plant-pic-3.jpeg" },
    { url: "./images/ecom-plant-pic-4.jpeg" },
  ]);
  return (
    <>
      <SimpleImageSlider
        width={896}
        height={504}
        images={images}
        showBullets={true}
        slideDuration={0.5}
        showNavs={true}
      />

      <div>
        <section className="home-hero-container">
          <h1 className="home-hero-text-container">Plants</h1>
        </section>
      </div>

      <h2 className="plant-variety-header-container">
        Select From A Variety Of Plants, Delivered With Care, Directly To Your
        Home
      </h2>

      <div className="indoor-and-outdoor-container">
        <div className="indoor-hero-container">
          <h2 className="indoor-hero-text-container">Indoor Plants</h2>
          <button className="indoor-and-outdoor-button-container" type="button">
            Shop Now
          </button>
        </div>

        <div className="outdoor-hero-container">
          <h2 className="outdoor-hero-text-container">Outdoor Plants</h2>
          <button className="indoor-and-outdoor-button-container" type="button">
            Shop Now
          </button>
        </div>
      </div>

      <h2 className="popular-text-container">Shop Our Popular Products</h2>

      <div className="popular-img-container">
        <div className="popular-img-single-container">
          <img
            src="https://cdn.shopify.com/s/files/1/2528/3612/products/FemRosaPotsmall_228x228.jpg?v=1600206733"
            alt=" Of Pot"
          />
          <p className="popular-text-ptag">Prickly Perry Pot</p>
          <button className="popular-img-button" type="button">
            Shop Now
          </button>
        </div>

        <div className="popular-img-single-container">
          <img
            src="https://cdn.shopify.com/s/files/1/2528/3612/products/1-Philodendron-Monstera-6_228x228.jpg?v=1591900926"
            alt=" Of Plant"
          />
          <p className="popular-text-ptag">Monsteras Plant</p>
          <button className="popular-img-button" type="button">
            Shop Now
          </button>
        </div>

        <div className="popular-img-single-container">
          <img
            src="https://cdn.shopify.com/s/files/1/2528/3612/products/PottingSoil-1lbBag_228x228.jpg?v=1587521625"
            alt=" Of Soil"
          />
          <p className="popular-text-ptag">Indoor Potting Soil</p>
          <button className="popular-img-button" type="button">
            Shop Now
          </button>
        </div>

        <div className="popular-img-single-container">
          <img
            src="https://cdn.shopify.com/s/files/1/2528/3612/products/1-Succulent-StringofPearls-4_228x228.jpg?v=1588786114"
            alt=" Of Plant"
          />
          <p className="popular-text-ptag">String of Pearls Succulent</p>
          <button className="popular-img-button" type="button">
            Shop Now
          </button>
        </div>

        <div className="popular-img-single-container">
          <img
            src="https://cdn.shopify.com/s/files/1/2528/3612/products/GiaGiraffePlanter_228x228.jpg?v=1600206968"
            alt=" Of Planter"
          />
          <p className="popular-text-ptag">Bill The Giraffe Planter</p>
          <button className="popular-img-button" type="button">
            Shop Now
          </button>
        </div>

        <div className="popular-img-single-container">
          <img
            src="https://cdn.shopify.com/s/files/1/2528/3612/products/Supplies_Spritzer_V2_228x228.jpg?v=1586049439"
            alt=" Of Mister"
          />
          <p className="popular-text-ptag">24K Gold Plant Mister</p>
          <button className="popular-img-button" type="button">
            Shop Now
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;
