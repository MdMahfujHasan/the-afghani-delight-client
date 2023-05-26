import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Header from '../Shared/Header';
import Footer from '../Shared/Footer';
import Recipe from './Recipe';
import { GiChickenOven } from 'react-icons/gi';

const Recipes = () => {
    const allRecipes = useLoaderData();
    const { name, img, experience, description, recipes, likes, recipe } = allRecipes;
    return (
        <>
            <Header></Header>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className='flex items-center gap-8'>
                        <img src={img} className="max-w-sm rounded-lg shadow-2xl" />
                        <div>
                            <h1 className="text-4xl font-bold">{name}</h1>
                            <p className="py-6 text-lg font-light">{description}</p>
                            <p><b>Experience:</b> {experience} years</p>
                            <p className='my-2'><b>Recipes:</b> {recipes}</p>
                            <span className='flex'><b className='mr-1'>Likes:</b>{likes}k</span>
                        </div>
                    </div>
                    <div className='grid grid-cols-1 gap-8 mt-10'>
                        <h2 className='text-center text-4xl'><span className='border-l-4 border-teal-500 pl-2'>Chef Recipes</span> <GiChickenOven className='inline mb-3 text-teal-500' /></h2>
                        {
                            recipe.map(r => <Recipe key={r.rating} recipe={r}></Recipe>)
                        }
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Recipes;