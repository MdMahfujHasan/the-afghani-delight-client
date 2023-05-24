import React from 'react';
import Header from '../pages/Shared/Header';
import Footer from '../pages/Shared/Footer';
import { Outlet, useLoaderData } from 'react-router-dom';
import Chefs from '../pages/Chefs/Chefs';

const Main = () => {
    const chefs = useLoaderData()
    console.log(chefs)
    return (
        <div>
            <Header></Header>
            <div className='grid grid-cols-3 mt-8 container mx-auto gap-8'>
                {
                    chefs.map(chef => <Chefs key={chef.id} chef={chef}></Chefs>)
                }
            </div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;