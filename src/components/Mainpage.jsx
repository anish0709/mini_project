import React from 'react';
import { Link } from 'react-router-dom';

const Mainpage = () => {
    return (
        <div className="container mt-5">
            <h1 className="text-center text-primary mb-4">Welcome to Ecom Express</h1>
            <div className="row mt-4">
                <div className="col-md-6">
                    <div className="card shadow-lg mb-5 bg-white rounded">
                        <div className="card-body">
                            <h5 className="card-title text-center">Seller Page</h5>
                            <p className="card-text">Manage your products and listings.</p>
                            <Link to="/sellersignup" className="btn btn-primary d-block mx-auto">Go to Seller Page</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card shadow-lg mb-5 bg-white rounded">
                        <div className="card-body">
                            <h5 className="card-title text-center">Buyer Page</h5>
                            <p className="card-text">Browse and purchase products.</p>
                            <Link to="/signup" className="btn btn-success d-block mx-auto">Go to Buyer Page</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Mainpage;
