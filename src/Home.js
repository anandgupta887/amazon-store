import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  const getImageLink = () => {
    let arr = [
      "https://m.media-amazon.com/images/I/61WLOpMnNSL._SX3000_.jpg",
      "https://m.media-amazon.com/images/I/41p+WR-JlML._SX900_.jpg",
      "https://m.media-amazon.com/images/I/81ufZBFz53L._SX3000_.jpg",
      "https://m.media-amazon.com/images/I/71tAakBaAsL._SX3000_.jpg",
      "https://m.media-amazon.com/images/I/61IkazYhP1L._SX3000_.jpg",
      "https://m.media-amazon.com/images/I/61y9Gzn5b6L._SX3000_.jpg",
    ];

    return arr[((Math.random() * 100) % 6).toFixed(0)];
  };

  return (
    <div className="home">
      <div className="home__container">
        <img className="home__image" src={getImageLink()} alt="" />
        <div className="home__row">
          <Product
            id="49538075"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={5}
          />
          <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            image="https://m.media-amazon.com/images/I/91gRKbX+S8L._AC_UY218_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="4903850"
            title="Samsung Galaxy Watch Active2 Bluetooth Aluminium 44mm - Aqua Black (UK Version)"
            price={225.6}
            image="https://m.media-amazon.com/images/I/51-0kIabXmL._AC_UY218_.jpg"
            rating={4}
          />
          <Product
            id="48245845"
            title="Echo Plus (2nd Gen) – Premium sound with a built-in smart home hub - Charcoal fabric"
            price={79.99}
            image="https://m.media-amazon.com/images/I/71CR1+xnTIL._AC_UY218_.jpg"
            rating={4}
          />
          <Product
            id="88484884"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 256GB) - Space Grey (4th Generation)"
            price={1069.0}
            image="https://m.media-amazon.com/images/I/81WhK5+gf2L._AC_UY218_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung LC4RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1500.99}
            image="https://m.media-amazon.com/images/I/81aTiG1VpzL._AC_UY218_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
