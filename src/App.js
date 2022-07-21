import React from 'react';
// COMPONENTS
import Banner from './components/Banner/Banner';
import Header from './components/Header/Header';

const App = () => {
  return (
    <div className="relative overflow-hidden before:w-[600px] before:bg-circle before:h-[200px] before:bg-no-repeat before:absolute before:-top-16 before:left-[600px] before:hidden before:lg:flex">
      <Header />
      <Banner />
    </div>
  );
};

export default App;
