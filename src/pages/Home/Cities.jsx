import React from 'react';
import { FaCity } from 'react-icons/fa';

const Cities = () => {
    return (
        <div className='mt-12'>
            <h2 className='text-center text-4xl'><span className='border-l-4 border-teal-500 pl-2'>Find Us in These Cities and Many More</span> <FaCity className='inline mb-3 text-teal-500' /></h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 container mx-auto mt-6'>
                <div className='relative'>
                    <h5 className='absolute bg-slate-600 px-2 py-1 text-lg font-semibold'>Dhaka</h5>
                    <img className='rounded-md' src="https://images.deliveryhero.io/image/fd-bd/city-title/city-title-Dhaka.jpg?width=720" alt="Dhaka" />
                </div>
                <div className='relative'>
                    <h5 className='absolute bg-slate-600 px-2 py-1 text-lg font-semibold'>Chattogram</h5>
                    <img className='rounded-md' src="https://images.deliveryhero.io/image/fd-bd/city-title/city-title-Chittagong.jpg?width=720" alt="Chattogram" />
                </div>
                <div className='relative'>
                    <h5 className='absolute bg-slate-600 px-2 py-1 text-lg font-semibold'>Sylhet</h5>
                    <img className='rounded-md' src="https://images.deliveryhero.io/image/fd-bd/city-title/city-title-Sylhet.jpg?width=720" alt="Sylhet" />
                </div>
                <div className='relative'>
                    <h5 className='absolute bg-slate-600 px-2 py-1 text-lg font-semibold'>Gopalganj</h5>
                    <img className='rounded-md' src="https://images.deliveryhero.io/image/fd-bd/city-title/city-tile-Gopalganj.jpg?width=720" alt="Gopalganj" />
                </div>
                <div className='relative'>
                    <h5 className='absolute bg-slate-600 px-2 py-1 text-lg font-semibold'>Feni</h5>
                    <img className='rounded-md' src="https://images.deliveryhero.io/image/fd-bd/city-title/city-tile-feni.jpg?width=720" alt="Feni" />
                </div>
                <div className='relative'>
                    <h5 className='absolute bg-slate-600 px-2 py-1 text-lg font-semibold'>Bogra</h5>
                    <img className='rounded-md' src="https://images.deliveryhero.io/image/fd-bd/city-title/city-tile-Bogra.jpg?width=720" alt="Bogra" />
                </div>
                <div className='relative'>
                    <h5 className='absolute bg-slate-600 px-2 py-1 text-lg font-semibold'>Bhola</h5>
                    <img className='rounded-md' src="https://images.deliveryhero.io/image/fd-bd/city-title/city-tile-Bhola.jpg?width=720" alt="Bhola" />
                </div>
                <div className='relative'>
                    <h5 className='absolute bg-slate-600 px-2 py-1 text-lg font-semibold'>Pabna</h5>
                    <img className='rounded-md' src="https://images.deliveryhero.io/image/fd-bd/city-title/city-tile-Pabna.jpg?width=720" alt="Pabna" />
                </div>
            </div>
        </div>
    );
};

export default Cities;