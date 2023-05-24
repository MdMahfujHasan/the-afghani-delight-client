import React from 'react';
import banner from '../../assets/banner.jpg';
import { GiMeal } from 'react-icons/gi';

const Banner = () => {
    const bannerFont = {
        fontFamily: 'Lobster, cursive'
    }
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${banner})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div style={bannerFont}>
                    <h1 className="mb-4 text-5xl font-extrabold">Immerse yourself in the rich heritage of Afghan cuisine, where every bite tells a story of tradition and flavor, at The Afghani Delight. <GiMeal className='text-7xl inline' /></h1>
                    <p className="mb-5"></p>
                    <button className="btn btn-accent">Let's Get Started </button>
                </div>
            </div>
        </div>
    );
};

export default Banner;