import React, { useState } from 'react';
import img1 from '../assets/Home2.png';
import img2 from '../assets/BloodBank.png';
import img3 from '../assets/CinematicZone.png';

const Project = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            title: "E-commerce Platform",
            description: "This is an e-commerce website made with the help of HTML, CSS, JavaScript, and PHP. It provides the facility of vendors registering themselves on the platform and uploading the products they want to sell. It offers customers to register themselves, view, and place orders for products they want to buy. This website basically consists of products related to electronics, computer, and mobile technology.",
            image: img1,
            link: "https://github.com/Aaditya2312/Ecommerce-Website"
        },
        {
            title: "Blood Bank Website",
            description: "This website is divided into different sections such as donor, admin, hospital, and organization, in which each module has its own functionality. It helps to maintain a record of the blood for the organization as well as for the hospitals and helps donors to register which organization he/she wants to donate blood to.",
            image: img2,
            link: "https://github.com/Aaditya2312/Blood-bank-"
        },
        {
            title: "Cinematic Zone",
            description: "It is a website on which users can search for a particular movie, which eventually delivers all the information about the movie. It can also be used to write a review about a particular film or recommend films to other users by signing up and then logging in to the website.",
            image: img3,
            link: "https://github.com/Aaditya2312/Cinematic-Zone"
        }
    ];

    const handleShowModal = (project) => {
        setSelectedProject(project);
    };

    const handleCloseModal = () => {
        setSelectedProject(null);
    };

    return (
        <section id="projects" className="py-5 bg-light bg-gradient">
            <div className="container">
                <h2 className="mb-4">Projects</h2>
                <div className="row">
                    {projects.map((project, index) => (
                        <div className="col-md-4 mb-4" key={index}>
                            <div className="card">
                                <img src={project.image} className="card-img-top" alt={project.title} />
                                <div className="card-body">
                                    <h5 className="card-title">{project.title}</h5>
                                    <p className="card-text">{project.description}</p>
                                    <button
                                        className="btn btn-primary"
                                        onClick={() => handleShowModal(project)}
                                    >
                                        View Project
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bootstrap Modal */}
            {selectedProject && (
                <div className="modal fade show" style={{ display: 'block' }} onClick={handleCloseModal}>
                    <div className="modal-dialog modal-lg" role="document" onClick={e => e.stopPropagation()}>
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">{selectedProject.title}</h5>
                                <button type="button" className="close" onClick={handleCloseModal} aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <img src={selectedProject.image} className="img-fluid mb-3" alt={selectedProject.title} />
                                <p>{selectedProject.description}</p>
                            </div>
                            <div className="modal-footer">
                                <a
                                    href={selectedProject.link}
                                    className="btn btn-primary"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    View Project on GitHub
                                </a>
                                <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Project;
