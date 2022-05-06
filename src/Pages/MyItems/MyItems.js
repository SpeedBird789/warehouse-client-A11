import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { set } from 'react-hook-form';

const MyItems = () => {
    const [myItems, setMyItems] = useState([]);

    useEffect(()=>{
        const getMyItems = async() =>{
            const url = `https://safe-savannah-72930.herokuapp.com/myitems`;
            const {data} = await axios.get(url);
            setMyItems(data);
        }
        getMyItems();

    },[])


    return (
        <div style={{minHeight: '65vh'}}>
            <h2 className='text-center mt-3'>My Items: {myItems.length} </h2>
        </div>
    );
};

export default MyItems;