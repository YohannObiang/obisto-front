import React from "react";
import Slider from "react-slick";

const Caroussel = ({image, nom}) => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    var img = `/images/${image}`
    return (
      <div>
        <h2>{nom}</h2>
        <Slider {...settings}>
        <div className="slideimg" >
          <img src={img}  height="100%" alt="" />
        </div>
        <div className="slideimg">
          <img src="/images/" height="100%" alt="" />
        </div>
        <div className="slideimg">
          <img src="/images/" height="100%" alt="" />
        </div>
        <div className="slideimg">
          <img src="/images/" height="100%" alt="" />
        </div>
        <div className="slideimg">
          <img src="/images/" height="100%" alt="" />
        </div>
         
        </Slider>
      </div>
    );
  }

  export default Caroussel;
