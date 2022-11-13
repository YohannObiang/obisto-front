import React, { Component } from "react";
import Slider from "react-slick";
import Ps4 from '../assets/PS4.png'

export default class Caroussel extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <h2> Single Item</h2>
        <Slider {...settings}>
        <div className="slideimg">
          <img src="/images/Mixeur.jpeg" height="100%" alt="" />
        </div>
        <div className="slideimg">
          <img src="/images/Mixeur.jpeg" height="100%" alt="" />
        </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    );
  }
}
