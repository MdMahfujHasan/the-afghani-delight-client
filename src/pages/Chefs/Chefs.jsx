import React from 'react';
import { Link } from 'react-router-dom';

const Chefs = ({ chef }) => {
    const { id, name, img, experience, recipes, likes } = chef;
    return (
        <div>
            <div className="card w-80 bg-base-100 shadow-xl">
                <figure className="h-96">
                    <img src={img} alt="chef photo" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-2xl">{name}</h2>
                    <p>Experience: {experience} years</p>
                    <p>Recipes: {recipes}</p>
                    <p>Likes: {likes}k</p>
                    <div className="card-actions">
                        <Link to={`/chef/${id}`}><button className="btn btn-info">View Recipes</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chefs;