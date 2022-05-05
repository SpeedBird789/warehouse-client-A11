import React from 'react';
import { useNavigate } from 'react-router-dom';
import useInventories from '../../hooks/useInventories';


const Manage = () => {
   const [inventories, setInventories] = useInventories();
   const navigate = useNavigate();

   const handleDelete = id =>{
       const proceed = window.confirm('Are you sure you want to delete this item?')
       if(proceed){
           const url = `http://localhost:5000/inventory/${id}`;
           fetch(url, {
               method: 'DELETE'
           })
           .then(res => res.json())
           .then(data => {
               console.log(data);
               const remaining = inventories.filter(inventory => inventory._id !== id);
               setInventories(remaining);
           } )
       }
   }

    return (
        <div style={{minHeight: '69vh'}} className='w-50 mx-auto'>
            <h1 className='text-center mt-2'>Manage Your Inventory Here</h1>

            {
                inventories.map(inventory => <div key={inventory._id}>
                    <h5>{inventory.name} <button className='btn btn-danger ms-2' onClick={()=> handleDelete(inventory._id)}>Delete</button> <button className='btn btn-success' onClick={()=>navigate('/addinventory')}>Add New Item</button></h5>
                </div>)
            }
        </div>
    );
};

export default Manage;