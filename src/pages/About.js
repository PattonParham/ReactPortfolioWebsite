import React from "react";
import "./About.css";
import {Col, Row, Container} from "../components/Grid/Grid"
import {Link} from "react-router-dom";
const About = () => {

    return(
        <div className="aboutcard">

            <div className="imagesize">
            <div className="image"></div>

            </div>


            <div className="abouttext">
                <p className="paragraph">
            Having a background in technological science with a BS 
in Audio Engineering from Belmont University (Honors Program), 
I decided to further my passion and career by learning 
how to code and becoming a Full-Stack Web Developer through Vanderbilt's
Coding Bootcamp Program. I particularly enjoy the 
creativity and logic-puzzle solving involved in the process of
developing a website or application. It is my highest objective to 
bring my enthusiasm for technology, innovation and creation into a 
full-time position.
                </p>
            </div>
          
            
        </div>
    );


};

export default About;