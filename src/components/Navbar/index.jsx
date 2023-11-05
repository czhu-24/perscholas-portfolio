import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';

import 'bootstrap/dist/css/bootstrap.min.css';

const NavigationBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Navbar.Brand href="/">Cynthia Zhu</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link as={HashLink} to="/#aboutme">
                        About Me
                    </Nav.Link>
                    <Nav.Link as={HashLink} to="/#projects">
                        Projects
                    </Nav.Link>
                    <Nav.Link href="https://drive.google.com/file/d/1MEJ81ntSPA5xekKEpM16pwtKqqRFzz-p/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                        Resume
                    </Nav.Link>
                    <Nav.Link as={HashLink} to="/#contactme">
                        Contact Me
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavigationBar;
