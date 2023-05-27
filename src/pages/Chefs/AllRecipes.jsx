import React from 'react';
import Navbar from '../Shared/Navbar';
import { useLoaderData } from 'react-router-dom';
import AllRecipe from './AllRecipe';
import { SlBookOpen } from 'react-icons/sl'

const AllRecipes = () => {
    const allRecipes = useLoaderData();
    return (
        <div>
            <Navbar></Navbar>
            <h2 className='text-center text-4xl mt-8 mb-4'><span className='border-l-4 border-teal-500 pl-2'>All Recipes</span> <SlBookOpen className='inline mb-3 text-teal-500' /></h2>
            <div className='grid grid-cols-1 md:grid-cols-3 container mx-auto'>
                {
                    allRecipes.map(recipe => <AllRecipe key={recipe.id} recipe={recipe}></AllRecipe>)
                }
            </div>
        </div>
    );
};

export default AllRecipes;