import React from 'react'

const Contact = () => {
    return (
        <section id="contact" className="py-5">
            <div className="container">
                <h2 className="mb-4">Contact Me</h2>
                <div className="row">
                    <div className="col-md-6 mb-4">
                        <h4>Get In Touch</h4>
                        <p>If you have any questions or would like to discuss a project, feel free to reach out!</p>
                        <ul className="list-unstyled">
                            <li><strong>Email:</strong> <a href="mailto:aadityanag589@gmail.com">aadityanag589@gmail.com</a></li>
                            <li><strong>Phone:</strong> +91 7905856691</li>
                            <li><strong>Location:</strong> Prayagraj, Uttar Pradesh, India</li>
                        </ul>
                    </div>
                    <div className="col-md-6">
                        <form>
                            <div className="form-group mb-3">
                                <label htmlFor="name">Name</label>
                                <input type="text" className="form-control" id="name" placeholder="Your Name" />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="email">Email</label>
                                <input type="email" className="form-control" id="email" placeholder="Your Email" />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="message">Message</label>
                                <textarea className="form-control" id="message" rows="5" placeholder="Your Message"></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact
