import React from "react";
import { Link } from "react-router-dom";
import landingImage from "../../images/landingPage1x.png"
import '../css/LandingPage.css'

export default function LandingPage(){
    return<div className="landing-container">
        <section>
            <img src={landingImage} alt="logo"/>
        </section>
        <section className="landing-btn">
            <p>10x Team 04</p>
            <Link to={"/postview"}>
                <button>Enter</button>
            </Link>
        </section>
    </div>
}