import React from 'react';
// IMG
import headsets1 from '../../assets/img/headset-1.png';
import headsets2 from '../../assets/img/headset-2.png';
import headsets3 from '../../assets/img/headset-3.png';
import headsets4 from '../../assets/img/headset-4.png';

const Headsets = () => {
  return (
    <div className="py-12 lg:py-24">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6" data-aos="fade-down" data-aos-offset="300">
          Mixed Reality Headsets
        </h2>
        <div className="grid gap-y-4 lg:grid-cols-2 lg:gap-9">
          <div className="relative" data-aos="zoom-in" data-aos-delay="1000" data-aos-offset="300">
            <img src={headsets1} alt="headsets1" />
            <div className="absolute bottom-0 bg-white/20 backdrop-blur-md max-w-[300px] min-h-[150px] p-10">
              <h4 className="font-semibold text-xl mb-2">Metaverse</h4>
              <p>A Network of 3D virtual worlds focused on social connection. </p>
            </div>
          </div>
          <div className="relative" data-aos="zoom-in" data-aos-delay="1300" data-aos-offset="300">
            <img src={headsets2} alt="headsets2" />
            <div className="absolute bottom-0 bg-white/20 backdrop-blur-md max-w-[300px] min-h-[150px] p-6">
              <h4 className="font-semibold text-xl mb-2">AIoT</h4>
              <p>AI and IoT are both emerging innovative technologies with a lot of potentials. </p>
            </div>
          </div>
          <div className="relative" data-aos="zoom-in" data-aos-delay="1600" data-aos-offset="300">
            <img src={headsets3} alt="headsets3" />
            <div className="absolute bottom-0 bg-white/20 backdrop-blur-md max-w-[300px] min-h-[150px] p-6">
              <h4 className="font-semibold text-xl mb-2">HoloLens</h4>
              <p>HoloLens display information, blend with the real world , or even simulate a virtual world. </p>
            </div>
          </div>
          <div className="relative" data-aos="zoom-in" data-aos-delay="1900" data-aos-offset="300">
            <img src={headsets4} alt="headsets4" />
            <div className="absolute bottom-0 bg-white/20 backdrop-blur-md max-w-[300px] min-h-[150px] p-6">
              <h4 className="font-semibold text-xl mb-2">TPCASTT</h4>
              <p>Method is great to start students reading and inferring with little assistance from the instructor</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Headsets;
