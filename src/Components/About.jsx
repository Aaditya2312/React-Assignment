import React from 'react'
import ProfileImg from '../assets/My-img.jpg'

const About = () => {
    return (
        <section id="about" className="py-5 bg-light">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-3 text-center">
                        <img
                            src={ProfileImg} // Replace with your image URL
                            alt="Profile"
                            className="img-fluid rounded-circle mb-3"
                        />
                    </div>
                    <div className="col-md-8">
                        <h2 className="mb-4">About Me</h2>
                        <p className="lead">
                            I am a dedicated and an aspiring Full Stack Developer, specializing in Mern Stack. I have developed a strong skill set in Html, Css, React and MongoDb and have worked on languages like Java, C, and Python.
                        </p>
                        <p>
                            My journey began with a deep interest in the world of web development, leading me to pursue a career in this area. I have worked on numerous projects that have honed my expertise in Mern Stack. I am always eager to learn and grow, continuously seeking new challenges and opportunities to enhance my knowledge and contribute to the success of my team.
                        </p>
                        <p>
                            Outside of work, I am a sports and cinema buff, which help me maintain a balanced and fulfilling life.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About
