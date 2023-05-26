import React, { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer';

const UserProfile = () => {
    const { user, userProfileUpdate } = useContext(AuthContext);
    // console.log(user);
    const [hide, setHide] = useState(true);
    const handleUpdateProfile = event => {
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photo.value;

        userProfileUpdate(name, photoURL)
    }
    return (
        <>
            <Navbar></Navbar>
            <p className='text-center mt-12 mb-4'><button onClick={() => setHide(!hide)} className='btn btn-primary'>Edit Profile</button></p>
            <div className='flex justify-center items-center gap-8'>
                <div>
                    <h3><b>Name:</b> {user?.displayName}</h3>
                    <p><b>Email:</b> {user?.email}</p>
                    <img className='my-3 w-48 h-48 rounded-full' src={user?.photoURL} alt="" />
                </div>

                <form onSubmit={handleUpdateProfile} className={hide ? `invisible` : `visible`}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="Enter Your Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name='photo' placeholder="Enter Your Photo URL" className="input input-bordered" />
                    </div>
                    <input className='btn btn-secondary mt-3' type="submit" value="Update" />
                </form>
            </div>
            <Footer></Footer>
        </>
    );
};

export default UserProfile;