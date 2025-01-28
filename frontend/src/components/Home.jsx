import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Helmet } from "react-helmet-async";
import About from "./About";
import Footer from "./Footer";
import GetStarted from "./GetStarted";
import Header from "./Header";
import Process from "./Process";
import Why from "./Why";
import Reviews from "./Reviews";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 0,
      image: "images/charity1.jpg",
      text: "The only charity service that is 100% TRANSPARENT",
    },
    {
      id: 1,
      image: "images/charity2.jpg",
      text: "Zakat: A duty of faith, a joy of the heart",
    },
    {
      id: 2,
      image: "images/charity6.jpg",
      text: "Charity purifies the soul and wealth",
    },
  ];

  const settings = {
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    dots: true,
    arrows: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: true,
          slidesToShow: 1,
          arrows: true,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Aasra Foundation - Empowering Communities Through Charity</title>
        <meta
          name="description"
          content="Aasra Foundation is a trusted Muslim charity platform in India. Join us in making a difference by supporting those in need through various charitable initiatives."
        />
        <meta
          name="keywords"
          content="Muslim charity, Aasra Foundation, Islamic charity, community support, donations, zakat, sadaqah, helping the needy, charity India"
        />
        <meta name="author" content="Aasra Foundation" />
        <link rel="canonical" href="https://khidmatekhalq.netlify.app" />
        <meta
          property="og:title"
          content="Aasra Foundation - Empowering Communities Through Charity"
        />
        <meta
          property="og:description"
          content="Join Aasra Foundation, India's trusted Muslim charity platform, and contribute to transforming lives. Together, we can make a difference!"
        />
        <meta
          property="og:image"
          content="https://aasrafoundation.netlify.app/khidmat-logo.png"
        />
        <meta property="og:url" content="https://aasrafoundation.netlify.app" />
      </Helmet>

      <div className="flex relative">
        <div className="overflow-hidden min-h-screen">
          <Slider {...settings}>
            {slides.map((slide) => (
              <div key={slide.id} className="relative w-full h-screen">
                <div
                  className="object-contain brightness-50 absolute inset-0 bg-no-repeat bg-cover bg-center z-0"
                  style={{ backgroundImage: `url(${slide.image})` }}
                ></div>

                <div className="relative z-10 flex items-center justify-center h-full">
                  <div
                    className={`text-center text-white transition-all duration-1000 transform ${currentSlide === slide.id
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-20"
                      }`}
                  >
                    <h1 className="sm:text-6xl text-xl font-semibold">
                      {slide.text}
                    </h1>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <Header />
      </div>

      <About />
      <div className="w-full bg-pink-50">
        <Process />
      </div>
      <Reviews />
      <GetStarted />
      <Why />
      <Footer />
    </>
  );
};

export default Home;
