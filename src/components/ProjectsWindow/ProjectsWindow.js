import React from "react";
import {Component} from "react";
import {Col, Row, Container} from "../Grid/Grid";
import './ProjectsWindow.css'

class ProjectsWindow extends Component{
state = { 
        showFibFizz: false, showRationals: false, showCollections: false, showSchemaDesign: false, 
        showControllersServices: false, showTwitterAPI: false, showJSPrimer: false, 
        showJSDeclarative: false, showJSQuizler: false, showJSCopyPage: false, showJSDevDuel: false,
        showPasswordGenerator: false, showWeatherDash: false, showTakeAHike: false, 
        showEmployeeDirectory: false, showGensplice: false
        }; 
render(){
const {
        showFibFizz, showRationals, showCollections, showSchemaDesign, showControllersServices,
        showTwitterAPI, showJSPrimer, showJSDeclarative, showJSQuizler, showJSCopyPage, 
        showJSDevDuel, showPasswordGenerator, showWeatherDash, showTakeAHike, showEmployeeDirectory,
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
        <a href = "https://github.com/fasttrackd-student-work/java-assignment-fibonacci-fizzbuzz-PattonParham" className = "links">Fibonacci/FizzBuzz</a>
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
        <a href = "https://github.com/fasttrackd-student-work/java-assignment-rationals-PattonParham" className = "links">Rationals</a>
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
        <a href = "https://github.com/fasttrackd-student-work/java-assignment-collections-PattonParham" className = "links">Collections</a>
        </Col>
        <Col size ="sm">
        <button href = "" className = "description" onClick ={() => this.setState({ showCollections: !showCollections})}>Description</button>
        { showCollections
            ? <div className = "pDiv">
            <div className="dDiv">
            User Story: As a company I want an employee database so that I can better
            keep track of the chain of command
            </div>
            <div className="dDiv">
            Description: A java program utilizing Collections designed to help organize an employee database by 
            employee, manager and chain of command
            </div>
            </div>
            : null
        }
        </Col> 
    </Row>
    <div className = "linkdesc"></div>
    <Row className = "linkRow">
        <Col size ="sm">
        <a href = "https://github.com/fasttrackd-student-work/java-assignment-schema-design-PattonParham" className = "links">Schema Design</a>
        </Col>
        <Col size ="sm">
        <button href = "" className = "description" onClick ={() => this.setState({ showSchemaDesign: !showSchemaDesign})}>Description</button>
        { showSchemaDesign
            ? <div className = "pDiv">
            <div className="dDiv">
            User Story: As a person with specific interests I want a friend finding app so that I can 
            get connected with other people in my area who share the same interests
            </div>
            <div className="dDiv">
            Description: A schema written to represent relationship between persons, interests and location to 
            match them up based on interest and location
            </div>
            </div>
            : null
        }
        </Col>    
    </Row>
    <div className = "linkdesc"></div>
    <Row className = "linkRow">
        <Col size ="sm">
        <a href = "https://github.com/fasttrackd-student-work/spring-assignment-rest-PattonParham" className = "links">Controllers/Services</a>
        </Col>
        <Col size ="sm">
        <button href = "" className = "description" onClick ={() => this.setState({ showControllersServices: !showControllersServices})}>Description</button>
        { showControllersServices
            ? <div className = "pDiv">
            <div className="dDiv">
            User Story: As an instructor I want a quiz application so that I can create quizzes,
            questions, and answers, save them and create randomized quizzes
            </div>
            <div className="dDiv">
            Description: An application written in Java and Spring that allows the user to input
            their own custom quizzes, questions and answers
            </div>
            </div>
            : null
        }
        </Col> 
    </Row>
    <div className = "linkdesc"></div>
    <Row className = "linkRow">
        <Col size ="sm">
        <a href = "https://github.com/fasttrackd-student-work/spring-assessment-social-media-team-sprint1" className = "links">Twitter API Assessment</a>
        </Col>
        <Col size ="sm">
        <button href = "" className = "description" onClick ={() => this.setState({ showTwitterAPI: !showTwitterAPI})}>Description</button>
        { showTwitterAPI
            ? <div className = "pDiv">
            <div className="dDiv">
            User Story: As a twitter developer I want a Twitter API so that I can perform the 
            functionalities of twitter on my database
            </div>
            <div className="dDiv">
            Description: A mock twitter API devleoped using Controllers, Services, Repositories and Response DTOs
            </div>
            </div>
            : null
        }
        </Col> 
    </Row>
    <div className = "linkdesc"></div>
    <Row className = "linkRow">
        <Col size ="sm">
        <a href = "https://github.com/fasttrackd-student-work/js-assignment-primer-PattonParham" className = "links">JS Primer</a>
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
        <a href = "https://github.com/fasttrackd-student-work/js-assignment-declarative-PattonParham" className = "links">JS Declarative</a>
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
        <a href = "https://github.com/fasttrackd-student-work/js-assignment-quizler-PattonParham" className = "links">JS Quizler</a>
        </Col>
        <Col size ="sm">
        <button href = "" className = "description" onClick ={() => this.setState({ showJSQuizler: !showJSQuizler})}>Description</button>
        { showJSQuizler
            ? <div className = "pDiv">
            <div className="dDiv">
            User Story: As an instructor I want a quiz application so that I can create quizzes,
            questions, and answers, save them and create randomized quizzes
            </div>
            <div className="dDiv">
            Description: An application written in JavaScript, utilizing inquirer.js and vorpal.js 
            that allows the user to input their own custom quizzes, questions and answers
            </div>
            </div>
            : null
        }
        </Col>  
    </Row>
    <div className = "linkdesc"></div>
    <Row className = "linkRow">
        <Col size ="sm">
        <a href = "https://github.com/fasttrackd-student-work/js-assignment-copy-page-PattonParham" className = "links">JS Copy Page</a>
        </Col>
        <Col size ="sm">
        <button href = "" className = "description" onClick ={() => this.setState({ showJSCopyPage: !showJSCopyPage})}>Description</button>
        { showJSCopyPage
            ? <div className = "pDiv">
            <div className="dDiv">
            User Story: As a mac salesperson I want an informative web page so that I can have an aesthetically
            pleasing document to reference when potential customers have questions
            </div>
            <div className="dDiv">
            Description: A mock html and css webpage design of the Macbook Pro Technical Specifications
            </div>
            </div>
            : null
        }
        </Col>  
    </Row>
    <div className = "linkdesc"></div>
    <Row className = "linkRow">
        <Col size ="sm">
        <a href = "https://github.com/fasttrackd-student-work/js-assignment-dev-duel-PattonParham" className = "links">JS Dev-Duel</a>
        </Col>
        <Col size ="sm">
        <button href = "" className = "description" onClick ={() => this.setState({ showJSDevDuel: !showJSDevDuel})}>Description</button>
        { showJSDevDuel
            ? <div className = "pDiv">
            <div className="dDiv">
            User Story: As a github user I want a game where I can battle other github users based on their stats
            </div>
            <div className="dDiv">
            Description: A JavaScript written game in which two github users enter, and based on their stats accessed using github's api,
            one github user exits victorious
            </div>
            </div>
            : null
        }
        </Col>  
    </Row>
    <div className = "linkdesc"></div>
    <Row className = "linkRow">
        <Col size ="sm">
        <a href = "" className = "links">Password Generator</a>
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
        <a href = "" className = "links">Weather Dashboard</a>
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
        <a href = "" className = "links">Take A Hike</a>
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
            Description: A national park finder written in JavaScript using the National Parks Service API 
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
        <a href = "" className = "links">Employee Directory</a>
        </Col>
        <Col size ="sm">
        <button href = "" className = "description" onClick ={() => this.setState({ showEmployeeDirectory: !showEmployeeDirectory})}>Description</button>
        { showEmployeeDirectory
            ? <div className = "pDiv">
            <div className="dDiv">
            User Story:
            </div>
            <div className="dDiv">
            Description:
            </div>
            </div>
            : null
        }
        </Col>  
    </Row>
    <div className = "linkdesc"></div>
    <Row className = "linkRow">
        <Col size ="sm">
        <a href = "" className = "links">GenSplice</a>
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
            Description: A random audio generator React App written in JavaScript and utlilizing sound cloud's 
            API and react-player widget to acces wav files from soundcloud and based on millisecond inputs,
            generate and splice together randomly any wavs input via url
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