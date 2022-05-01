import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () =>{
        signOut(auth);
    }

    return (
        <Navbar collapseOnSelect expand="lg" sticky='top' bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/">Continental Warehouse</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="home#inventories">Inventories</Nav.Link>
                        <Nav.Link href="home#hubs">Hubs</Nav.Link>
                        <Nav.Link as={Link} to="blogs">Blogs</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link as={Link} to="about">About</Nav.Link>
                        {
                            user && <>
                            <Nav.Link as={Link} to="addinventory">Add Item</Nav.Link>
                            <Nav.Link as={Link} to="manage">Manage Items</Nav.Link>
                            
                            </>
                        }
                        {
                            user ?
                            <button className='btn btn-link text-white text-decoration-none' onClick={handleSignOut}>Sign Out</button>
                            :
                            <Nav.Link as={Link} to="login">
                            Login
                        </Nav.Link>}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;