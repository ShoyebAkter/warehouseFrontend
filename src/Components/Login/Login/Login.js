import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useRef } from 'react';
import {Button, Form } from 'react-bootstrap'
import { Link} from 'react-router-dom';
import PageTitle from '../PageTitle/PageTitle';

const Login = () => {
    const emailRef=useRef('');
    const passwordRef=useRef('');
    
    const handleSubmit = async event=>{
        const email=emailRef.current.value;
        const password=passwordRef.current.value;

        await signInWithEmailAndPassword(email,password);
    }
    return (
        <div className='container w-50 mx-auto'>
            <PageTitle title="Login"></PageTitle>
            <h2 className='text-primary text-center mt-2'>Please Login</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Button variant="primary w-50 mx-auto d-block mb-2" type="submit">
                    Login
                </Button>
            </Form>
            
            <p>New to Genius Car? <Link to="/register" className='text-primary pe-auto text-decoration-none' >Please Register</Link> </p>
            <p>Forget Password? <button className='btn btn-link text-primary pe-auto text-decoration-none' >Reset Password</button> </p>
           
            
        </div>
    );
};

export default Login;