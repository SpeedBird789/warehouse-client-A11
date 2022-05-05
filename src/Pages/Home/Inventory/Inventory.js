import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Inventory.css';

const Inventory = ({inventory}) => {
    const {_id, name, img, description, price, supplier, quantity} = inventory;
    const navigate = useNavigate();

    const navigateToInventoryDetail = id =>{
        navigate(`/inventory/${id}`);
    }

    return (
        <div className='inventory'>
            <img className='img-fluid w-100' src={img} alt="" />
            <h2>{name}</h2>
            <p>{description}</p>
            <h4>Price: £{price}</h4>
            <h5>Quantity: {quantity} </h5>
            <h4>Supplier: {supplier} </h4>
            <button onClick={()=>navigateToInventoryDetail(_id)} className='btn btn-danger'>Update</button>
        </div>
    );
};

export default Inventory;