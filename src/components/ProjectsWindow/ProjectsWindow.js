import React from "react";
import {Component} from "react";
import {Col, Row, Container} from "../Grid/Grid";
import './ProjectsWindow.css'

class ProjectsWindow extends Component{
state = { showing: true }; 
render(){
const {showing} = this.state;
return(
<div className = "ProjectsWindow">
    <div className = "linkdesc">
    <Row className = "linkRow">
        <Col size ="sm">
        <a href = "https://github.com/fasttrackd-student-work/java-assignment-fibonacci-fizzbuzz-PattonParham" className = "links">Fibonacci/FizzBuzz</a>
        </Col>
        <Col size ="sm">
        <button href = "" className = "description" onClick ={() => this.setState({ showing: !showing})}>Description</button>
        { showing
            ? <div>blah blah blah project description</div>
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
        <button href = "" className = "description">Description</button>
        </Col> 
        
    </Row>
    </div>
    <div className = "linkdesc"></div>
    <Row className = "linkRow">
        <Col size ="sm">
        <a href = "https://github.com/fasttrackd-student-work/java-assignment-collections-PattonParham" className = "links">Collections</a>
        </Col>
        <Col size ="sm">
        <button href = "" className = "description">Description</button>
        </Col> 
    </Row>
    <div className = "linkdesc"></div>
    <Row className = "linkRow">
        <Col size ="sm">
        <a href = "https://github.com/fasttrackd-student-work/java-assignment-schema-design-PattonParham" className = "links">Schema Design</a>
        </Col>
        <Col size ="sm">
        <button href = "" className = "description">Description</button>
        </Col>    
    </Row>
    <div className = "linkdesc"></div>
    <Row className = "linkRow">
        <Col size ="sm">
        <a href = "https://github.com/fasttrackd-student-work/spring-assignment-rest-PattonParham" className = "links">Controllers/Services</a>
        </Col>
        <Col size ="sm">
        <button href = "" className = "description">Description</button>
        </Col> 
    </Row>
    <div className = "linkdesc"></div>
    <Row className = "linkRow">
        <Col size ="sm">
        <a href = "https://github.com/fasttrackd-student-work/spring-assessment-social-media-team-sprint1" className = "links">Twitter API Assessment</a>
        </Col>
        <Col size ="sm">
        <button href = "" className = "description">Description</button>
        </Col> 
    </Row>
    <div className = "linkdesc"></div>
    <Row className = "linkRow">
        <Col size ="sm">
        <a href = "https://github.com/fasttrackd-student-work/js-assignment-primer-PattonParham" className = "links">JS Primer</a>
        </Col> 
        <Col size ="sm">
        <button href = "" className = "description">Description</button>
        </Col>  
    </Row>
    <div className = "linkdesc"></div>
    <Row className = "linkRow">
        <Col size ="sm">
        <a href = "https://github.com/fasttrackd-student-work/js-assignment-declarative-PattonParham" className = "links">JS Declarative</a>
        </Col> 
        <Col size ="sm">
        <button href = "" className = "description">Description</button>
        </Col> 
    </Row>
    <div className = "linkdesc"></div>
    <Row className = "linkRow">
        <Col size ="sm">
        <a href = "https://github.com/fasttrackd-student-work/js-assignment-quizler-PattonParham" className = "links">JS Quizler</a>
        </Col>
        <Col size ="sm">
        <button href = "" className = "description">Description</button>
        </Col>  
    </Row>
    <div className = "linkdesc"></div>
    <Row className = "linkRow">
        <Col size ="sm">
        <a href = "https://github.com/fasttrackd-student-work/js-assignment-copy-page-PattonParham" className = "links">JS Copy Page</a>
        </Col>
        <Col size ="sm">
        <button href = "" className = "description">Description</button>
        </Col>  
    </Row>
    <div className = "linkdesc"></div>
    <Row className = "linkRow">
        <Col size ="sm">
        <a href = "https://github.com/fasttrackd-student-work/js-assignment-dev-duel-PattonParham" className = "links">JS Dev-Duel</a>
        </Col>
        <Col size ="sm">
        <button href = "" className = "description">Description</button>
        </Col>  
    </Row>
    <div className = "linkdesc"></div>
    <Row className = "linkRow">
        <Col size ="sm">
        <a href = "" className = "links">Password Generator</a>
        </Col> 
        <Col size ="sm">
        <button href = "" className = "description">Description</button>
        </Col> 

    </Row>
    <div className = "linkdesc"></div>
    <Row className = "linkRow">
        <Col size ="sm">
        <a href = "" className = "links">Weather Dashboard</a>
        </Col> 
        <Col size ="sm">
        <button href = "" className = "description">Description</button>
        </Col> 
    </Row>
    <div className = "linkdesc"></div>
    <Row className = "linkRow">
        <Col size ="sm">
        <a href = "" className = "links">Take A Hike</a>
        </Col> 
        <Col size ="sm">
        <button href = "" className = "description">Description</button>
        </Col> 
    </Row>
    <div className = "linkdesc"></div>
    <Row className = "linkRow">
        <Col size ="sm">
        <a href = "" className = "links">Employee Directory</a>
        </Col>
        <Col size ="sm">
        <button href = "" className = "description">Description</button>
        </Col>  
    </Row>
    <div className = "linkdesc"></div>
    <Row className = "linkRow">
        <Col size ="sm">
        <a href = "" className = "links">GenSplice</a>
        </Col> 
        <Col size ="sm">
        <button href = "" className = "description">Description</button>
        </Col> 
    </Row>
</div>
);

    }



};

export default ProjectsWindow;