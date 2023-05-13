import React from "react";
import "./Contact.css";

const Contact = () => {
    return (
        <div className="Contact">
            <div className="Contact-container">
                <h2>Contact Us</h2>
                <p>Feel free to get in touch with us. We would love to hear from you!</p>
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message"></textarea>
                    </div>
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;

