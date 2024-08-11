import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

const Education = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <section id="education" className="py-5">
            <div className="container ml-9">
                <h2 className="mb-4" data-aos="fade-up">Education</h2>
                <div className="row">
                    <div className="col-md-12">
                        <div className="education-item mb-4" data-aos="fade-right">
                            <h4>Bachelor of Commerce</h4>
                            <h5>University of Allahabad</h5>
                            <p className="text-muted">July 2019 - May 2022</p>
                            <p>
                                Relevant coursework: Accountancy, International Trade and Tariffs, Economics and Money and Banking.
                            </p>
                        </div>
                        <div className="education-item mb-4" data-aos="fade-right">
                            <h4>Master of Computer Application</h4>
                            <h5>University of Allahabad</h5>
                            <p className="text-muted">November 2022 - August 2024</p>
                            <p>
                                Relevant coursework: Object-Oriented Programming, Database Management, Software Engineering, and Web Development.
                            </p>
                        </div>
                        <div className="education-item" data-aos="fade-right">
                            <h4>Certification in Google Cloud Readiness</h4>
                            <h5>Certification of training in Web Development in Acmegrade</h5>
                            <p className="text-muted">June 2022 - December 2022</p>
                            <p>
                                Acquired hands-on experience in full-stack development, covering technologies such as React, Node.js, Express, MongoDB, PHP, and RESTful API development.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Education;
