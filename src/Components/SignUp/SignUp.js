import React from 'react';
import { Col, Form, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState } from "react";
import useAuth from '../../hooks/useAuth'
import { useHistory } from 'react-router';



const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState('');
    const { user, signUpWithEmail } = useAuth();
    const history = useHistory();

    const handleSignup = (e) => {
        e.preventDefault();
        signUpWithEmail(email, password)
            .then((userCredential) => {
                history.push('./home')
                setError("")
            }).catch((error) => {
                setError(error.message)
            });

    }
    console.log(user)
    return (
        <div>
            <Form className='mx-auto w-50 text-white mt-5 border p-4 rounded' onSubmit={handleSignup}>
                <h3>Please Sign up</h3>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control onBlur={(e) => setEmail(e.target.value)} type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onBlur={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Name</Form.Label>
                    <Form.Control placeholder="Md Sabbir Khan" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress2">
                    <Form.Label>Address</Form.Label>
                    <Form.Control placeholder="Dhaka,Bangladesh" />
                </Form.Group>



                <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                    {error && < small className='text-danger my-4'>Email Already in Use</small>}

                </Form.Group>
                <Form.Group className="mb-3 d-flex justify-content-between" id="formGridCheckbox">
                    <div>
                        <Button variant="primary" type="submit">
                            Sign up
                        </Button>
                    </div>
                    <Link to='/login'>
                        <Button variant="primary" size="sm">
                            Already Sign up?
                        </Button>
                    </Link>
                </Form.Group>
            </Form>
        </div>
    );
};

export default SignUp;