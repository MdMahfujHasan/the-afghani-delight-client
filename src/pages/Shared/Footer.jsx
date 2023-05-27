import React from 'react';
import footer from '../../assets/footer.jpg';
import { FaFacebookSquare, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-12'>
            <div>
                <h4 className='text-lg font-semibold'>About</h4>
                <div className='text-xs font-light'>
                    <p className='my-2 hover:underline hover:cursor-pointer hover:underline-offset-1'>About Us</p>
                    <p className='hover:underline hover:cursor-pointer hover:underline-offset-1'>Term and Conditions</p>
                    <p className='my-2 hover:underline hover:cursor-pointer hover:underline-offset-1'>Privacy Policy</p>
                    <p className='hover:underline hover:cursor-pointer hover:underline-offset-1'>Cookie Policy</p>
                    <p className='my-2 hover:underline hover:cursor-pointer hover:underline-offset-1'>Cookie Preferences</p>
                    <p className='hover:underline hover:cursor-pointer hover:underline-offset-1'>Community Guidelines</p>
                </div>
            </div>
            <div>
                <h4 className='text-lg font-semibold'>Connect</h4>
                <div className='text-xs font-light'>
                    <p className='my-2 hover:underline hover:cursor-pointer hover:underline-offset-1'>Contact Us</p>
                    <p className='hover:underline hover:cursor-pointer hover:underline-offset-1'>Advertise with Us</p>
                    <p className='my-2 hover:underline hover:cursor-pointer hover:underline-offset-1'>Podcasts</p>
                    <p className='hover:underline hover:cursor-pointer hover:underline-offset-1'>Submit a Tip</p>
                    <p className='my-2 hover:underline hover:cursor-pointer hover:underline-offset-1'>TV Schedule</p>
                    <p className='hover:underline hover:cursor-pointer hover:underline-offset-1'>Work for Us</p>
                </div>
            </div>
            <div>
                <h4 className='text-lg font-semibold'>Our Channels</h4>
                <div className='text-xs font-light'>
                    <p className='my-2 hover:underline hover:cursor-pointer hover:underline-offset-1'>The Afghani Delight English</p>
                    <p className='hover:underline hover:cursor-pointer hover:underline-offset-1'>The Afghani Delight Bengali</p>
                    <p className='my-2 hover:underline hover:cursor-pointer hover:underline-offset-1'>The Afghani Delight Hindi</p>
                    <p className='hover:underline hover:cursor-pointer hover:underline-offset-1'>The Afghani Delight Urdu</p>
                    <p className='my-2 hover:underline hover:cursor-pointer hover:underline-offset-1'>The Afghani Delight Arabic</p>
                    <p className='hover:underline hover:cursor-pointer hover:underline-offset-1'>The Afghani Delight Chinese</p>
                </div>
            </div>
            <div>
                <h4 className='text-lg font-semibold'>Our Network</h4>
                <div className='text-xs font-light'>
                    <p className='my-2 hover:underline hover:cursor-pointer hover:underline-offset-1'>Spice Routes Culinary Connection</p>
                    <p className='hover:underline hover:cursor-pointer hover:underline-offset-1'>Flavor Fusion Alliance</p>
                    <p className='my-2 hover:underline hover:cursor-pointer hover:underline-offset-1'>Gastronomic Guild</p>
                    <p className='hover:underline hover:cursor-pointer hover:underline-offset-1'>Savory Kitchen Syndicate</p>
                    <p className='my-2 hover:underline hover:cursor-pointer hover:underline-offset-1'>Epicurean Society Network</p>
                    <p className='hover:underline hover:cursor-pointer hover:underline-offset-1'>Tastemaker's Circle</p>
                </div>
            </div>
            <div>
                <h4 className='text-sm font-bold'>Follow The Afghani Delight</h4>
                <div className='flex my-4'>
                    <FaFacebookSquare className='text-md text-blue-700 hover:cursor-pointer' />
                    <FaTwitter className='text-md text-sky-500 mx-3 hover:cursor-pointer' />
                    <FaYoutube className='text-md text-red-600 hover:cursor-pointer' />
                    <FaInstagram className='text-md text-rose-500 ms-3 hover:cursor-pointer' />
                </div>
                <img className='rounded-lg h-36 w-36' src={footer} alt="cooked chicken photo" />
                <p className='mt-1 mb-2 text-xs'><small>© 2023 The Afghani Delight Food Network</small></p>
            </div>
        </div>
    );
};

export default Footer;