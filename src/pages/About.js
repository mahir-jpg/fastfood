import React from "react";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import "./About.css";


const About = () => {
    return (
        <div>
            <Navbar />
            <div className="About">
                <div className="About-container">
                    <h2>About The Jones</h2>
                    <p>
                        Welcome to The Jones website! We are a fast food restaurant established
                        during our semester exchange between EFREI Paris and Staffordshire University.
                        Our mission is to provide you with a fast, delicious, and high-quality dining
                        experience.
                    </p>
                    <p>
                        Our team, consisting of Pierre HE, Naël ELFANNI, Mahir AKHAYAR, Thomas AILMEIDA,
                        and Geoffrey LASIK, is passionate about gastronomy and strives to offer you tasty
                        dishes prepared with fresh and top-quality ingredients.
                    </p>
                    <p>
                        At The Jones, we are committed to delivering fast and efficient service, whether
                        you're looking for a quick lunch break, a meal on the go, or home delivery.
                        We take pride in satisfying your taste buds with our burgers, sandwiches, salads,
                        and a variety of culinary specialties.
                    </p>
                    <p>
                        Browse through our menu and discover our enticing selection of dishes. If you have
                        any questions or need assistance, feel free to contact our team. We hope your
                        experience at The Jones will be enjoyable and flavorful!
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default About;
