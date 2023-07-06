import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

function NavBar() {
  const links = [
    { name: 'Home', link: '/' },
    { name: 'Investors', link: '/investor' },
    { name: 'About Us', link: '/about' },
    { name: 'Contact Us', link: '/contact' },
  ];

  const location = useLocation();
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  return (
    <header className="flex items-center justify-between py-4 z-10 2xl:px-24 md:px-12">
      <a href="/">
        <h1 className="font-Cormorant uppercase text-2xl ">
          <span className=" text-black">Mall</span>
          <span className=" text-[#f8b171]">com</span>
        </h1>
      </a>
      <nav className="flex gap-10">
        {links.map((el) => (
          <NavLink
            exact
            to={el.link}
            key={el.link}
            activeClassName="active-test"
            className={`test font-Hero text-base text-[15px] leading-none py-1 text-black ${
              activeLink === el.link ? 'active-test' : ''
            }`}
          >
            {el.name.toUpperCase()}
          </NavLink>
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
