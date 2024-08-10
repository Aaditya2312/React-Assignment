import React from 'react'

const Education = () => {
    return (
        <div>
            <section id="education" className="py-5">
                <div className="container ml-9">
                    <h2 className="mb-4">Education</h2>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="education-item mb-4">
                                <h4>Bachelor of Commerce</h4>
                                <h5>University of Allahabad</h5>
                                <p className="text-muted">July 2019 - May 2022</p>
                                <p>
                                    Relevant coursework: Accountancy, International Trade and Tarrifs, Economics and Money and Banking.
                                </p>
                            </div>
                            <div className="education-item mb-4">
                                <h4>Master of Computer Application</h4>
                                <h5>University of Allahabad</h5>
                                <p className="text-muted">November 2022 - August 2024</p>
                                <p>
                                    Relevant coursework: Object Oriented Programmin, Database Management, Software Engineering, and Web Development.
                                </p>
                            </div>
                            <div className="education-item">
                                <h4>Certification in Google Cloud Readiness</h4>
                                <h5>Certification of traning in Web Development in Acmegrade</h5>
                                <p className="text-muted">June 2022 - December 2022</p>
                                <p>
                                    Acquired hands-on experience in full-stack development, covering technologies such as React, Node.js, Express, MongoDB, Php and RESTful API development.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Education
