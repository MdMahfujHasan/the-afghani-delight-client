import React, { useContext, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import { AuthContext } from '../../providers/AuthProvider';
import Navbar from '../Shared/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { HeartIcon } from '@heroicons/react/24/solid';
import food from '../../assets/sign_up_food.jpg';
import useTitle from '../../hooks/useTitle';

const SignUp = () => {
    useTitle('Sign Up');
    const { createUser, googleSingIn, githubSignIn, setUser } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();
    const heartIcon = <HeartIcon className="h-6 w-6 text-rose-500 inline" />

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const photo = form.photo.value;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(photo, name, email, password);

        setError('');
        setSuccess('');

        if (!/(?=.*[A-Z])/.test(password)) {
            setError('Password should contain at least 1 capital letter.');
            return;
        }
        else if (!/(?=.*[!@#$%^&*])/.test(password)) {
            setError('Password should contain at least 1 special character.');
            return;
        }
        else if (!/(?=.*[0-9])/.test(password)) {
            setError('Password should contain at least 1 digit.');
            return;
        }
        else if (password.length < 6) {
            setError('Password should be at least 6 characters.');
            return;
        }

        createUser(email, password)
            .then(result => {
                setSuccess('User has been created successfully!');
                result.user.displayName = name;
                result.user.photoURL = photo;
                setUser(result.user);
                form.reset();
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const handleGoogleSignIn = () => {
        googleSingIn()
            .then(result => {
                setSuccess('Google sign in successful!');
                setError('');
                setUser(result.user);
            })
            .catch(error => {
                setError(error.message);
                setSuccess('');
            })
    }

    const handleGithubSignIn = () => {
        githubSignIn()
            .then(result => {
                setSuccess('GitHub sign in successful!');
                setError('');
                setUser(result.user);
            })
            .catch(error => {
                setError(error.message);
                setSuccess('');
            })
    }
    return (
        <>
            <Navbar></Navbar>
            <div className="min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row container mx-auto">
                    <div className="text-center flex flex-col items-center">
                        <h1 className="text-6xl text-teal-500 font-bold">The Afghani Delight</h1>
                        <p className='p-6 text-xl'>Indulge in exquisite flavors and authentic Afghan hospitality at the Afghani Delight - Where culinary delights bring hearts together! {heartIcon}</p>
                        <img className='w-2/3 h-96 rounded-lg' src={food} alt="varieties of food" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                        <form onSubmit={handleSignUp} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input
                                    type="text"
                                    name='photo'
                                    placeholder="Photo URL"
                                    className="input input-bordered"
                                />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name <span className='text-rose-500'>*</span></span>
                                </label>
                                <input
                                    type="text"
                                    name='name'
                                    placeholder="Name"
                                    className="input input-bordered"
                                    required
                                />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email <span className='text-rose-500'>*</span></span>
                                </label>
                                <input
                                    type="email"
                                    name='email'
                                    placeholder="Email"
                                    className="input input-bordered"
                                    required
                                />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password <span className='text-rose-500'>*</span></span>
                                </label>
                                <input
                                    type="password"
                                    name='password'
                                    placeholder="Password"
                                    className="input input-bordered"
                                    required
                                />
                            </div>

                            <div className="form-control mt-6">
                                <input className='btn btn-accent' type="submit" value="Sign Up" />
                            </div>
                        </form>

                        <p className='text-center mb-1'>
                            <small>
                                Already have an account? <Link
                                    className='text-blue-500 hover:underline hover:underline-offset-1'
                                    to="/login">Login
                                </Link>
                            </small>
                        </p>

                        <button
                            onClick={handleGoogleSignIn}
                            className='btn btn-primary mx-8'>
                            <FcGoogle className='me-1' />
                            Sign In with Google
                        </button>

                        <button
                            onClick={handleGithubSignIn}
                            className='btn mx-8 mt-2 mb-4'>
                            <FaGithub className='me-1' />
                            Sign In with GitHub
                        </button>

                        <p className='text-center text-rose-500 pb-2'>{error}</p>
                        <p className='text-center text-green-500 pb-2'>{success}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;