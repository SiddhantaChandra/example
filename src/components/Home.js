import NavBar from './NavBar';
import React, { useEffect } from 'react';
import hero1 from '../images/hero-1.webp';
import hero2 from '../images/hero-2.webp';
import hero3 from '../images/hero-3.webp';
import { useState } from 'react';

function Home() {
  const [image, setImage] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cycleImage = () => {
      console.log('gay');
      setImage((prevImage) => !prevImage);
    };

    const interval = setInterval(cycleImage, 10000);
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
      <NavBar />
      <h3 className="font-Hero text-[5rem] uppercase text-black absolute top-[13%] leading-[6rem] z-20 cursor-default 2xl:text-[6rem] 2xl:top-[11%] 2xl:leading-[8rem]">
        Quality Safety
        <br />
        Equipments
      </h3>
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

        <div className="justify-items-center pl-24">
          <img
            src={hero2}
            alt="equipments"
            className="mt-20 duration-300 ease-in-out "
          />
          <p className="font-Poppins text-[14px] pt-4 text-gray-600 leading-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
      </section>
      <div className="h-96 w-50"></div>
    </div>
  );
}

export default Home;
