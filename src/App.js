import React, { useEffect } from 'react';
// COMPONENTS
import Banner from './components/Banner/Banner';
import Header from './components/Header/Header';
import Experience from './components/Experience/Experience';
import Video from './components/Video/Video';
import Headsets from './components/Headsets/Headsets';
import Testimonial from './components/Testimonial/Testimonial';
import Explore from './components/Explore/Explore';
// PACKAGE
import Aos from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 2500,
      delay: 400,
    });
  });
  return (
    <div className="relative overflow-hidden before:w-[600px] before:bg-circle before:h-[200px] before:bg-no-repeat before:absolute before:-top-16 before:left-[600px] before:hidden before:lg:flex">
      <Header />
      <Banner />
      <Experience />
      <Video />
      <Headsets />
      <Testimonial />
      <Explore />
    </div>
  );
};

export default App;
