import React from 'react';
import {Link} from "react-router-dom";

export default function Page1() {
    return (
        <div>
            <title>THRU My Journey Moments</title>
            {/* Hero Title Section */}
            <section className="bg-dark text-light py-5">
                <div className="container text-center">
                    <h1 className="display-4 fw-bold">Moments That Shaped Me</h1>
                    <p className="lead">Honest reflections on the turning points in my journey through fear and
                        depression.</p>
                </div>
            </section>

            {/* Story Section */}
            <section className="bg-light py-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <h2 className="mb-4 fw-semibold">The Day Everything Felt Too Heavy</h2>
                            <p className="fs-5 text-secondary">
                                I still remember that morning. I woke up and couldn’t move — not because of exhaustion,
                                but because everything inside me felt hollow and overwhelming. The fear wasn’t of
                                something external. It was the fear of continuing, of pretending again. That was the day
                                I decided I needed to reach out.
                            </p>

                            <h3 className="mt-5 fw-semibold">Seeking Help</h3>
                            <p className="fs-5 text-secondary">
                                Making the first call to a therapist was terrifying. I stared at the number for hours.
                                But eventually, I did it. And it was one of the bravest things I’ve ever done. My voice
                                cracked, my hands shook, but I spoke. I shared. And that call began to untangle years of
                                silence.
                            </p>

                            <h3 className="mt-5 fw-semibold">Small Victories</h3>
                            <p className="fs-5 text-secondary">
                                Healing didn’t come all at once. It came in moments — brushing my teeth without crying,
                                stepping outside even when I didn’t want to, journaling my thoughts instead of bottling
                                them up. I began recognizing these small victories as signs of progress.
                            </p>
                            <img
                                src='src/assets/calm-water.jpg' // <-- rename to match your file
                                alt="Feet in calm water"
                                className="img-fluid rounded shadow-sm my-3"
                            />

                            <h3 className="mt-5 fw-semibold">Learning to Breathe Again</h3>
                            <p className="fs-5 text-secondary">
                                Meditation and breathing exercises were suggested to me — and I scoffed at first. But
                                eventually, I sat down one evening and just… breathed. For the first time in months, I
                                didn’t feel like I was drowning. It wasn’t a miracle cure, but it was a start.
                            </p>

                            <hr className="my-5"/>

                            <p className="lead text-center">
                                These moments — heavy, hopeful, and human — are part of who I am. I share them here not
                                as solutions, but as proof that it’s possible to keep going.
                            </p>
                        </div>
                        <div className="text-center mt-5">
                            <h4 className="fw-semibold mb-3">Want to see what I’ve learned along the way?</h4>
                            <Link to="/reflections" className="btn btn-outline-secondary btn-lg">
                                Visit Reflections
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}