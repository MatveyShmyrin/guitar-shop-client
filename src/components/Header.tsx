import React from 'react';
import {AppBar, Toolbar, Button, Typography} from "@mui/material";
import {Nav, Navbar, NavDropdown} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import {Link} from "react-router-dom"
import styles from "../styles/Header.module.css"

const Header = () => {
    return (
            <Navbar collapseOnSelect expand="lg" variant='light' bg='light' fixed='top'>
                <Container>
                    <Link to ="/">
                        <img width={'170px'} height={'60px'} src = {'/img/Fender_logo.png'} style={{marginTop: "5px"}} />
                    </Link>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto"></Nav>
                        <div>
                            <Nav style={{marginTop: "5px"}}>
                                <div><Nav.Link><Link to="/" style={{ color: 'black',  textDecoration: "none" }}>Home</Link></Nav.Link></div>
                                <div><Nav.Link><Link to="/catalog" style={{ color: 'black',  textDecoration: "none" }}>Catalog</Link></Nav.Link></div>
                                <div><Nav.Link><Link to="/about" style={{ color: 'black',  textDecoration: "none" }}>About Us</Link></Nav.Link></div>
                                <div><Nav.Link><Link to="/contacts" style={{ color: 'black',  textDecoration: "none" }}>Contacts</Link></Nav.Link></div>
                                <div><Nav.Link><Link to="/auth" style={{ color: 'black',  textDecoration: "none" }}>Admin Panel</Link></Nav.Link></div>
                            </Nav>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    )
};

export default Header;