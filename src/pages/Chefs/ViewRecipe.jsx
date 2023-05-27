import React, { useState } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLoaderData } from 'react-router-dom';
import Navbar from '../Shared/Navbar';
import { RiHeartAddLine } from 'react-icons/ri';
import Footer from '../Shared/Footer';

const ViewRecipe = () => {
    const viewRecipe = useLoaderData();
    const { id, name, img, description, ingredients, instruction, method, rating } = viewRecipe;
    const [disable, setDisable] = useState(false);
    const handleFavourite = () => {
        setDisable(true);
        // toast(rating + 'is ok');
        toast('Recipe is added to favourite!');
    }
    return (
        <>
            <Navbar></Navbar>
            <div className="bg-base-100 mt-4">
                <figure><img className='w-80 h-80 mx-auto rounded' src={img} alt="Food" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-5xl font-extralight text-teal-500">{name}</h2>
                    <div className='flex items-center text-2xl'>
                        <span>{rating}</span>
                        <AiFillStar className='text-yellow-500' />
                    </div>
                    <p className='text-lg font-light'>{description}</p>
                    <p><button disabled={disable} onClick={handleFavourite} className='btn btn-error'>
                        <RiHeartAddLine className='text-lg mr-1' />
                        Favourite</button>
                    </p>
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
                        <b className='text-md font-extrabold text-teal-500'>Methods:</b> {
                            method.map(m => <b className='mr-2'>#{m}</b>)
                        }
                    </ul>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default ViewRecipe;