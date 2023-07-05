import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  const links = [
    { name: 'Home', link: '/' },
    { name: 'Investors', link: '/investor' },
    { name: 'About Us', link: '/about' },
    { name: 'Contact Us', link: '/contact' },
  ];
  return (
    <header className="flex items-center justify-between py-4 z-10 ">
      <a href="/">
        <h1 className="font-Cormorant uppercase text-2xl ">
          <span className=" text-black">Mall</span>
          <span className=" text-[#f8b171]">com</span>
        </h1>
      </a>
      <nav className="flex gap-10">
        {links.map((el) => (
          <a
            href={el.link}
            key={el.link}
            className="font-Hero text-base text-[15px] leading-none py-1 test text-black"
          >
            {el.name.toUpperCase()}
          </a>
        ))}
      </nav>

      <Link to="/products">
        <button className="py-2 px-6 bg-black text-white font-Cormorant font-medium rounded-full hover:bg-[#f8b171] hover:text-black transition-all duration-200 ease-in-out">
          Products &rarr;
        </button>
      </Link>
    </header>
  );
}

export default NavBar;
