import React from 'react';
import './Sreemongol.css';
import { Link } from 'react-router-dom';
import Rectangle from '../../Image/Photos/Rectangle.png';
import Logo from '../../Image/Logo.png';
import {Navbar,Nav,Button,Container,Row,Col,Form}  from 'react-bootstrap';

const Sreemongol = () => {
    return (
        <div style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ),url(${Rectangle})` }} className="home">
            <div className="travel">
            <Navbar bg="" variant="light">
                <Navbar.Brand className="logo" href="#home"><img src={Logo} alt=""/></Navbar.Brand>
                <input type="text" placeholder="Search Your Destination" className="search" />   
                {/* mr-sm-2 */}
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
                            <h1>Sreemongol</h1>
                            <p>It is said the name Sreemangal (or Srimangal) is named after Sri Das and Mangal Das; two brothers who settled on the banks of the Hail Haor.[2] A copper plate of Raja Marundanath from the 11th century was found in Kalapur. During an excavation at Lamua, an ancient statue of Ananta Narayan was dug out.] Pineapples from the Sreemangal area are known for their flavour and natural sweetness.[citation needed] In 2010, the Hum Hum waterfall was discovered and has attracted visitors from all over Bangladesh to Razkandi forest.</p>
                             
                        </Col>

                        <Col>
                            <div className="destination">
                                    <Form>
                                        <div className="form-group"> 
                                            <label htmlFor="name">Origin</label>
                                            <input style={{backgroundColor:"lightGray"}} class="form-control form-control-sm" type="text" id="name" placeholder=""/>
                                        </div>

                                        <div className="form-group"> 
                                            <label htmlFor="name">Destination</label>
                                            <input style={{backgroundColor:"lightGray"}} class="form-control form-control-sm" type="text" id="name" placeholder=""/>
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

export default Sreemongol;