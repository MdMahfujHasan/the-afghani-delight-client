import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { HeartIcon } from '@heroicons/react/24/solid';
import Header from '../Shared/Header';
import Footer from '../Shared/Footer';

const Recipes = () => {
    const recipe = useLoaderData();
    const { name, img, experience, description, recipes, likes } = recipe;
    const heartIcon = <HeartIcon className="h-6 w-6 text-rose-500" />
    return (
        <>
            <Header></Header>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={img} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-4xl font-bold">{name}</h1>
                        <p className="py-6">{description}</p>
                        <p>Experience: {experience} years</p>
                        <p>Recipes: {recipes}</p>
                        <span className='flex'>{heartIcon}{likes} likes</span>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Recipes;