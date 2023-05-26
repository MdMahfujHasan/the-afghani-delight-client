import React, { useState } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Recipe = ({ recipe }) => {
    const { name, img, description, ingredients, instruction, method, rating } = recipe;
    const [disable, setDisable] = useState(false);
    const handleFavourite = () => {
        setDisable(true);
        // toast(rating + 'is ok');
        toast('Recipe is added to favourite!');
    }
    return (
        <div className="bg-base-100">
            <figure><img src={img} alt="Food" /></figure>
            <div className="card-body">
                <h2 className="card-title text-5xl font-extralight text-teal-500">{name}</h2>
                <div className='flex items-center text-2xl'>
                    <span>Rating: {rating}</span>
                    <AiFillStar className='text-yellow-500' />
                </div>
                <p className='text-lg font-light'>{description}</p>
                <p><button disabled={disable} onClick={handleFavourite} className='btn btn-error'>Favourite</button></p>
                <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="dark"
                />
                <ul>
                    <span className='text-xl font-extrabold text-teal-500'>Ingredients:</span>
                    {
                        ingredients.map(ingredient => <li className='list-disc text-lg font-light'>{ingredient}</li>)
                    }
                </ul>
                <p className='text-justify font-light text-lg'><span className='text-xl font-extrabold text-teal-500'>Instruction: </span>{instruction}</p>
                <ul>
                    {
                        method.map(m => <b className='mr-2'>#{m}</b>)
                    }
                </ul>
            </div>
        </div>
    );
};

export default Recipe;