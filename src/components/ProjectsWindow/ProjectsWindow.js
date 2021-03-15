import React from "react";
import {Component} from "react";
import {Col, Row, Container} from "../Grid/Grid";
import './ProjectsWindow.css'

class ProjectsWindow extends Component{
state = { 
        showFibFizz: false, showRationals: false, showCollections: false, showSchemaDesign: false, 
        showControllersServices: false, showTwitterAPI: false, showJSPrimer: false, 
        showJSDeclarative: false, showJSQuizler: false, showJSCopyPage: false, showJSDevDuel: false,
        showWhosWho: false, showPasswordGenerator: false, showWeatherDash: false, showTakeAHike: false, 
        showEmployeeDirectory: false, showGensplice: false
        }; 
render(){
const {
        showFibFizz, showRationals, showCollections, showSchemaDesign, showControllersServices,
        showTwitterAPI, showJSPrimer, showJSDeclarative, showJSQuizler, showJSCopyPage, 
        showJSDevDuel, showWhosWho, showPasswordGenerator, showWeatherDash, showTakeAHike, showEmployeeDirectory,
        showGensplice 
      } = this.state;
return(
<div className = "ProjectsWindow">
    <div className = "linkdesc">

    <Row>
        <Col size="sm">
            <p className = "header">Project Links</p>
        </Col>
    </Row>
    <Row className = "linkRow">
        <Col size ="sm">
        <a href = "https://github.com/PattonParham/FibonacciFizzBuzz" className = "links">Fibonacci/FizzBuzz</a>
        </Col>
        <Col size ="sm">
        <button href = "" className = "description" onClick ={() => this.setState({ showFibFizz: !showFibFizz})}>Description</button>
        { showFibFizz
            ? <div className = "pDiv">
                <div className = "dDiv">
                User Story: As a mathematician I want a fibonacci sequencer 
                so that I can access different values and manipulate  the fibonacci sequence
                </div>
                <div className="dDiv">
                Description: A test driven development java program exercise to intentionally 
                mimic and access integer data from the fibonacci sequence
                </div>
            </div>
            : null
        }
        </Col> 
    </Row>
    </div>
    <div className = "linkdesc">
    <Row className = "linkRow"> 
        <Col size ="sm">
        <a href = "https://github.com/PattonParham/Rationals" className = "links">Rationals</a>
        </Col>
        <Col size ="sm">
        <button href = "" className = "description" onClick ={() => this.setState({ showRationals: !showRationals})}>Description</button>
        { showRationals
            ? <div className = "pDiv">
            <div className="dDiv">
            User Story: As a mathematician I want a rational operator 
            so that I can add, subtract, multiply or divide rational numbers
            </div>
            <div className="dDiv">
            Description: A java program designed to perform the addition, subtraction, 
            multiplication, and division operations on rational numbers and return the correct value
            </div>

            </div>
            : null
        }
        </Col> 
        
    </Row>
    </div>



    <div className = "linkdesc"></div>
    <Row className = "linkRow">
        <Col size ="sm">
        <a href = "https://github.com/PattonParham/JSPrimer" className = "links">JS Primer</a>
        </Col> 
        <Col size ="sm">
        <button href = "" className = "description" onClick ={() => this.setState({ showJSPrimer: !showJSPrimer})}>Description</button>
        { showJSPrimer
            ? <div className = "pDiv">
            <div className="dDiv">
            User Story: As a store clerk I want a program so that I can calculate the 
            total price of items with tax included
            </div>
            <div className="dDiv">
            Description: Description: A simple function that calculates the total price of items, 
            tax included where applicable
            </div>
            </div>
            : null
        }
        </Col>  
    </Row>
    <div className = "linkdesc"></div>
    <Row className = "linkRow">
        <Col size ="sm">
        <a href = "https://github.com/PattonParham/JSDeclarative" className = "links">JS Declarative</a>
        </Col> 
        <Col size ="sm">
        <button href = "" className = "description" onClick ={() => this.setState({ showJSDeclarative: !showJSDeclarative})}>Description</button>
        { showJSDeclarative
            ? <div className = "pDiv">
            <div className="dDiv">
            User Story: As a store clerk I want a program so that I can calculate the 
            total price of items with tax included
            </div>
            <div className="dDiv">
            Description: A simple function that calculates the total price of items, 
            tax included where applicable
            </div>
            </div>
            : null
        }
        </Col> 
    </Row>

    <div className = "linkdesc"></div>
    <Row className = "linkRow">
        <Col size ="sm">
        <a href = "https://github.com/PattonParham/CookSystemsFinalProject" className = "links">Who's Who</a>
        </Col> 
        <Col size ="sm">
        <button href = "" className = "description" id= "bottomBtn" onClick ={() => this.setState({ showWhosWho : !showWhosWho })}>Description</button>
        { showWhosWho 
            ? <div className = "pDiv">
            <div className="dDiv">
            User Story: As a music enthusiast I want a game so that I can test my skills of knowing 
            who recorded songs in different genres
            </div>
            <div className="dDiv">
            Description: Pick a genre by pressing a button. A random song from a Spotify playlist associated 
            with that genre will play. In the input field, type the name of the artist you think the song is by. 
            When you press the submit button, it will tell you if you win (correct answer) or lose (incorrect answer).
            </div>
            </div>
            : null
        }
        </Col> 
    </Row>


    <div className = "linkdesc"></div>
    <Row className = "linkRow">
        <Col size ="sm">
        <a href = "https://pattonparham.github.io/Password-Generator/" className = "links">Password Generator</a>
        </Col> 
        <Col size ="sm">
        <button href = "" className = "description" onClick ={() => this.setState({ showPasswordGenerator: !showPasswordGenerator})}>Description</button>
        { showPasswordGenerator
            ? <div className = "pDiv">
            <div className="dDiv">
            User Story: As an account user I want a password generator so that I can have a secure,
            randomly generated password
            </div>
            <div className="dDiv">
            Description: A password generator written in javascript where you can specify character length
            and what types of characters you'd like to include
            </div>
            </div>
            : null
        }
        </Col> 

    </Row>
    <div className = "linkdesc"></div>
    <Row className = "linkRow">
        <Col size ="sm">
        <a href = "https://pattonparham.github.io/Weather-Dashboard/" className = "links">Weather Dashboard</a>
        </Col> 
        <Col size ="sm">
        <button href = "" className = "description" onClick ={() => this.setState({ showWeatherDash: !showWeatherDash})}>Description</button>
        { showWeatherDash
            ? <div className = "pDiv">
            <div className="dDiv">
            User Story: As an outdoors person I want a weather dashboard so that I can check the weather 
            before I make plans outdoors
            </div>
            <div className="dDiv">
            Description: A weather dashboard written in JavaScript/jQuery that provides the 5 day forecast
            for any city in the USA using the Wational Weather API
            </div>
            </div>
            : null
        }
        </Col> 
    </Row>
    <div className = "linkdesc"></div>
    <Row className = "linkRow">
        <Col size ="sm">
        <a href = "https://jackjewell.github.io/TakeAHike/"  className = "links">Take A Hike</a>
        </Col> 
        <Col size ="sm">
        <button href = "" className = "description" onClick ={() => this.setState({ showTakeAHike: !showTakeAHike})}>Description</button>
        { showTakeAHike
            ? <div className = "pDiv">
            <div className="dDiv">
            User Story: As an outdoors person I want a park finder so that I can find nice places
            to hike near by me or in specific locations
            </div>
            <div className="dDiv">
            Description: A national park finder written in JavaScript under a team effort using the National Parks Service API 
            to location parks near spefic locations
            </div>
            </div>
            : null
        }
        </Col> 
    </Row>
    <div className = "linkdesc"></div>
    <Row className = "linkRow">
        <Col size ="sm">
        <a href = "https://aqueous-beyond-24181.herokuapp.com/" className = "links">GenSplice</a>
        </Col> 
        <Col size ="sm">
        <button href = "" className = "description" id= "bottomBtn" onClick ={() => this.setState({ showGensplice : !showGensplice })}>Description</button>
        { showGensplice 
            ? <div className = "pDiv">
            <div className="dDiv">
            User Story: As a producer I want a random rhythmic audio generator so that I can 
            generate new ideas outside the box of human thinking therefore more rapidly
            </div>
            <div className="dDiv">
            Description: A random audio generator React App written in JavaScript and utlilizing Soundcloud's 
            API and react-player widget to acces .wav files from Soundcloud and based on millisecond inputs,
            generate and splice together randomly any .wavs input via url
            </div>
            </div>
            : null
        }
        </Col> 
    </Row>
</div>
);

    }



};

export default ProjectsWindow;