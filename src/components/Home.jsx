import About from "./About";
import Footer from "./Footer";
import GetStarted from "./GetStarted";
import Header from "./Header";
import Process from "./Process";
import Why from "./Why";
import Reviews from "./Reviews";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          dots: true,
          slidesToShow: 1,
          arrows: true,
          slidesToScroll: 1,
        },
      },
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
        <title>Khidmat-e-Khalq - Empowering Communities Through Charity</title>
        <meta
          name="description"
          content="Khidmat-e-Khalq is a trusted Muslim charity platform in India. Join us in making a difference by supporting those in need through various charitable initiatives."
        />
        <meta
          name="keywords"
          content="Muslim charity, Khidmat-e-Khalq, Islamic charity, community support, donations, zakat, sadaqah, helping the needy, charity India"
        />
        <meta name="author" content="Khidmat-e-Khalq" />
        <link rel="canonical" href="https://khidmatekhalq.netlify.app" />
        <meta
          property="og:title"
          content="Khidmat-e-Khalq - Empowering Communities Through Charity"
        />
        <meta
          property="og:description"
          content="Join Khidmat-e-Khalq, India's trusted Muslim charity platform, and contribute to transforming lives. Together, we can make a difference!"
        />
        <meta
          property="og:image"
          content="https://khidmatekhalq.netlify.app/khidmat-logo.png"
        />
        <meta property="og:url" content="https://khidmatekhalq.netlify.app" />
      </Helmet>

      <div className="flex relative">
        <>
          <div className="overflow-hidden min-h-screen">
            <Slider {...settings} className="relative ">
              <div className="relative w-full h-screen bg-no-repeat bg-cover bg-center">
                <div
                  className="absolute inset-0 bg-no-repeat bg-cover bg-center z-0"
                  style={{ backgroundImage: "url('images/img4.jpeg')" }}
                ></div>

                <div className="relative z-10 flex items-center justify-center h-full">
                  <div className="text-center text-white bg-opacity-60">
                    <h1 className="text-6xl font-semibold">
                      The only charity service that is 100% TRANSPARENT
                    </h1>
                    <h3 className="text-4xl pt-7 mx-44 font-semibold">
                      Donor recieves proofs in the form of images/videos of food stuff being donated along with the corresponding bills.
                    </h3>
                  </div>
                </div>
                 
              </div>

              <div className="relative w-full h-screen bg-no-repeat bg-cover bg-center">
                <div
                  className="absolute inset-0 bg-no-repeat bg-cover bg-center z-0"
                  style={{ backgroundImage: "url('images/img1.jpeg')" }}
                ></div>

                <div className="relative z-10 flex items-center justify-center h-full">
                  <div className="text-center text-white bg-opacity-60">
                    <h1 className="text-6xl font-semibold">
                      Zakat: A duty of faith, a joy of the heart
                    </h1>
                  </div>
                </div>
              </div>

              {/* <div className="relative w-full h-screen bg-no-repeat bg-cover bg-center">
                <div
                  className="absolute inset-0 bg-no-repeat bg-cover bg-center z-0"
                  style={{ backgroundImage: "url('images/img2.jpeg')" }}
                ></div>

                <div className="relative z-10 flex items-center justify-center h-full">
                  <div className="text-center text-white bg-opacity-60">
                    <h1 className="text-6xl font-semibold">
                      Every contrbution: A Transformative Change
                    </h1>
                  </div>
                </div>
              </div> */}

              <div className="relative w-full h-screen bg-no-repeat bg-cover bg-center">
                <div
                  className="absolute inset-0 bg-no-repeat bg-cover bg-center z-0"
                  style={{ backgroundImage: "url('images/img3.jpeg')" }}
                ></div>

                <div className="relative z-10 flex items-center justify-center h-full">
                  <div className="text-center text-white bg-opacity-60">
                    <h1 className="text-6xl font-semibold">
                      Charity purifies the soul and wealth
                    </h1>
                  </div>
                </div>
              </div>

              {/* <div className="relative w-full h-screen bg-no-repeat bg-cover bg-center">
                <div
                  className="absolute inset-0 bg-no-repeat bg-cover bg-center z-0"
                  style={{ backgroundImage: "url('images/img4.jpeg')" }}
                ></div>

                <div className="relative z-10 flex items-center justify-center h-full">
                  <div className="text-center text-white bg-opacity-60">
                    <h1 className="text-6xl font-semibold">
                      Zakat: A duty of faith, a joy of the heart
                    </h1>
                  </div>
                </div>
              </div> */}
            </Slider>
          </div>
        </>
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
}

export default Home;
