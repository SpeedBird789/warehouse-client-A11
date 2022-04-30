import React from 'react';
import { Link, useParams } from 'react-router-dom';

const InventoryDetail = () => {
const {id} = useParams();
    return (
        <div className='text-center mt-3'>
            <h2>Welcome to detail: {id}</h2>

            <Link to='/manage'>
            <button className='btn btn-link text-decoration-none'>Manage Inventories</button>
            </Link>
        </div>
    );
};

export default InventoryDetail;