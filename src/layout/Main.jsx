import React from 'react';
import Header from '../pages/Shared/Header';
import Footer from '../pages/Shared/Footer';
import { Outlet, useLoaderData } from 'react-router-dom';
import Chefs from '../pages/Chefs/Chefs';
import { TbChefHat } from 'react-icons/tb';

const Main = () => {
    const chefs = useLoaderData()
    console.log(chefs)
    return (
        <div>
            <Header></Header>
            <div className='mt-12'>
                <h2 className='text-center text-5xl'>
                    <span
                        className='border-l-8 border-teal-500 pl-2'>
                        Our Chefs
                        <TbChefHat className='inline mb-3 text-teal-500' />
                    </span>
                </h2>
                <div className='grid grid-cols-3 mt-8 container mx-auto gap-8'>
                    {
                        chefs.map(chef => <Chefs key={chef.id} chef={chef}></Chefs>)
                    }
                </div>
            </div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;