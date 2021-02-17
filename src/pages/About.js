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
                Coding Bootcamp Program. I then expanded my knowledge by completing 
                the Cook Systems FastTrack program. I particularly enjoy the 
                creativity and logic-puzzle solving involved in the process of
                developing a website or application. It is my highest objective to 
                bring my enthusiasm for technology, innovation and creation into a 
                full-time position.
                </p>
                <p className="paragraph" id ="scrollDown"> Scroll Down for Full Story</p>
                <p className="paragraph">
                Born in 1993, I grew up in Boston area Massachusetts in the historic town of Franklin, 
                later moving to another Massachusetts town named Sherborn for my teenage years. 
                When I became an adult I found myself pursuing a passion in music and creativity 
                and moved to Nashville, Tennessee. I have resided here for almost a decade now 
                and my creativity has been expanding the entire time. Everything is an energy-based 
                interactive network of patterns and connections; skill sets being the way one affects 
                the world around them through understanding, determination and execution. Learning how 
                to build and expand my skill sets is my greatest passion in life. Since being in Nashville 
                I graduated with a Bachelor’s of Science degree in audio engineering from Belmont University in 2016, 
                have pursued audio and music, become a visual artist (jewelry, paintings, t-shirts, digital) 
                and in 2020 graduated from Vanderbilt’s Full-Stack Developer bootcamp. My journey has been a 
                path rich with knowledge no matter the terrain and I wouldn’t have it any other way. 
                </p>
                <p className="paragraph">
                Audio Engineering is where it began with my interest in the digital realm. 
                Studying at Belmont in a time of exponentially increasing technology in the early-mid 2010’s, 
                I learned about audio in the context of physics, perception and the currently ongoing digital 
                revolution. It was there that I first became familiar with DAWs (Digital Audio Workstations) and 
                related audio software. Since graduating, I have continued to learn about how to optimally use these 
                softwares to create music, while pursuing other interests.
                </p>
                <p className="paragraph">
                Towards the end of my college experience in 2016, I began to pursue arts and crafts  and began 
                creating my own jewelry business. Thus began a period in my life where I was more or less freelancing 
                audio, working jobs ranging from live production, mix engineering, cooking food, and selling art 
                in combination to forge together an income. Over time, the art began to take the forefront. 
                I created works using the unique techniques of flintknapping (the carving of arrowheads/other shapes) 
                and weaving patterns with metal wire to hold stones and crystals together. My work began to catch on 
                and my pendants and rings began to sell extremely well when I would set up a booth at live music events. 
                This experience taught me some valuable business skills (my minor is in Music Business). Through my love 
                of music, I became connected with many people in the local industry who appreciated my artwork and gave 
                me opportunities to sell merchandise at their events. I also learned well how to interact with customers, 
                some of which would become friends of mine. A large aspect of what I enjoyed about spreading my art was 
                the joy that people derived from it. I’ve given many gifts I’ve created over the years.   
                </p>
                <p className="paragraph">
                The audio fed the visual as the visual fed the audio. I improved more every day in all my endeavors. 
                There was, however, a limitation that I felt was holding me back increasingly as the world moved 
                forward technologically. It made sense also for the next step in my career to also empower me creatively.
                Why just know how to use software, when I could also know how to create software itself. In a world where 
                computers are only becoming more relevant, I wanted to understand how. So, I enrolled in Vanderbilt’s coding 
                bootcamp graduating in April, 2020. I have continued to work at my coding skills since graduating. 
                </p>
                <p className="paragraph">
                Aside from refining my coding skills I recently in 2020 took up painting and making t-shirts as a hobby 
                and craft. I am happier with my audio production quality than I have ever been and that inspires me to 
                improve my coding skills even more so that some day I can create music with my own digital technology. 
                </p>
            </div>
          
            
        </div>
    );


};

export default About;