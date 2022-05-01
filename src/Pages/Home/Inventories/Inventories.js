import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Inventory from '../Inventory/Inventory';
import './Inventories.css';

const Inventories = () => {

    const [inventories, setInventories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/inventory')
            .then(res => res.json())
            .then(data => setInventories(data));
    }, [])


    return (
        <div id='inventories' className='container'>
            <h1 className='mt-5 mb-3 inventories-title'>Inventories: </h1>
            <div className='inventories-container'>
                {
                    inventories.slice(0,6).map(inventory => <Inventory key={inventory._id} inventory={inventory}></Inventory>)
                }
            </div>
            <div className='text-center mt-4'>
                <Link to='/manage'>
                    <button className='btn btn-link text-decoration-none'>Manage Inventories</button>
                </Link>
            </div>
        </div>
    );
};

export default Inventories;