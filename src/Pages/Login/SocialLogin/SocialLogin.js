import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import google from '../../../images/google.png';
import Loading from '../../Shared/Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();

    let errorElement;

    if (loading){
        return <Loading></Loading>
    }
    
    if (error){
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }

    if (user){
        navigate('/home');
    }


    return (
        <div>
            <div>
            <div className='d-flex align-items-center'>
                <div style={{height:'1px'}} className='bg-info w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{height:'1px'}} className='bg-info w-50'></div>
            </div>
            {errorElement}
            </div>
              <button onClick={() => signInWithGoogle()} 
                className='btn btn-info w-50 d-block mx-auto my-3'>
                    <img style={{width:'30px'}} src={google} alt="" />
                    <span className='px-2'>Google Sign In</span>
              </button>
        </div>
    );
};

export default SocialLogin;