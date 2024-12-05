import React from 'react';
import NavBar from '../components/Shared/NavBar/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/HomePage/Footer/Footer';

const Main = () => {
    return (
        <div>
            <NavBar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;