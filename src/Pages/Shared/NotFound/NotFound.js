import React from 'react';
import notFound404 from '../../../images/notFound404.jpg';

const NotFound = () => {
    return (
        <div className='container mt-2'>
            <h2 className='text-center mb-3'>Oops! Looks like you're in the wrong place :(</h2>
            <img className='w-100' src={notFound404} alt="" />
        </div>
        // abcd
    );
};

export default NotFound;