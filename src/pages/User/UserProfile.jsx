import React, { useContext, useRef, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MdDarkMode, MdLightMode } from 'react-icons/md';

const UserProfile = () => {
    const { user, userProfileUpdate, resetPassword } = useContext(AuthContext);
    const emailRef = useRef();
    // console.log(user);
    const [hide, setHide] = useState(true);
    const [hide2, setHide2] = useState(true);
    const [dark, setDark] = useState(false);

    const handleUpdateProfile = event => {
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photo.value;
        userProfileUpdate(name, photoURL)
            .then(() => {
                form.reset();
            })
    }

    const handleResetPassword = event => {
        event.preventDefault();
        const form = event.target;
        const email = emailRef.current.value;
        resetPassword(email)
            .then(() => {
                form.reset();
                toast('Password reset email sent.');
            })
    }
    return (
        <>
            <Navbar></Navbar>
            <div className='flex justify-evenly'>
                <p className='text-center mt-4 mb-4'><button onClick={() => setHide(!hide)} className='btn btn-primary btn-xs'>Edit Profile</button></p>
                <p className='text-center mt-4 mb-4'><button onClick={() => setHide2(!hide2)} className='btn btn-primary btn-xs'>Reset Password</button></p>
                <button onClick={() => setDark(!dark)} className='btn btn-sm mt-4'>{dark ? <MdLightMode /> : <MdDarkMode />}</button>
            </div>
            <div className={`flex justify-center items-center gap-20 ${dark ? 'bg-slate-700 text-white' : ''}`}>
                <div>
                    <h3 className='text-sm'><b>Name:</b> {user?.displayName}</h3>
                    <p className='text-sm'><b>Email:</b> {user?.email}</p>
                    <img className='my-3 w-40 h-40 rounded-full' src={user?.photoURL} alt="" />
                </div>

                <form onSubmit={handleUpdateProfile} className={hide ? `invisible` : `visible`}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="Enter Your Name" className="input input-bordered input-sm w-full max-w-xs" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name='photo' placeholder="Enter Your Photo URL" className="input input-bordered input-sm w-full max-w-xs" />
                    </div>
                    <input className='btn btn-success btn-xs mt-3' type="submit" value="Update" />
                </form>

                <form onSubmit={handleResetPassword} className={hide2 ? `invisible` : `visible`}>
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name='email' ref={emailRef} placeholder="Enter Your Email" className="input input-bordered input-sm w-full max-w-xs" />
                    <input className='btn btn-success btn-xs mt-3' type="submit" value="Send Email" />
                </form>
                <ToastContainer
                    position="top-right"
                    autoClose={3000}
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
            <Footer></Footer>
        </>
    );
};

export default UserProfile;