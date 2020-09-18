import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import Rectangle from '../../Image/Photos/Rectangle.png';
import Logo from '../../Image/Logo.png';
import Sreemongol from '../../Image/Photos/Sreemongol.png';
import sundorbon from '../../Image/Photos/sundorbon.png';
import {Navbar,Nav,Button,Container,Row,Col}  from 'react-bootstrap';

const Home = () => {
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
                            <p>The modern Cox's Bazar derives its name from Captain Hiram Cox, an officer of the British East India Company, a Superintendent of Palongkee outpost.South of town, the tropical rainforest of Himchari National Park has waterfalls and many birds.</p>
                            <Link to="/booking"><button className="btn">Booking</button></Link> 
                        </Col>

                            <a className="card" href="/coxsbazar">
                                 <Col style={{ backgroundImage: `url(${Rectangle})` }} >
                                        <h4>cox's bazar</h4>
                                    
                                </Col>
                            </a>

                            <a  className="card" href="/sreemongol">
                                <Col style={{ backgroundImage: `url(${Sreemongol})` }}>
                                    <h4>Sreemongol</h4>
                                </Col>
                            </a>
                            <a  className="card" href="/sundorbon">
                                <Col style={{ backgroundImage: `url(${sundorbon})` }}>
                                    <h4>sundorbon</h4>
                                </Col>
                            </a>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Home;