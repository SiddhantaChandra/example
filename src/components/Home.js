import React, { useEffect } from 'react';
import hero1 from '../images/hero-1.webp';
import hero2 from '../images/hero-2.webp';
import hero3 from '../images/hero-3.webp';
import hero4 from '../images/hero-4.webp';
import rotatingText from '../images/rotating2.svg';
import { useState } from 'react';

function Home() {
  const [image, setImage] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cycleImage = () => {
      setImage((prevImage) => !prevImage);
    };

    const interval = setInterval(cycleImage, 20000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const delay = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => {
      clearTimeout(delay);
    };
  }, []);

  const heroLinks = [
    'Financial Performance',
    'Shareholder Details',
    'Our Technologies',
    'Terms & Policies',
  ];
  return (
    <div className="2xl:px-24 md:px-12 relative">
      <div className="absolute top-[2%]  z-20 cursor-default  2xl:top-[2%]">
        <h3 className="font-Hero text-[4.2rem]  uppercase text-black leading-[5.4rem]  2xl:leading-[7.2rem] 2xl:text-[6rem]">
          Protecting Lives with
          <br />
          Quality Products
        </h3>
        <h4 className=" w-[20rem] font-OpenSans text-sm 2xl:pt-6 2xl:hidden">
          Reliable Safety Solutions: Building a Safer Tomorrow through Quality
          Products and Expertise.
        </h4>
        <h4 className=" w-[18rem] font-medium font-OpenSans text-sm hidden 2xl:pt-6 2xl:block">
          Reliable Safety Solutions: We are committed to forging a safer future
          by delivering top-notch products that meet the highest quality
          standards.
          <br />
          <br /> With our expertise in the field, we strive to provide
          innovative solutions that ensure the well-being of individuals and
          foster a culture of safety. Join us in creating a secure environment
          for all.
        </h4>
      </div>
      <section className="hero-grid z-10">
        <div className=" font-Hero flex flex-col w-60 col-span-1 justify-between h-44 pr-5 pb-4 self-end text-[14px]">
          {heroLinks.map((link) => (
            <button
              key={link}
              className="flex flex-grow w-full justify-between test items-center  text-[15px] text-black"
            >
              <span>{link}</span>
              <span>+</span>
            </button>
          ))}
        </div>
        <div className="relative">
          <img
            src={image ? hero1 : hero3}
            alt="engineer"
            className={` mt-48 z-20 2xl:mt-64 duration-300 `}
          />
          <div
            style={{ display: isVisible ? 'block' : 'none' }}
            className="h-8 w-24 rounded-full bg-transparent hero-shadow absolute bottom-3 left-[56%] transform -translate-x-1/2 z-[-1] 2xl:w-64"
          ></div>
        </div>

        <div className="grid-right pl-24 flex flex-col justify-between">
          <div className=" w-44">
            <img
              src={hero2}
              alt="equipments"
              className="mt-20 duration-300 ease-in-out "
            />
            <p className="font-OpenSans text-[14px] pt-4 text-gray-600 leading-5">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div className=" w-44 hidden 2xl:block">
            <img
              src={hero4}
              alt="equipments"
              className="duration-300 ease-in-out "
            />
            <p className="font-OpenSans text-[14px] pt-4 text-gray-600 leading-5">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>

          <div>
            <img
              src={rotatingText}
              alt="my svg"
              className="rotating-svg  2xl:w-44"
            />
          </div>
        </div>
      </section>
      <div className="h-96 w-50"></div>
    </div>
  );
}

export default Home;
