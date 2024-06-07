import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import"./Carousal.css"
import Image from "../../../img1.png"
const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        <div className="carousel-slide ">
          <img src={Image} alt="Slide 1" />
          <div className="carousel-caption">
            <h1>Spider-Man: Into The Spider Verse</h1>
            <p>
              Spider-Man: Across the Spider-Verse, now zipping into the theater-verse, is the long-awaited follow-up to 2018's "Spider-Man: Into the Spider-Verse," a revelatory thrill ride that deservedly won the Oscar for animation.
               </p>
             <button className="watch-trailer-button flex gap-1 items-center"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM9.5547 7.16795C9.24784 6.96338 8.8533 6.94431 8.52814 7.11833C8.20298 7.29235 8 7.63121 8 8V12C8 12.3688 8.20298 12.7077 8.52814 12.8817C8.8533 13.0557 9.24784 13.0366 9.5547 12.8321L12.5547 10.8321C12.8329 10.6466 13 10.3344 13 10C13 9.66565 12.8329 9.35342 12.5547 9.16795L9.5547 7.16795Z" fill="#FF0059"/>
            </svg>
            Watch trailer</button>
              </div>
        </div>
        <div className="carousel-slide ">
          <img src={Image} alt="Slide 1" />
          <div className="carousel-caption">
            <h1>Spider-Man: Into The Spider Verse</h1>
            <p>
              Spider-Man: Across the Spider-Verse, now zipping into the theater-verse, is the long-awaited follow-up to 2018's "Spider-Man: Into the Spider-Verse," a revelatory thrill ride that deservedly won the Oscar for animation.
               </p>
             <button className="watch-trailer-button flex gap-1 items-center"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM9.5547 7.16795C9.24784 6.96338 8.8533 6.94431 8.52814 7.11833C8.20298 7.29235 8 7.63121 8 8V12C8 12.3688 8.20298 12.7077 8.52814 12.8817C8.8533 13.0557 9.24784 13.0366 9.5547 12.8321L12.5547 10.8321C12.8329 10.6466 13 10.3344 13 10C13 9.66565 12.8329 9.35342 12.5547 9.16795L9.5547 7.16795Z" fill="#FF0059"/>
            </svg>
            Watch trailer</button>
              </div>
        </div>
        <div className="carousel-slide ">
          <img src={Image} alt="Slide 1" />
          <div className="carousel-caption">
            <h1>Spider-Man: Into The Spider Verse</h1>
            <p>
              Spider-Man: Across the Spider-Verse, now zipping into the theater-verse, is the long-awaited follow-up to 2018's "Spider-Man: Into the Spider-Verse," a revelatory thrill ride that deservedly won the Oscar for animation.
               </p>
             <button className="watch-trailer-button flex gap-1 items-center"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM9.5547 7.16795C9.24784 6.96338 8.8533 6.94431 8.52814 7.11833C8.20298 7.29235 8 7.63121 8 8V12C8 12.3688 8.20298 12.7077 8.52814 12.8817C8.8533 13.0557 9.24784 13.0366 9.5547 12.8321L12.5547 10.8321C12.8329 10.6466 13 10.3344 13 10C13 9.66565 12.8329 9.35342 12.5547 9.16795L9.5547 7.16795Z" fill="#FF0059"/>
            </svg>
            Watch trailer</button>
              </div>
        </div>
        <div className="carousel-slide ">
          <img src={Image} alt="Slide 1" />
          <div className="carousel-caption">
            <h1>Spider-Man: Into The Spider Verse</h1>
            <p>
              Spider-Man: Across the Spider-Verse, now zipping into the theater-verse, is the long-awaited follow-up to 2018's "Spider-Man: Into the Spider-Verse," a revelatory thrill ride that deservedly won the Oscar for animation.
               </p>
             <button className="watch-trailer-button flex gap-1 items-center"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM9.5547 7.16795C9.24784 6.96338 8.8533 6.94431 8.52814 7.11833C8.20298 7.29235 8 7.63121 8 8V12C8 12.3688 8.20298 12.7077 8.52814 12.8817C8.8533 13.0557 9.24784 13.0366 9.5547 12.8321L12.5547 10.8321C12.8329 10.6466 13 10.3344 13 10C13 9.66565 12.8329 9.35342 12.5547 9.16795L9.5547 7.16795Z" fill="#FF0059"/>
            </svg>
            Watch trailer</button>
              </div>
        </div>
        <div className="carousel-slide ">
          <img src={Image} alt="Slide 1" />
          <div className="carousel-caption">
            <h1>Spider-Man: Into The Spider Verse</h1>
            <p>
              Spider-Man: Across the Spider-Verse, now zipping into the theater-verse, is the long-awaited follow-up to 2018's "Spider-Man: Into the Spider-Verse," a revelatory thrill ride that deservedly won the Oscar for animation.
               </p>
             <button className="watch-trailer-button flex gap-1 items-center"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM9.5547 7.16795C9.24784 6.96338 8.8533 6.94431 8.52814 7.11833C8.20298 7.29235 8 7.63121 8 8V12C8 12.3688 8.20298 12.7077 8.52814 12.8817C8.8533 13.0557 9.24784 13.0366 9.5547 12.8321L12.5547 10.8321C12.8329 10.6466 13 10.3344 13 10C13 9.66565 12.8329 9.35342 12.5547 9.16795L9.5547 7.16795Z" fill="#FF0059"/>
            </svg>
            Watch trailer</button>
              </div>
        </div>
        <div className="carousel-slide ">
          <img src={Image} alt="Slide 1" />
          <div className="carousel-caption">
            <h1>Spider-Man: Into The Spider Verse</h1>
            <p>
              Spider-Man: Across the Spider-Verse, now zipping into the theater-verse, is the long-awaited follow-up to 2018's "Spider-Man: Into the Spider-Verse," a revelatory thrill ride that deservedly won the Oscar for animation.
               </p>
             <button className="watch-trailer-button flex gap-1 items-center"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM9.5547 7.16795C9.24784 6.96338 8.8533 6.94431 8.52814 7.11833C8.20298 7.29235 8 7.63121 8 8V12C8 12.3688 8.20298 12.7077 8.52814 12.8817C8.8533 13.0557 9.24784 13.0366 9.5547 12.8321L12.5547 10.8321C12.8329 10.6466 13 10.3344 13 10C13 9.66565 12.8329 9.35342 12.5547 9.16795L9.5547 7.16795Z" fill="#FF0059"/>
            </svg>
            Watch trailer</button>
              </div>
        </div>
      </Slider>
      
    </div>
  );
};

export default Carousel;
