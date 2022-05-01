import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate()
    const location = useLocation();
    let from = location.state?.from?.pathname || '/';
    let errorElement;

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    if (loading || sending){
        return <Loading></Loading>
    }

    // Redirecting the user to it's previous location
    if(user){
        navigate(from, {replace: true});
    }

    if (error){
        errorElement = <p className='text-danger mt-2'>Error: {error?.message}</p>
    }

   const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);
    }

    const navigateRegister = event =>{
        navigate('/register');
    }

    // Sending Reset Password Toast
    const resetPassword = async() =>{
            const email = emailRef.current.value;
            if(email){
                await sendPasswordResetEmail(email);
                toast('Email Sent'); 
            }
            else{
                toast('Enter your email please');
            }
    }

    return (
        <div className='container w-50 mx-auto'>
            <h2 className='mt-5 text-center'>Please Login</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                 
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="info" type="submit">
                    Login
                </Button>
            </Form>
            {errorElement}
            <p>New to Continental Warehouse? <Link to="/register" className='text-danger pe-auto text-decoration-none' onClick={navigateRegister}>Register</Link></p>
            <p>Forgot Password? <button className='btn btn-link text-danger pe-auto text-decoration-none' onClick={resetPassword}>Reset Password</button></p>
            <SocialLogin></SocialLogin>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Login;