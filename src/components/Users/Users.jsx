import React from 'react';
// IMG
import avatar1 from '../../img/avt1.png';
import avatar2 from '../../img/avt2.png';
import avatar3 from '../../img/avt3.png';
import avatar4 from '../../img/avt4.png';
// ICONS
import { BsFillCircleFill } from 'react-icons/bs';

const Users = () => {
  return (
    <div className="flex flex-col justify-center items-center space-x-5 space-y-2 lg:flex-row  lg:space-y-0 lg:justify-start">
      <div className="flex -space-x-2">
        <div className="w-12 h-12 rounded-full">
          <img src={avatar1} alt="avatar 1" />
        </div>
        <div className="w-12 h-12 rounded-full">
          <img src={avatar2} alt="avatar 2" />
        </div>
        <div className="w-12 h-12 rounded-full">
          <img src={avatar3} alt="avatar 3" />
        </div>
        <div className="w-12 h-12 rounded-full">
          <img src={avatar4} alt="avatar 4" />
        </div>
      </div>
      <div className="flex items-center space-x-2 font-secondary font-medium">
        <BsFillCircleFill className="text-xs text-green-500 animate-pulse" />
        <div>400k people online</div>
      </div>
    </div>
  );
};

export default Users;
