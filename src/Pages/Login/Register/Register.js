import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import {useCreateUserWithEmailAndPassword, useUpdateProfile} from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';


const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);


    const emailRef = useRef('');
    const passwordRef = useRef('');
    const nameRef = useRef('');
    const navigate = useNavigate();

    const handleRegister = async (event) => {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({displayName: name});
        console.log('Updated profile');
        navigate('/home');
    }

    if(loading || updating){
        return <Loading></Loading>
    }

    if(user){
        console.log('user', user);
    }

    const navigateLogin = event =>{
        navigate('/login');
    }


    return (
        <div className='container w-50 mx-auto'>
        <h2 className='mt-5 text-center'>Please Register</h2>
        <Form onSubmit={handleRegister}>

            <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Name</Form.Label>
                <Form.Control ref={nameRef} type="text" placeholder="Your Name" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>

            <Button variant="info" type="submit">
                Register
            </Button>
        </Form>
        <p>Already Registered? <Link to="/login" className='text-danger pe-auto text-decoration-none' onClick={navigateLogin}>Login</Link></p>
        <SocialLogin></SocialLogin>
    </div>
    );
};

export default Register;