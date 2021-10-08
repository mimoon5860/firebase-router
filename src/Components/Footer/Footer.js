import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import img from '../../logo.svg'

const Footer = () => {
    return (
        <div>
            <Navbar bg="dark">
                <Container>
                    <Navbar.Brand className='d-flex'>
                        <img
                            src={img}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                        <p className='text-white'>THIS IS FOOTER</p>
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </div>
    );
};

export default Footer;