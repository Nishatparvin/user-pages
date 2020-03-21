import React, { useState } from 'react';
import fakeData from '../../fakeData/user';
import './FetchUser.css';
import User from '../User/User';
import Add from '../AddMember/Add';
const Data = () => {
    const first10=fakeData.slice(0,10);
    //console.log(first10);
   // const [products,setProducts]=useState(first10)
    const [users,setUsers]=useState(first10);
    const [add,setAdd]=useState([]);

    const handleAddMember=(user)=>{
        console.log("added",user);
        const newAdd=[...add,user];
        setAdd(newAdd);
    }

    return (
        <div className="data-container">
            <div className="user-container">
                    {
                        users.map(users=> <User
                            handleAddMember={handleAddMember}
                            user={users}></User>)
                    }
            </div>
            <div className="add-container">
                    <Add add={add}></Add>
            </div>
        </div>
    );
};

export default Data;