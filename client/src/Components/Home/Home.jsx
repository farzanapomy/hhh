import React from 'react';
import Menubar from '../../Containers/Menubar/Menubar';
import Foods from '../Foods/Foods';
import Footer from '../../Containers/Footer/Footer';

const Home = () => {
  return (
    <div>
      <Menubar />
      <hr className="my-5" />
      {/* <SideBar/> */}
      <Foods />
      <Footer></Footer>
    </div>
  );
};

export default Home;
