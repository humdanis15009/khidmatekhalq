import React, { useRef } from "react";
import Slider from "react-slick";

const SliderComponent = () => {
  const sliderRef = useRef(null);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: (
      <button className="text-white absolute right-0 top-1/2 transform -translate-y-1/2 bg-green-500 p-2 rounded-full shadow-md hover:bg-green-700">
        ❯
      </button>
    ),
    prevArrow: (
      <button className="text-white absolute left-0 top-1/2 transform -translate-y-1/2 bg-green-500 p-2 rounded-full shadow-md hover:bg-green-700">
        ❮
      </button>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <>
      <h1 className="text-center lg:text-5xl text-2xl mt-8 font-bold text-green-700">
        VOICES OF CHANGE
      </h1>
      <div className="lg:mt-[60px] lg:mb-16 mb-10 lg:mr-16 lg:ml-20 overflow-hidden lg:h-[560px] relative">
        <Slider ref={sliderRef} {...settings} className="relative gap-x-6">
          {/* Slide 1 */}
          <div className="flex items-center p-4">
            <div className="lg:h-[500px] h-[370px] w-[250px] border-2 border-green-700 mx-auto lg:w-[350px] transform transition-transform hover:scale-105 hover:bg-green-50 duration-500 shadow-2xl rounded-2xl lg:p-4 p-2 flex flex-col items-center">
              <img
                className="object-fill rounded-2xl w-[225px] lg:h-[250px] lg:w-[310px] h-[180px]"
                src="images/grocery.jpeg"
                alt="yusuf-photo"
              />
              <p className="lg:text-sm text-[11px] text-green-700 font-bold my-3 text-center">
                -YUSUF
              </p>
              <p className="text-center lg:text-sm text-[11px] text-gray-700">
                &ldquo;Yusuf, a dedicated grocery shop owner, lost everything
                during the COVID-19 pandemic. With our support, he restocked and
                reopened his shop. Today, his business thrives, bringing smiles
                back to his family&ldquo;
              </p>
            </div>
          </div>

          <div className="flex items-center p-4">
            <div className="lg:h-[500px] h-[370px] w-[250px] border-2 border-green-700 mx-auto lg:w-[350px] transform transition-transform hover:scale-105 hover:bg-green-50 duration-500 shadow-2xl rounded-2xl lg:p-4 p-2 flex flex-col items-center">
              <img
                className="object-fill rounded-2xl w-[225px] lg:h-[250px] lg:w-[310px] h-[180px]"
                src="images/widow.jpeg"
                alt="rafeekan-photo"
              />
              <p className="lg:text-sm text-[11px] text-green-700 font-bold my-3 text-center">
                -RAFEEKAN BANO
              </p>
              <p className="text-center lg:text-sm text-[11px] text-gray-700">
                &ldquo;Rafeekan Bano, a brave widow, lost her husband during the
                COVID-19 pandemic. Her husband was the sole breadwinner of the
                family. With our support, we are providing her with a monthly
                pension of ₹1100, helping her rebuild her life and bring
                stability to her family.&ldquo;
              </p>
            </div>
          </div>
          <div className="flex items-center p-4">
            <div className="lg:h-[500px] h-[370px] w-[250px] border-2 border-green-700 mx-auto lg:w-[350px] transform transition-transform hover:scale-105 hover:bg-green-50 duration-500 shadow-2xl rounded-2xl lg:p-4 p-2 flex flex-col items-center">
              <img
                className="object-fill rounded-2xl w-[225px] lg:h-[250px] lg:w-[310px] h-[180px]"
                src="images/food.png"
                alt="street-vendors"
              />
              <p className="lg:text-sm text-[11px] text-green-700 font-bold my-3 text-center">
                -NOURISHING THE NEEDY
              </p>
              <p className="text-center lg:text-sm text-[11px] text-gray-700">
                &ldquo;As part of our ongoing effort to support those in need,
                we distribute essential raw food materials such as cooking oil,
                lentils, rice, wheat flour, and more to individuals and families
                living below the poverty line. These distributions take place
                under every campaign held on the second and fourth Sunday of
                each month, providing nourishment and hope to those who need it
                most.&ldquo;
              </p>
            </div>
          </div>
          <div className="flex items-center p-4">
            <div className="lg:h-[500px] h-[370px] w-[250px] border-2 border-green-700 mx-auto lg:w-[350px] transform transition-transform hover:scale-105 hover:bg-green-50 duration-500 shadow-2xl rounded-2xl lg:p-4 p-2 flex flex-col items-center">
              <img
                className="object-fill rounded-2xl w-[225px] lg:h-[250px] lg:w-[310px] h-[180px]"
                src="images/tailor.jpeg"
                alt="fayyaz-photo"
              />
              <p className="lg:text-sm text-[11px] text-green-700 font-bold my-3 text-center">
                -FAYYAZ
              </p>
              <p className="text-center lg:text-sm text-[11px] text-gray-700">
                &ldquo;As an organization, we take pride in helping individuals
                like Fayyaz, who faced health struggles that forced him to close
                his shop. With our support, we assisted him in rebuilding his
                business and getting back on his feet. Today, Fayyaz’s shop is
                thriving again, a testament to his resilience and our commitment
                to helping those in need.&ldquo;
              </p>
            </div>
          </div>
          <div className="flex items-center p-4">
            <div className="lg:h-[500px] h-[370px] w-[250px] border-2 border-green-700 mx-auto lg:w-[350px] transform transition-transform hover:scale-105 hover:bg-green-50 duration-500 shadow-2xl rounded-2xl lg:p-4 p-2 flex flex-col items-center">
              <img
                className="object-fill rounded-2xl w-[225px] lg:h-[250px] lg:w-[310px] h-[180px]"
                src="images/barber.webp"
                alt="irshad-photo"
              />
              <p className="lg:text-sm text-[11px] text-green-700 font-bold my-3 text-center">
                -IRSHAD
              </p>
              <p className="text-center lg:text-sm text-[11px] text-gray-700">
                &ldquo;We are proud to have supported Irshad, a barber whose
                business was struggling due to financial hardship. With our
                assistance, he was able to revitalize his shop and get back on
                his feet. Today, Irshad is successfully running his barbershop,
                and his journey is a true testament to the power of second
                chances.&ldquo;
              </p>
            </div>
          </div>
          <div className="flex items-center p-4">
            <div className="lg:h-[500px] h-[370px] w-[250px] border-2 border-green-700 mx-auto lg:w-[350px] transform transition-transform hover:scale-105 hover:bg-green-50 duration-500 shadow-2xl rounded-2xl lg:p-4 p-2 flex flex-col items-center">
              <img
                className="object-fill rounded-2xl w-[225px] lg:h-[250px] lg:w-[310px] h-[180px]"
                src="images/date-palm.jpeg"
                alt="grocery-photo"
              />
              <p className="lg:text-sm text-[11px] text-green-700 font-bold my-3 text-center">
                -YUSUF
              </p>
              <p className="text-center lg:text-sm text-[11px] text-gray-700">
                &ldquo;Yusuf, a dedicated grocery shop owner, lost everything
                during the COVID-19 pandemic. With our support, he restocked and
                reopened his shop. Today, his business thrives, bringing smiles
                back to his family&ldquo;
              </p>
            </div>
          </div>
        </Slider>

        <div className="flex justify-between absolute w-full top-1/2 transform -translate-y-1/2">
          <button
            className="bg-green-500 text-white p-2 rounded-full shadow-md hover:bg-green-700"
            onClick={handlePrev}
          >
            ❮
          </button>
          <button
            className="bg-green-500 text-white p-2 rounded-full shadow-md hover:bg-green-700"
            onClick={handleNext}
          >
            ❯
          </button>
        </div>
      </div>
    </>
  );
};

export default SliderComponent;
