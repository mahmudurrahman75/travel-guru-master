import React from 'react';
import './CoxsBazar.css';
import { Link } from 'react-router-dom';
import Rectangle from '../../Image/Photos/Rectangle.png';
import Logo from '../../Image/Logo.png';
import {Navbar,Nav,Button,Container,Row,Col, Form}  from 'react-bootstrap';

const CoxsBazar = () => {
    return (
        <div style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ),url(${Rectangle})` }} className="home">
            <div className="travel">
            <Navbar bg="" variant="light">
                <Navbar.Brand className="logo" href="#home"><img src={Logo} alt=""/></Navbar.Brand>
                <input type="text" placeholder="Search Your Destination" className="search" />   
                
                <Nav className="mr-auto">
                    <Nav.Link style={{color:'white'}} href="/home">Home</Nav.Link>
                    <Nav.Link style={{color:'white'}} href="#features">News</Nav.Link>
                    <Nav.Link style={{color:'white'}} href="#pricing">Destination</Nav.Link>
                    <Nav.Link style={{color:'white'}} href="#pricing">Blog</Nav.Link>
                    <Nav.Link style={{color:'white'}} href="#pricing">Contact</Nav.Link>
                </Nav>
                
                <Link to="/login"><Button className="login" variant="outline-primary">LogIn</Button></Link>
                
            </Navbar>

                <Container >
                    <Row className="bd">
                        <Col className="bazar">
                            <h1>Cox's Bazar</h1>
                            <p>The modern Cox's Bazar derives its name from Captain Hiram Cox, an officer of the British East India Company, a Superintendent of Palongkee outpost.The modern Cox's Bazar derives its name from Captain Hiram Cox, an officer of the British East India Company, a Superintendent of Palongkee outpost. To commemorate his role in refugee rehabilitation work, a market was established and named after him.</p>
                            
                        </Col>
                            

                        <Col>
                            <div className="destination">
                                <Form>
                                    <div className="form-group"> 
                                        <label htmlFor="name">Origin</label>
                                        <input style={{backgroundColor:"lightGray"}} class="form-control form-control-sm" type="text" id="name"/>
                                    </div>

                                    <div className="form-group"> 
                                        <label htmlFor="name">Destination</label>
                                        <input style={{backgroundColor:"lightGray"}} class="form-control form-control-sm" type="text" id="name"/>
                                    </div>
                                    
                                    <div className="date" style={{display:"flex"}}>
                                        <div className="from">
                                            <label htmlFor="name">From</label>
                                            <input type="date"/>
                                        </div>
                                        <div className="to">
                                            <label htmlFor="name">To</label>
                                            <input type="date"/>
                                        </div>
                                    </div>
                                    
                                    <Link to="/booking"><button>Start Booking</button></Link>
                                </Form>
                            </div>
                        </Col>

                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default CoxsBazar;