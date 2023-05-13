import React from "react";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import SpecialOffers from "../components/SpecialOffers";
import "./Home.css";
import Slider from "react-slick";

import image1 from "../img/Carousel1.jpg";
import image2 from "../img/Carousel2.jpg";
import image3 from "../img/Carousel3.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const promotions = [
  { id: 1, image: image1 },
  { id: 2, image: image2 },
  { id: 3, image: image3 },
];

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "60px",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "30px",
        },
      },
    ],
    autoplay: true,
    autoplaySpeed: 6000,
  };

  return (
    <div>
      <Navbar />
      <h1>Welcome to the Jones</h1>
      <p>Nous servons des repas délicieux et rapides pour vous satisfaire !</p>
      <div className="Carousel">
        <Slider {...settings}>
          {promotions.map((promotion) => (
            <div key={promotion.id}>
              <img src={promotion.image} />
            </div>
          ))}
        </Slider>
      </div>
      <SpecialOffers />
      <Footer />
    </div>
  );
};

export default Home;