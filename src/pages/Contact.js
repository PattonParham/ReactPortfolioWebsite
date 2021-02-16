import React from "react";
import {Link} from "react-router-dom";
import "./Contact.css";
import {Col, Row, Container} from "../components/Grid/Grid";
const Contact = () => {

    return(
        <div>
        <div className="contactcard">
            <form action="mailto:patton.parham@verizon.net" method="post" enctype="text/plain" className="form">
                <label for="exampleFormControlInput1" className="formlabel">Name:</label>
                <br></br>
                <input type="text" name="name" className="form-control E"></input>
                <label for="exampleFormControlInput1" className="formlabel">Email address:</label>
                <br></br>
                <input type="text" name="mail" className="form-control E"></input>
                <label for="exampleFormControlTextarea1" className="formlabel">Message:</label>
                <br></br>
                <textarea type="text" name="comment" className="form-control message" id="exampleFormControlTextarea1"></textarea>
                <br></br>
                <Row>
                <button type="submit" value="Send" className="btn submitbtn" id = "mobilecontactbtn">
                    <div className="btnborder">
                        <div className="btntext">
                            Submit
                        </div>
                    </div>
                </button>
                <br></br>
                <button type="reset" value="Reset" className= "btn submitbtn" id ="resetbtn">  
                            <div className= "btnborder">
                                <div className= "btntext">
                            Reset
                            </div>
                        </div> 
                            
                        </button>
                </Row>
            </form>

        </div>
        </div>
    );


};

export default Contact;