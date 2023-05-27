import React from 'react';
import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer';
import useTitle from '../../hooks/useTitle';

const About = () => {
    useTitle('About');
    return (
        <div>
            <Navbar></Navbar>
            <div className='container mx-auto mt-6'>
                <h1 className='text-xl text-teal-500 font-serif font-medium mb-2 mt-1'>About Us</h1>
                <div className='text-lg text-slate-500'>
                    <p>Welcome to The Afghani Delight!</p>
                    <p>We are a community-driven platform that brings together talented Afghani chefs from all around the world. Our mission is to showcase the rich culinary heritage of Afghanistan and provide a platform for these talented chefs to share their authentic recipes.</p>
                </div>

                <h2 className='text-xl text-teal-500 font-serif font-medium mb-2 mt-1'>Our Chefs</h2>
                <div className='text-lg text-slate-500'>
                    <p>At The Afghani Delight, we are proud to feature a diverse group of Afghani chefs who are passionate about their craft. Each chef brings their unique perspective, creativity, and expertise to create a truly delightful culinary experience.</p>
                    <p>From traditional Afghan dishes to modern interpretations, our chefs share their favorite recipes, cooking techniques, and tips to help you recreate the flavors of Afghanistan in your own kitchen.</p>
                </div>

                <h2 className='text-xl text-teal-500 font-serif font-medium mb-2 mt-1'>Discover Authentic Afghan Cuisine</h2>
                <div className='text-lg text-slate-500'>
                    <p>Whether you're an experienced cook or just starting your culinary journey, The Afghani Delight is your go-to destination for authentic Afghan recipes. Explore our collection of mouthwatering dishes, including kebabs, pilaf, dumplings, stews, and delectable desserts.</p>
                    <p>We believe that food has the power to connect people and foster cultural understanding. By sharing these recipes, we hope to spread the joy of Afghan cuisine and celebrate the diversity of flavors that make it truly special.</p>
                </div>

                <h2 className='text-xl text-teal-500 font-serif font-medium mb-2 mt-1'>Join Our Community</h2>
                <div className='text-lg text-slate-500'>
                    <p>We invite you to join our passionate community of food lovers, home cooks, and culinary enthusiasts. Connect with fellow Afghan food enthusiasts, share your own creations, and engage in discussions about Afghan cuisine.</p>
                    <p>Whether you're looking for traditional recipes, innovative twists, or tips to elevate your cooking skills, our community is here to support and inspire you on your culinary journey.</p>
                </div>

                <h2 className='text-xl text-teal-500 font-serif font-medium mb-2 mt-1'>Contact Us</h2>
                <div className='text-lg text-slate-500'>
                    <p>If you have any questions, feedback, or suggestions, we'd love to hear from you! Feel free to reach out to our team through the contact information provided below:</p>
                    <ul>
                        <li>Email: info@theafghanidelight.com</li>
                        <li>Phone: +1 (123) 456-7890</li>
                    </ul>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default About;