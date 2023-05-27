import React, { useState } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RiHeartAddLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const Recipe = ({ recipe }) => {
    const { id, name, img, description, ingredients, instruction, method, rating } = recipe;
    const [disable, setDisable] = useState(false);
    const handleFavourite = () => {
        setDisable(true);
        // toast(rating + 'is ok');
        toast('Recipe is added to favourite!');
    }
    return (
        <div className="bg-base-100">
            <figure><img className='w-full h-80 rounded' src={img} alt="Food" /></figure>
            <div className="card-body relative">
                <h2 className="card-title text-3xl font-extralight text-teal-500">{name}</h2>
                <div className='flex items-center text-xl'>
                    <span>{rating}</span>
                    <AiFillStar className='text-yellow-500' />
                </div>
                <p className='text-lg font-light mb-4'>{description}</p>
                <div className='flex justify-between absolute bottom-0'>
                    <Link className='mr-4'><button disabled={disable} onClick={handleFavourite} className='btn btn-error'>
                        <RiHeartAddLine className='text-lg mr-1' />
                        Favourite</button>
                    </Link>
                    <Link to={`/recipe/${id}`}><button className='btn btn-accent'>View Recipe</button></Link>
                </div>
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
            </div>
        </div>
    );
};

export default Recipe;