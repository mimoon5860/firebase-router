import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { user, signInWithGoogle, signInWithEmail } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState('');
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';
    console.log(redirect_uri)

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(() => {
                history.push(redirect_uri)
            })
    }

    const handleLogin = (e) => {
        e.preventDefault();
        signInWithEmail(email, password)
            .then(() => {
                history.push(redirect_uri);
                setError("")
            })
            .catch((error) => {
                setError(error.message);
            });
    }
    console.log(email, password)
    return (
        <Form onSubmit={handleLogin}>
            {!user.email ? <div className='mx-auto w-25 text-white mt-5 border p-4 rounded'>
                {redirect_uri !== '/home' && < small className='text-danger'>You must login first</small>}
                <h2>Please Login</h2>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={(e) => setEmail(e.target.value)} type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                    {error && < small className='text-danger my-4'>Wrong Email or Password</small>}
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
            </div>
            }
        </Form >
    );
};

export default Login;