import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const TopBar = () => {
    return (
        <>
           <Navbar bg="dark" variant="dark" expand="lg">
                <Container fluid>
                    <h6>Dummy data</h6>
                    <Nav className="ms-auto">
                        <LinkContainer to="/">
                            <Nav.Link>Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/about">
                            <Nav.Link>About Us</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/contact">
                            <Nav.Link>Contact Us</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/policy">
                            <Nav.Link>Terms & Policy</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Container>
            </Navbar> 
        </>
    );
};

export default TopBar;