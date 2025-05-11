// Home.jsx
import React from 'react';
import HomeCover from './HomeCover';
import {Link} from "react-router-dom"; // adjust path as needed

export default function Home() {
    return (
        <div>
            <title>THRU My Journey Home</title>
            <section className="bg-white py-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <h2 className="display-6 text-center mb-4">Welcome</h2>
                            <p className="lead text-muted mb-4">
                                Welcome to <strong>THRU MY EYES</strong>, a safe space where I share my personal journey
                                through fear and depression.
                                This site was created to let you peek into my experiences and to provide comfort and
                                understanding for anyone facing similar struggles.
                                If you are dealing with fear or depression, know that <em>you are not alone</em>.
                            </p>
                            <p className="fs-5 text-secondary">
                                Through open and honest storytelling, I hope to shed light on the ups and downs of
                                living with these challenges and
                                show that there is hope and strength to be found along the way.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <HomeCover/>
            <section className="bg-light py-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <h2 className="display-6 fw-semibold mb-4 text-center">What You'll Find Here</h2>

                            <div className="mb-4 shadow-sm p-3 bg-white rounded">
                                <h5 className="fw-bold">Personal Stories</h5>
                                <p className="text-muted mb-0">
                                    <a href="https://candid.org/">Candid</a> accounts of emotional challenges and
                                    growth. Honest reflections on fear,
                                    isolation, and moments of light.
                                </p>
                            </div>

                            <div className="mb-4 shadow-sm p-3 bg-white rounded">
                                <h5 className="fw-bold">Reflections</h5>
                                <p className="text-muted mb-0">
                                    Insights and lessons learned over time — how thoughts shift, how healing unfolds,
                                    and how inner strength builds.
                                </p>
                            </div>

                            <div className="mb-4 shadow-sm p-3 bg-white rounded">
                                <h5 className="fw-bold">Milestones</h5>
                                <p className="text-muted mb-0">
                                    Celebrating small and large breakthroughs. Because even a single breath in peace is
                                    worth recognizing.
                                </p>
                            </div>

                            <hr className="my-5"/>

                            <p className="lead text-center">
                                Every post on this site is written with warmth and openness. Whether I'm describing a
                                setback or a step forward, it’s about being real — and reminding you that you’re not
                                alone.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
