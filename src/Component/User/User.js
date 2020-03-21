import React from 'react';
import './User.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlusCircle } from '@fortawesome/free-solid-svg-icons'

const User = (props) => {
   //console.log(props.user)
    const {name,email}=props.user
    return (
        <div className="user">
            <p>Name:{name} </p> 
            <p><small>Email:{email}</small></p>   
            <button className="add-btn" onClick={()=>props.handleAddMember(props.user)}><FontAwesomeIcon icon={faPlusCircle} />add member</button>
            

        </div>
    );
};

export default User;