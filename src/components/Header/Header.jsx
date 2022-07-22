import React, { useState } from 'react';
// COMPONENTS
import Nav from './Nav/Nav';
import NavMobile from './NavMobile/NavMobile';
// IMG
import logo from '../../assets/img/logo.svg';
// ICONS
import { HiOutlineMenu } from 'react-icons/hi';

const Header = () => {
  const [menu, setMenu] = useState(false);
  return (
    <div className="py-6" data-aos="fade-down" data-aos-duration="2000" data-aos-delay="900">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <a href="#">
            <img className="h-[30px]" src={logo} alt="logo" />
          </a>
          <HiOutlineMenu onClick={() => setMenu(true)} className="lg:hidden text-3xl text-white cursor-pointer" />
          {menu ? <NavMobile menu={menu} setMenu={setMenu} /> : <Nav />}
        </div>
      </div>
    </div>
  );
};

export default Header;
