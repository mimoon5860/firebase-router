import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href='/'>Firebase Auth</Navbar.Brand>
                    <Nav className="me-auto d-flex gap-3">
                        <Link className=' text-decoration-none text-success fw-bold' to='/home'>Home</Link>
                        <Link className=' text-decoration-none text-success fw-bold' to='/signup'>Sign up</Link>
                        <Link className=' text-decoration-none text-success fw-bold' to='/login'>Login</Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;