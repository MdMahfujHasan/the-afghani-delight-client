import React from 'react';
import error404 from '../../assets/error_404.png';
import food404 from '../../assets/food_404.png';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import Footer from './Footer';

const NotFound = () => {
    BiArrowBack
    return (
        <>
            <Navbar></Navbar>
            <h3 className='text-4xl text-center mt-8'>Page not found</h3>
            <p className='text-xl text-center my-2'>Oops! Looks like we've hit a culinary roadblock. The delectable dish you're craving couldn't be found.</p>
            <div className='flex flex-col md:flex-row justify-center items-center'>
                <img src={error404} alt="404 error" />
                <img src={food404} alt="food photo" />
            </div>
            <Link className='flex justify-center' to='/'><button className='btn btn-primary'><BiArrowBack className='text-lg me-1' />Go Back</button></Link>
            <Footer></Footer>
        </>
    );
};

export default NotFound;