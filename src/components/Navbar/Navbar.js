import React from "react";
import {Col, Row, Container} from "../Grid/Grid";
import './Navbar.css'
import {Link} from "react-router-dom";
const Navbar = () => {

    return(
       
        <div className="Navbar">
          <Row>

            <div className="name">
              <p className="text">Patton Parham</p>
            </div>
                
            <div className="about link">
           
              <div>
              <Link to="/about">
                  <p className="text">
                About
                </p>
              </Link>
              </div>
             
            </div> 
            <div className="contact link">
            
              <div>

              <Link to="/contact">
              <p className="text">
                Contact
                </p>
              </Link>
              </div>
         
            </div>
            <div className="portfolio link">
            
              <div>
              <Link to="/portfolio">
              <p className="text">
              Portfolio
              </p>
              </Link>
              </div>
            
            </div>
          </Row>
        </div>
    );

};

export default Navbar; 