import React, { useContext, useState } from 'react';
import * as firebase from "firebase/app";
import './Login.css';
import "firebase/auth";
import { Link } from 'react-router-dom';
import Logo from '../../Image/Logo.png';
import google from '../../Image/Icon/google.png';
import fb from '../../Image/Icon/fb.png'
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import {Navbar,Container,Nav,Row,Col,Button}  from 'react-bootstrap';

const Login = () => {
    const [newUser, setNewUser] = useState(false);

    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        error: '',
        success: false
      })


    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    if(firebase.apps.length ===0) {
        firebase.initializeApp(firebaseConfig);
    }
    

    const handleGoogleSignIn = () => {
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(googleProvider).then(function(result) {
            
            const {displayName, email} = result.user;
            const signInUser = {name: displayName, email};
            setLoggedInUser(signInUser);
            history.replace(from);
            // ...
          }).catch(function(error) {
            
            const errorMessage = error.message;
            console.log(errorMessage);
           
          });
    }



    const handleChange = (e) => {
        let isFieldValid = true;
        if(e.target.name === 'email'){
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
        }
        if(e.target.name === 'password'){
            const isPasswordValid = e.target.value.length > 6;
            const passwordHasNumber = /\d{1}/.test(e.target.value);
            isFieldValid = isPasswordValid && passwordHasNumber;
        }
        if(isFieldValid){
            const newUserInfo = {...user};
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }
    }

    const handleSubmit = (e) => {
        // console.log(user.email, user.password);
        if(user.email && user.password){
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            .then( res => {
                const newUserInfo = {...user};
                newUserInfo.error = '';
                newUserInfo.success = true;
                setUser(newUserInfo);
            })
            .catch(error => {
                // Handle Errors here.
                const newUserInfo = {...user};
                newUserInfo.error = error.message;
                newUserInfo.success = false;
                setUser(newUserInfo);
                // ...
              });
        }

                

        if(!newUser &&  user.email && user.password){
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
            .then(res => {
              const newUserInfo = {...user};
              newUserInfo.error = '';
              newUserInfo.success = true;
              setUser(newUserInfo);
            })
            .catch(function(error) {
              // Handle Errors here.
              const newUserInfo = {...user};
              newUserInfo.error = error.message;
              newUserInfo.success = false;
              setUser(newUserInfo);
            });
          }
      
        
        e.preventDefault();
    }

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
                    
                </Nav>
                <Link to="/login"><Button className="login" variant="outline-primary">LogIn</Button></Link>
                
            </Navbar>

            <div className="account">
                <h3>Create an account</h3>
                {/* <input type="checkbox" name="newUser" id=""/> */}
                <form onSubmit={handleSubmit}>
                    <input type="text" name="first name" onBlur={handleChange} placeholder="First Name" required/>
                    <br/>
                    <input type="text" name="last name" onBlur={handleChange} placeholder="Last Name" required/>
                    <br/>
                    <input type="text" name="email" onBlur={handleChange} placeholder="UserName or Email" required/>
                    <br/>
                    <input type="password" name="password" onBlur={handleChange} placeholder="Password" required/>
                    <br/>
                    <input type="password" name="" placeholder="Conform Password"/>
                    <br/>
                    <input to="/booking" className="btn" type="submit" value="create an account"/>
                </form>
                <p style={{color:"red"}}>{user.error}</p>
                {user.success && <p style={{color:'green'}}>User {newUser ? 'Created' : 'Logged IN'} Successfully</p>}
                <h6>Already have an account? <a href="/loginhere">Login</a></h6>
            </div>

            

            <div className="other">
                <div>
                    <img src={fb} alt=""/>
                    <button>Continue with Facebook</button>
                </div>
                
                <br/>
                <div>
                    <img src={google} alt=""/>
                    <button onClick={handleGoogleSignIn}>Continue with Google</button>
                </div>
                
            </div>
        </div>
    );
};

export default Login;