import React from 'react';
import ProfileImg from '../assets/My-img.jpg';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-5 bg-light">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-2 text-center">
                        <motion.img
                            src={ProfileImg}
                            alt="Profile"
                            className="img-fluid rounded-circle mb-2"
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                        />
                    </div>
                    <div className="col-md-8">
                        <motion.h2
                            className="mb-4"
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 0.2 }}
                        >
                            About Me
                        </motion.h2>
                        <motion.p
                            className="lead"
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 0.4 }}
                        >
                            I am a dedicated and aspiring Full Stack Developer, specializing in MERN Stack. I have developed a strong skill set in HTML, CSS, React, and MongoDB, and have worked with languages like Java, C, and Python.
                        </motion.p>
                        <motion.p
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 0.6 }}
                        >
                            My journey began with a deep interest in the world of web development, leading me to pursue a career in this area. I have worked on numerous projects that have honed my expertise in the MERN Stack. I am always eager to learn and grow, continuously seeking new challenges and opportunities to enhance my knowledge and contribute to the success of my team.
                        </motion.p>
                        <motion.p
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 0.8 }}
                        >
                            Outside of work, I am a sports and cinema buff, which help me maintain a balanced and fulfilling life.
                        </motion.p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
