import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { set } from 'react-hook-form';

const MyItems = () => {
    const [myItems, setMyItems] = useState([]);

    useEffect(()=>{
        const getMyItems = async() =>{
            const url = `http://localhost:5000/myitems`;
            const {data} = await axios.get(url);
            setMyItems(data);
        }
        getMyItems();

    },[])


    return (
        <div>
            <h2>My Items: {myItems.length} </h2>
        </div>
    );
};

export default MyItems;