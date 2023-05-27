import React from 'react';

const AllRecipe = ({ recipe }) => {
    const { name, img, description, ingredients, instruction, method, rating } = recipe;
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img className='h-52 w-80 rounded' src={img} alt="Food photo" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl font-extralight text-teal-500">{name}</h2>
                    <p className='text-md font-light mb-4'>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default AllRecipe;