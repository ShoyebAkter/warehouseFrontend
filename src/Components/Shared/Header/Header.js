import React from 'react';
import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap'
import {useAuthState} from 'react-firebase-hooks/auth'
import auth from '../../../../firebase.init'
import logo from '../../../image/banner/logo192.png'
import {Link} from 'react-router-dom'
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user]=useAuthState(auth);

    const handleSignOut=()=>{
        signOut(auth);
    }
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to='/'>
                        <img src={logo} height={30} alt=''></img>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="home">Home</Nav.Link>
                            <Nav.Link as={Link} to="blogs">Blogs</Nav.Link>
                        </Nav>
                        
                        <Nav>
                            <Nav.Link as={Link} to="about">About</Nav.Link>
                            {
                                user && <>
                                <Nav.Link as={Link} to="addcars">AddCars</Nav.Link>
                                <Nav.Link as={Link} to="manage">ManageInventory</Nav.Link>
                                <Nav.Link as={Link} to="myitems">MyItems</Nav.Link>
                                </>
                            }
                            {
                                user ?
                                    <button className='btn btn-link text-white text-decoration-none' onClick={handleSignOut}>sign out</button>
                                :
                                <Nav.Link as={Link} to="login">
                                Login
                            </Nav.Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;