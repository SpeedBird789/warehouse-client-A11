import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const InventoryDetail = () => {
    const { id } = useParams();
    const [inventory, setInventory] = useState({}); 

    useEffect(()=>{
        const url = `http://localhost:5000/inventory/${id}`;

        fetch(url)
        .then(res => res.json())
        .then(data => setInventory(data));
    }, [])


    

    return (
        <div className='text-center mt-3'>
            <h2>Inventory Logbook:</h2>
            <img src={inventory.img} alt="" />
            <h3>Id: {inventory._id}</h3>
            <h3>Name: {inventory.name}</h3>
            <h4>Description: {inventory.description}</h4>
            <h4>Price: £{inventory.price} </h4>
            <h4>Quantity: {inventory.quantity}</h4>
            <h4>Supplier: {inventory.supplier}</h4>
            <h4>Sold: {inventory.sold}</h4>
           <button className='btn btn-danger'>Delivered</button>
            <div>
            <Link to='/manage'>
                <button className='btn btn-link text-decoration-none'>Manage Inventories</button>
            </Link>
            </div>
        </div>
    );
};

export default InventoryDetail;