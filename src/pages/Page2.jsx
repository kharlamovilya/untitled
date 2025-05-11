// Full Page2.jsx: Reflections — styled and heartfelt for THRU MY EYES
import React from 'react';

export default function Page2() {
    return (
        <div>
            <title>THRU My Journey Reflections</title>
            {/* Hero Section */}
            <section className="bg-secondary text-light py-5">
                <div className="container text-center">
                    <h1 className="display-4 fw-bold">Reflections</h1>
                    <p className="lead">Thoughts I've gathered along the way. Soft realizations. Honest truths. Small
                        wisdoms.</p>
                </div>
            </section>
            <section className="bg-white py-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <h3 className="fw-semibold text-center mb-3">A Glimpse Into My Check-Ins</h3>
                            <p className="fs-5 text-muted text-center mb-4">
                                These are quiet questions I ask myself weekly — a gentle scan of how I’ve really been
                                feeling.
                            </p>

                            <div className="table-responsive shadow-sm rounded overflow-hidden">
                                <table className="table table-hover table-bordered align-middle bg-white mb-0">
                                    <thead className="table-light text-secondary text-center">
                                    <tr>
                                        <th className="fw-semibold">Question</th>
                                        <th className="fw-semibold">Why It Matters</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td className="text-dark">Have I felt overwhelmed this week?</td>
                                        <td className="text-secondary">
                                            Recognizing the weight I carry lets me name it — and maybe lighten it.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-dark">Did I give myself rest?</td>
                                        <td className="text-secondary">
                                            Rest is a form of self-respect, not weakness.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-dark">What moment brought me peace?</td>
                                        <td className="text-secondary">
                                            Even small joys are anchors. I write them down to remember they exist.
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="bg-light py-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <h2 className="mb-4 fw-semibold">The Things I Tell Myself Now</h2>
                            <p className="fs-5 text-secondary">
                                I used to believe that every anxious thought was truth. That every sad day was a sign of
                                failure. Now, I pause.
                                I listen. I respond to my pain with something gentler. These are the things I’ve learned
                                — and unlearned.
                            </p>

                            <div className="my-5 text-center">
                                <img
                                    src='src/assets/reflecting.jpg'
                                    alt="Feet in calm water"
                                    className="img-fluid rounded shadow"
                                    style={{maxHeight: '450px', objectFit: 'cover'}}
                                />
                            </div>

                            <h3 className="fw-semibold mt-5">Reflection 1: Feelings Are Not Facts</h3>
                            <p className="fs-5 text-secondary">
                                Just because I feel broken doesn’t mean I am. Emotions pass through — they do not define
                                me. Some days I let them sit beside me
                                instead of trying to fight them off.
                            </p>

                            <h3 className="fw-semibold mt-4">Reflection 2: Rest Is Not Laziness</h3>
                            <p className="fs-5 text-secondary">
                                I used to beat myself up for needing rest. Now I see it as care. Slowness is not
                                weakness — it is respect for my capacity.
                            </p>

                            <h3 className="fw-semibold mt-4">Reflection 3: Progress Isn’t Always Visible</h3>
                            <p className="fs-5 text-secondary">
                                There are days where I don’t feel strong — and yet I’m still here, breathing, trying.
                                That is its own kind of power.
                            </p>

                            <hr className="my-5"/>

                            <p className="lead text-center">
                                These reflections are my reminders. I return to them when I feel lost — and sometimes,
                                they help me find my way again.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
