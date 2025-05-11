import React from 'react';
import {Link} from "react-router-dom";
import runImage from './assets/run.jpg';
const HomeCover = () => {
    return (
        <section
            className="rounded shadow container w-100 d-flex align-items-center text-light"
            style={{
                backgroundImage: `url(${runImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                height: '30rem',
                objectFit: 'cover',
            }}
        >
            <div className="container-fluid py-5">
                <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-8 text-center">
                        <h1 className="display-3 fw-bold">THRU MY EYES</h1>
                        <p className="lead mb-4">My Life Journey Dealing with Fear & Depression</p>
                        <Link to="/moments" className="btn btn-primary btn-lg">
                            Read My Story
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeCover;
