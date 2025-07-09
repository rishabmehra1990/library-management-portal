import React from "react";
import { useState, useEffect } from "react";
import images from "./data";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./banner.css"

const Banner = () => {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
  const interval = setInterval(() => {
    setSlide((prev) => (prev + 1) % images.length);
  }, 3000);

  return () => clearInterval(interval); 
  }, []);

  const nextSlide = () => {
    setSlide(slide === images.length-1 ? 0 : slide+1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? images.length-1 : slide-1);
  };

  return (
    <div className="banner">
      <BsArrowLeftCircleFill className="arrow arrow-left" onClick={prevSlide}/>
      {images && images.map((item, idx) => (
        <img src={item.src} alt={item.alt} key={idx} className={slide===idx ? "slide" : "slide slide-hidden"}/>
      ))}
      <BsArrowRightCircleFill className="arrow arrow-right" onClick={nextSlide}/>
    </div>
  );
};

export default Banner
