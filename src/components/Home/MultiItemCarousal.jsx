import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React from 'react'
import { topMeal } from './topMeal';
import CarousalItem from './CarousalItem';


const MultiItemCarousal=()=> {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false
      };
  return (
    <div>
        <Slider {...settings}>
            {topMeal.map((item)=><CarousalItem key={item.title} image={item.image} title={item.title}/>)}
        </Slider>
    </div>
  )
}

export default MultiItemCarousal;
