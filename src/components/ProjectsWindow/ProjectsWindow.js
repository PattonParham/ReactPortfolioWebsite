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
    <Row className = "linkRow">
        <Col size ="sm">
        <a href = "https://github.com/fasttrackd-student-work/java-assignment-fibonacci-fizzbuzz-PattonParham" className = "links">Fibonacci/FizzBuzz</a>
        </Col>
        <Col size ="sm">
        <button href = "" className = "description" onClick ={() => this.setState({ showFibFizz: !showFibFizz})}>Description</button>
        { showFibFizz
            ? <div className = "pDiv">blah blah blah project description</div>
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
            ? <div className = "pDiv">blah blah blah project description</div>
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
            ? <div className = "pDiv">blah blah blah project description</div>
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
            ? <div className = "pDiv">blah blah blah project description</div>
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
            ? <div className = "pDiv">blah blah blah project description</div>
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
            ? <div className = "pDiv">blah blah blah project description</div>
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
            ? <div className = "pDiv">blah blah blah project description</div>
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
            ? <div className = "pDiv">blah blah blah project description</div>
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
            ? <div className = "pDiv">blah blah blah project description</div>
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
            ? <div className = "pDiv">blah blah blah project description</div>
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
            ? <div className = "pDiv">blah blah blah project description</div>
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
            ? <div className = "pDiv">blah blah blah project description</div>
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
            ? <div className = "pDiv">blah blah blah project description</div>
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
            ? <div className = "pDiv">blah blah blah project description</div>
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
            ? <div className = "pDiv">blah blah blah project description</div>
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
        <button href = "" className = "description" onClick ={() => this.setState({ showGensplice : !showGensplice })}>Description</button>
        { showGensplice 
            ? <div className = "pDiv">blah blah blah project description</div>
            : null
        }
        </Col> 
    </Row>
</div>
);

    }



};

export default ProjectsWindow;