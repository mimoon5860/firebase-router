import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UseFirebase from '../../useFirebase/useFirebase';
import { getAuth, signOut } from "firebase/auth";

const Header = () => {
    const { user } = UseFirebase();
    console.log(user)

    const handleLogOut = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            console.log(error)
        });
        window.location.reload();
    }
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href='/'>Firebase Auth</Navbar.Brand>
                    <Nav className="me-auto d-flex gap-3">
                        <Link className=' text-decoration-none text-success fw-bold' to='/home'>Home</Link>
                        {user.email ?
                            <button onClick={handleLogOut} className=' text-decoration-none text-success fw-bold'>Log out</button> :
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