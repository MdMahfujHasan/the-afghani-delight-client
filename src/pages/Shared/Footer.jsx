import React from 'react';
import footer from '../../assets/footer.jpg';
import { FaFacebookSquare, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-12'>
            <div>
                <h4 className='text-3xl font-semibold'>About</h4>
                <div className='text-lg font-light'>
                    <p className='my-2 hover:underline hover:cursor-pointer hover:underline-offset-2'>About Us</p>
                    <p className='hover:underline hover:cursor-pointer hover:underline-offset-2'>Term and Conditions</p>
                    <p className='my-2 hover:underline hover:cursor-pointer hover:underline-offset-2'>Privacy Policy</p>
                    <p className='hover:underline hover:cursor-pointer hover:underline-offset-2'>Cookie Policy</p>
                    <p className='my-2 hover:underline hover:cursor-pointer hover:underline-offset-2'>Cookie Preferences</p>
                    <p className='hover:underline hover:cursor-pointer hover:underline-offset-2'>Community Guidelines</p>
                </div>

            </div>
            <div>
                <h4 className='text-3xl font-semibold'>Connect</h4>
                <div className='text-lg font-light'>
                    <p className='my-2 hover:underline hover:cursor-pointer hover:underline-offset-2'>Contact Us</p>
                    <p className='hover:underline hover:cursor-pointer hover:underline-offset-2'>Advertise with Us</p>
                    <p className='my-2 hover:underline hover:cursor-pointer hover:underline-offset-2'>Podcasts</p>
                    <p className='hover:underline hover:cursor-pointer hover:underline-offset-2'>Submit a Tip</p>
                    <p className='my-2 hover:underline hover:cursor-pointer hover:underline-offset-2'>TV Schedule</p>
                    <p className='hover:underline hover:cursor-pointer hover:underline-offset-2'>Work for Us</p>
                </div>
            </div>
            <div>
                <h4 className='text-3xl font-semibold'>Our Channels</h4>
                <div className='text-lg font-light'>
                    <p className='my-2 hover:underline hover:cursor-pointer hover:underline-offset-2'>The Afghani Delight English</p>
                    <p className='hover:underline hover:cursor-pointer hover:underline-offset-2'>The Afghani Delight Bengali</p>
                    <p className='my-2 hover:underline hover:cursor-pointer hover:underline-offset-2'>The Afghani Delight Hindi</p>
                    <p className='hover:underline hover:cursor-pointer hover:underline-offset-2'>The Afghani Delight Urdu</p>
                    <p className='my-2 hover:underline hover:cursor-pointer hover:underline-offset-2'>The Afghani Delight Arabic</p>
                    <p className='hover:underline hover:cursor-pointer hover:underline-offset-2'>The Afghani Delight Chinese</p>
                </div>
            </div>
            <div>
                <h4 className='text-xl font-bold'>Follow The Afghani Delight</h4>
                <div className='flex my-4'>
                    <FaFacebookSquare />
                    <FaTwitter />
                    <FaYoutube />
                    <FaInstagram />
                </div>
                <img className='rounded-lg h-64 w-64' src={footer} alt="cooked chicken photo" />
                <p className='mt-1 mb-2'><small>© 2023 The Afghani Delight Food Network</small></p>
            </div>
        </div>
    );
};

export default Footer;