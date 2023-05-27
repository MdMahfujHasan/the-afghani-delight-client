import React, { useContext, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import Navbar from '../Shared/Navbar';
import { HeartIcon } from '@heroicons/react/24/solid';
import { AuthContext } from '../../providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const Login = () => {
    useTitle('Login');
    const { signIn, googleSingIn, githubSignIn, setUser } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const heartIcon = <HeartIcon className="h-6 w-6 text-rose-500 inline" />

    const handleSignIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        setError('');
        setSuccess('');

        signIn(email, password)
            .then(result => {
                setSuccess('Logged in successfully!');
                setError('');
                navigate(from, { replace: true })
                form.reset();
            })
            .catch(error => {
                setError(error.message);
                setSuccess('');
            })
    }

    const handleGoogleSignIn = () => {
        googleSingIn()
            .then(result => {
                setSuccess('Google sign in successful!');
                setError('');
                setUser(result.user);
                navigate(from, { replace: true })
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
                navigate(from, { replace: true })
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
                    <div className="text-center">
                        <h1 className="text-6xl text-teal-500 font-bold">The Afghani Delight</h1>
                        <p className='p-6 text-xl'>Indulge in exquisite flavors and authentic Afghan hospitality at the Afghani Delight - Where culinary delights bring hearts together! {heartIcon}</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                        <form onSubmit={handleSignIn} className="card-body">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
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
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type="password"
                                    name='password'
                                    placeholder="Password"
                                    className="input input-bordered"
                                    required
                                />
                                <label className="label">
                                    <button className="label-text-alt text-blue-500 hover:underline underline-offset-1">Forgotten password?</button>
                                </label>
                            </div>

                            <div className="form-control mt-6">
                                <input className='btn btn-accent' type="submit" value="Login" />
                            </div>
                        </form>

                        <p className='text-center mb-1'>
                            <small>
                                Don't have an account? <Link
                                    className='text-blue-500 hover:underline hover:underline-offset-1'
                                    to="/sign-up">Sign Up
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

export default Login;