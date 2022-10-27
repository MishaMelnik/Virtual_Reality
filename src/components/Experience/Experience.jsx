import React from 'react';
// IMG
import img1 from '../../assets/img/exp-img1.png';
import img2 from '../../assets/img/exp-img2.png';

const Experience = () => {
  return (
    <div className="mb-12 lg:mb-24">
      <div className="container mx-auto">
        <div className="flex flex-col min-h-[480px] lg:space-x-20 lg:flex-row">
          <div className="flex-1 flex space-x-6 items-center lg:space-x-12">
            <div className="self-start" data-aos="fade-down" data-aos-offset="400">
              <img src={img1} alt="exampleOne" />
            </div>
            <div className="self-end" data-aos="fade-up">
              <img src={img2} alt="exampleTwo" />
            </div>
            <div
              className="flex-1 flex flex-col items-start justify-center mt-6 lg:mt-0"
              data-aos="fade-left"
              data-aos-offset="400"
            >
              <h2 className="text-3xl font-bold mb-6">New Experience In Playing Game</h2>
              <p className="font-secondary mb-6">
                You can try playing the game with a new style and of course a more real feel, like you are the main
                character in your game and adventure in this new digital world.
              </p>
              <button className="btn">Get it now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
