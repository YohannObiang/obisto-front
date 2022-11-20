import React from "react";
import Slider from "react-slick";

const Caroussel = ({image,image2,image3,image4,image5, nom, Borrowed}) => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    var img = `${image}`
    var img2 = `${image2}`
    var img3 = `${image3}`
    var img4 = `${image4}`
    var img5 = `${image5}`
    console.log(Borrowed)
    console.log(image2)
    console.log(image3)    
    return (
      <div className='caroussel'>
        <Slider {...settings}>
        <div className="slideimg" >
          <img src={img}  height="100%" alt="" />
        </div>
        <div className="slideimg">
          <img src={img2} height="100%" alt="" />
        </div>
        <div className="slideimg">
          <img src={image3} height="100%" alt="" />
        </div>
        <div className="slideimg">
          <img src={image4} height="100%" alt="" />
        </div>
        <div className="slideimg">
          <img src={image5} height="100%" alt="" />
        </div>
         
        </Slider>
      </div>
    );
  }

  export default Caroussel;
