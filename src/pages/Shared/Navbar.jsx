import React, { useContext } from 'react';
import ActiveLink from './ActiveLink';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import userDefault from '../../assets/user_default.png';
import { FiLogOut, FiHelpCircle, FiSettings } from 'react-icons/fi';
import { RiFeedbackLine } from 'react-icons/ri';
import { FaRegMoon, FaRegUser } from 'react-icons/fa';
import { BsHeart } from 'react-icons/bs';
import { BiUserCircle } from 'react-icons/bi';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSignOut = () => {
        logOut()
            .then(() => {
                navigate('/login');
            })
    }
    return (
        <div className="navbar bg-teal-500 justify-around text-white flex flex-col md:flex-row">
            <Link to="/" className="btn btn-ghost normal-case text-xl"><BsHeart className='me-1' /> The Afghani Delight</Link>
            <div className='font-semibold flex flex-col md:flex-row'>
                <ActiveLink to="/" className='btn btn-ghost'>Home</ActiveLink>
                <ActiveLink to="/blogs" className='btn btn-ghost'>Blogs</ActiveLink>
                <ActiveLink to="/recipes" className='btn btn-ghost'>Recipes</ActiveLink>
                {!user && <>
                    <ActiveLink to="/login" className='btn btn-ghost'>Login</ActiveLink>
                    <ActiveLink to="/sign-up" className='btn btn-ghost'>Sign Up</ActiveLink>
                </>}
            </div>
            <div className="flex-none">
                {user && <div title={user.displayName} className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src={user?.photoURL ? user.photoURL : userDefault} />
                        </div>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li className='bg-slate-600 font-bold text-teal-500'><Link to="/profile"><FaRegUser />{user?.displayName}</Link ></li>
                        <li className='bg-slate-500 font-semibold'><a><FiSettings />Settings and privacy</a></li>
                        <li className='bg-slate-500 font-semibold'><a><FiHelpCircle />Help and support</a></li>
                        <li className='bg-slate-500 font-semibold'><a><FaRegMoon />Display and accessibility</a></li>
                        <li className='bg-slate-500 font-semibold'><a><RiFeedbackLine /> Give feedback</a></li>
                        <li className='bg-slate-500 font-semibold' onClick={handleSignOut}><a><FiLogOut /> Log Out</a></li>
                    </ul>
                </div>}
            </div>
        </div>
    );
};

export default Navbar;