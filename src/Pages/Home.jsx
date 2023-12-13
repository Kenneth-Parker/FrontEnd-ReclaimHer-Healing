import React from 'react';
import './Home.css'
import img1 from "../assets/womanSquares.png"
import img2 from "../assets/groWomanHuggreen.png"



const Home = () => {
    return (
        <div>
            <section className="welcome-section">
                <div className="welcome-container">
                    <img
                        src={img1}
                        alt="homePage1 Image"
                        className="homePage-image"
                    />

                    <h1>Welcome to ReclaimHer Healing</h1>
                    <p>Empowering women on the journey to healing and transformation.</p>
                    <img
                        src={img2}
                        alt="homePage2 Image"
                        className="homePage-image"
                    />
                    <br />
                    <button>Join Us</button>
                </div>
            </section>
        </div>
    );
};

export default Home;