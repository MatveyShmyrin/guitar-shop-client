import React from 'react';
import {AppBar, Toolbar, Button, Typography} from "@mui/material";
import {Nav, Navbar, NavDropdown} from "react-bootstrap";
import Container from "react-bootstrap/Container";

const Header = () => {
    return (
            <Navbar collapseOnSelect expand="lg" variant='light' bg='light' fixed='top'>
                <Container>
                    <Navbar.Brand href="/">
                        <img width={'170px'} height={'60px'} src = {'/img/Fender_logo.png'} />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        {/* eslint-disable-next-line react/jsx-no-undef */}
                        <Nav className="me-auto"></Nav>
                        <Nav>
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/catalog">Catalog</Nav.Link>
                            <Nav.Link href="/about">About Us</Nav.Link>
                            <Nav.Link href="/contacts">Contacts</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    )
};


export default Header;