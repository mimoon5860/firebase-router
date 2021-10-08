import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const { user, LogOut } = useAuth();

    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href='/'>Firebase Auth</Navbar.Brand>
                    <Nav className="me-auto d-flex gap-3">
                        <Link className=' text-decoration-none text-success fw-bold' to='/home'>Home</Link>
                        {user.email ?
                            <button onClick={LogOut} className=' text-decoration-none text-success fw-bold'>Log out</button> :
                            <div className='d-flex gap-3'>
                                <Link className=' text-decoration-none text-success fw-bold' to='/signup'>Sign up</Link>
                                <Link className=' text-decoration-none text-success fw-bold' to='/login'>Login</Link>
                            </div>}
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;