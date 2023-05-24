import React, { useContext } from 'react';
import ActiveLink from './ActiveLink';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import userDefault from '../../assets/user_default.png';
import { FiLogOut, FiHelpCircle, FiSettings } from 'react-icons/fi';
import { RiFeedbackLine } from 'react-icons/ri';
import { FaRegMoon, FaRegUser } from 'react-icons/fa';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSignOut = () => {
        logOut()
            .then(() => {
                navigate('/sign-up');
            })
    }
    return (
        <div className="navbar bg-teal-500 flex justify-around text-white">
            <Link to="/" className="btn btn-ghost normal-case text-xl">The Afghani Delight</Link>
            <div>
                <Link to="/recipes" className='btn btn-ghost'>Recipes</Link>
                <Link to="/login" className='btn btn-ghost'>Login</Link>
                <Link to="/sign-up" className='btn btn-ghost'>Sign Up</Link>
            </div>
            <div className="flex-none">
                <div className={user && `border-2 rounded-full border-green-700`}>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src={user?.photoURL ? user.photoURL : userDefault} />
                            </div>
                        </label>
                        {user && <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a><FaRegUser />{user?.displayName}</a></li>
                            <li><a><FiSettings />Settings and privacy</a></li>
                            <li><a><FiHelpCircle />Help and support</a></li>
                            <li><a><FaRegMoon />Display and accessibility</a></li>
                            <li><a><RiFeedbackLine /> Give feedback</a></li>
                            <li onClick={handleSignOut}><a><FiLogOut /> Log Out</a></li>
                        </ul>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;