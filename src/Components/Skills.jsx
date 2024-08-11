import React from 'react';


const Skills = () => {
    return (
        <section id="skills" className="py-5 bg-light">
            <div className="container">
                <h2 className="mb-4">Skills</h2>
                <div className="row">
                    <div className="col-md-6 skills-section">
                        <h4>Programming Languages</h4>
                        <ul className="list-group mb-4">
                            <li className="list-group-item">
                                <strong>JavaScript</strong>
                                <div className="progress">
                                    <div className="progress-bar bg-success" role="progressbar" style={{ width: '85%' }} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">85%</div>
                                </div>
                            </li>
                            <li className="list-group-item">
                                <strong>Python</strong>
                                <div className="progress">
                                    <div className="progress-bar bg-info" role="progressbar" style={{ width: '70%' }} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">70%</div>
                                </div>
                            </li>
                            <li className="list-group-item">
                                <strong>Java</strong>
                                <div className="progress">
                                    <div className="progress-bar bg-warning" role="progressbar" style={{ width: '80%' }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">80%</div>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="col-md-6 skills-section">
                        <h4>Web Development</h4>
                        <ul className="list-group mb-4">
                            <li className="list-group-item">
                                <strong>HTML & CSS</strong>
                                <div className="progress">
                                    <div className="progress-bar bg-danger" role="progressbar" style={{ width: '90%' }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">90%</div>
                                </div>
                            </li>
                            <li className="list-group-item">
                                <strong>React</strong>
                                <div className="progress">
                                    <div className="progress-bar bg-primary" role="progressbar" style={{ width: '80%' }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">80%</div>
                                </div>
                            </li>
                            <li className="list-group-item">
                                <strong>Node.js</strong>
                                <div className="progress">
                                    <div className="progress-bar bg-success" role="progressbar" style={{ width: '75%' }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">75%</div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;
