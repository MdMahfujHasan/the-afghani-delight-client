import React from 'react';

const AllRecipe = ({ recipe }) => {
    const { name, img, description, ingredients, instruction, method, rating } = recipe;
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img className='h-52 w-80 rounded' src={img} alt="Food photo" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                    {
                        ingredients.map(ingredient => <li className='list-disc'>{ingredient}</li>)
                    }
                    <p>Instruction: {instruction}</p>
                    {
                        method.map(m => <li>{m}</li>)
                    }
                    <p>{rating}</p>
                </div>
            </div>
        </div>
    );
};

export default AllRecipe;