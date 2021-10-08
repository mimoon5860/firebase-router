import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { user, signInWithGoogle } = useAuth();
    const handleGoogleSignIn = () => {
        signInWithGoogle();
    }
    return (
        <div>
            {!user.email ? <div className='mx-auto w-25 text-white mt-5 border p-4 rounded'>
                <h2>Please Login</h2>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                    <Link to='/forgotpassword' className='ms-5'>Lost Password?</Link>
                    <Link to='/signup' className='ms-5'>New user?</Link>
                </Form.Group>
                <button onClick={handleGoogleSignIn}>Login with Google</button>
                <button>Login with Facebook</button>
            </div> : <div className='text-white text-center'> <h1 className='text-success'>Login Successfull</h1>
                <h3>You Already Logged in</h3>
            </div>}



        </div>
    );
};

export default Login;