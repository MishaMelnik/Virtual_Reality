import React from 'react';
import { IoClose } from 'react-icons/io5';

const NavMobile = (props) => {
  const { menu, setMenu } = props;
  return (
    <div
      className={`${
        menu ? 'right-0' : '-right-full'
      } ease-in duration-100 transition ease-in z-40 fixed top-0 bottom-0 w-48 transition-all`}
    >
      <div className="lg:hidden bg-[#251f3f] w-full h-full">
        <IoClose onClick={() => setMenu(false)} className="lg:hidden absolute text-3xl left-4 top-6 cursor-pointer" />
        <ul className="flex flex-col items-center justify-center space-y-8 h-full font-secondary">
          <li className="text-lg">
            <a href="#">Home</a>
          </li>
          <li className="text-lg">
            <a href="#">Company</a>
          </li>
          <li className="text-lg">
            <a href="#">Features</a>
          </li>
          <li className="btn">
            <a href="#">Sign in</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default NavMobile;
