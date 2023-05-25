import React from 'react';
import { FcMultipleDevices } from 'react-icons/fc';
import { FaApple, FaGooglePlay } from 'react-icons/fa';

const DownloadApp = () => {
    return (
        <div className='mt-12 container mx-auto'>
            <h2 className='text-center text-4xl'><span className='border-l-4 border-teal-500 pl-2'>Put Us in Your Pocket</span> <FcMultipleDevices className='inline mb-3 text-teal-500' /></h2>
            <div className='flex flex-col md:flex-row justify-center items-center'>
                <div>
                    <h3 className='text-3xl mb-4 text-teal-500 font-semibold'>Download the Food and Groceries You Love</h3>
                    <p className='text-xl'>It's all at your fingertips - the restaurants and shops you love. Find the right food and groceries to suit your mood, and make the first bite last. Go ahead, download us.</p>
                    <div className='flex mt-2 invisible lg:visible'>
                        <span className='flex items-center border w-1/6 rounded text-white bg-slate-900 ps-1 hover:cursor-pointer mr-2'>
                            <FaApple className='text-3xl border-spacing-2 me-2' />
                            <div>
                                <p><small>Download on the</small></p>
                                <p>App Store</p>
                            </div>
                        </span>
                        <span className='flex items-center border w-1/6 rounded text-white bg-slate-900 ps-1 hover:cursor-pointer'>
                            <FaGooglePlay className='text-3xl border-spacing-2 me-2' />
                            <div>
                                <p><small>Get it on</small></p>
                                <p>Google Play</p>
                            </div>
                        </span>
                    </div>
                </div>
                <img className='h-96 w-96' src="https://images.deliveryhero.io/image/foodpanda/home-foodpanda-apps.png?width=2000&amp;height=1590" alt="" />
            </div>
        </div>
    );
};

export default DownloadApp;