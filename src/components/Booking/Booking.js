import React, { useContext } from 'react';
import './Booking.css';
import Logo from '../../Image/Logo.png'
import Rectangle26 from '../../Image/Photos/Rectangle 26.png';
import Rectangle27 from '../../Image/Photos/Rectangle 27.png';
import Rectangle28 from '../../Image/Photos/Rectangle 28.png';
import {Navbar,Container,Nav,Row,Col}  from 'react-bootstrap';
import { UserContext } from '../../App';


const Booking = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div className="full">
            <Navbar variant="light" className="booking">
                <Navbar.Brand className="logo" href="/home"><img src={Logo} alt=""/></Navbar.Brand>  
                
                <Nav className="bok">
                    <Nav.Link style={{color:'block'}} href="/home">Home</Nav.Link>
                    <Nav.Link style={{color:'block'}} href="#features">News</Nav.Link>
                    <Nav.Link style={{color:'block'}} href="#pricing">Destination</Nav.Link>
                    <Nav.Link style={{color:'block'}} href="#pricing">Blog</Nav.Link>
                    <Nav.Link style={{color:'block'}} href="#pricing">Contact</Nav.Link>
                    <p>{loggedInUser.displayName}</p>
                </Nav>
                
                
            </Navbar>

            <Container>
                <Row>
                    <Col>
                        <p>252 stays Apr 13-17 3 guests</p>
                        <h4>Stay in Cox's Bazar</h4>
                        <div style={{display:"flex"}}>
                            <div className="img">
                                <img src={Rectangle26} alt=""/>
                            </div>
                            <div className="text">
                                <h5>Light bright airy stylish apt & safe peaceful</h5>
                                <p>4 guests 2 bedrooms 2 beds 2 baths</p>
                                <p>Wif Air condition Kitchen</p>
                                <p>cancellation fex bility availiable</p>
                                <div style={{display:"flex"}}>
                                    <div>
                                        <p>4.9(20)</p>
                                    </div>

                                    <div style={{marginLeft:'12px'}}>
                                        <p>$34/night <span style={{color:'lightgray'}}>$167 total</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div style={{display:"flex"}}>
                            <div className="img">
                                <img src={Rectangle27} alt=""/>
                            </div>
                            <div className="text">
                                <h5>Apartment in Lost Panorama</h5>
                                <p>4 guests 2 bedrooms 2 beds 2 baths</p>
                                <p>Wif Air condition Kitchen</p>
                                <p>Cancellation fexibility availiable</p>
                                <div style={{display:"flex"}}>
                                    <div>
                                        <p>4.8(10)</p>
                                    </div>

                                    <div style={{marginLeft:'12px'}}>
                                        <p>$52/night <span style={{color:'lightgray'}}>$167 total</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        

                        <div style={{display:"flex"}}>
                            <div className="img">
                                <img src={Rectangle28} alt=""/>
                            </div>
                            <div className="text">
                                <h5>AR Lounge & Pool ( r& + b&b)</h5>
                                <p>4 guests 2 bedrooms 2 beds 2 baths</p>
                                <p>Wif Air condition Kitchen</p>
                                <p>Cancellation fexibility availiable</p>
                                <div style={{display:"flex"}}>
                                    <div>
                                        <p>4.9(25)</p>
                                    </div>

                                    <div style={{marginLeft:'12px'}}>
                                        <p>$44/night <span style={{color:'lightgray'}}>$167 total</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col>
                    
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Booking;