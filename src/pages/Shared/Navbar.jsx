import React from 'react';
import ActiveLink from './ActiveLink';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar bg-teal-500 flex justify-around text-white">
            <Link to="/" className="btn btn-ghost normal-case text-xl">The Afghani Delight</Link>
            <div>
                <Link to="/recipes" className='btn btn-ghost'>Recipes</Link>
                {/* <Link className='btn btn-ghost'>Discover</Link>
                <Link className='btn btn-ghost'>Awards</Link>
                <Link className='btn btn-ghost'>$1 Wonder</Link> */}
                <Link to="/login" className='btn btn-ghost'>Login</Link>
                <Link to="/sign-up" className='btn btn-ghost'>Sign Up</Link>
            </div>
            <div className="flex-none">
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="" />
                        </div>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;