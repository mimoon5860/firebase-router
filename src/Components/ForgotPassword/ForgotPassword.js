import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
    return (
        <div>
            <Form className='mx-auto w-25 text-white mt-5 border p-4 rounded'>
                <h2>Lost Your Password?</h2>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Enter your email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Reset Password
                </Button>
                <Link to='/login' className='ms-5'>Back to login</Link>
            </Form>
        </div>
    );
};

export default ForgotPassword;