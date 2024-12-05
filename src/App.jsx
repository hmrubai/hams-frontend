// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import NavBar from './components/Shared/NavBar/NavBar'
// import About from './components/HomePage/About/About'
// import HeroCarousel from './components/HomePage/HeroCarousel/HeroCarousel'
// import LatestProducts from './components/HomePage/LatestProducts/LatestProducts'
// import Certifications from './components/HomePage/Certifications/Certifications'
// import ContactUs from './components/HomePage/ContactUs/ContactUs'
// import Footer from './components/HomePage/Footer/Footer'

import MessengerCustomerChat from "react-messenger-customer-chat";
import React from "react";
import ReactDOM from "react-dom";
import { ToastContainer } from "react-toastify";
import "./Global.css"
import "./index.css"
function App() {
  // console.log(process.env.VITE_HOST_URL, "sssss ")
  
  return (
    <>
      {/* <NavBar/>
      <HeroCarousel/>
      <About/>
      <LatestProducts/>
      <Certifications/>
      <ContactUs/>
      <Footer/> */}
      <ToastContainer />
      <MessengerCustomerChat
        pageId="146505212039213"
        appId="223791307415597"
      />
    </>
  );
}

export default App;
