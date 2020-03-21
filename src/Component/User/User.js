import React from 'react';
import './User.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlusCircle } from '@fortawesome/free-solid-svg-icons'

const User = (props) => {
   //console.log(props.user)
    const {id,name,img,username,phone,email}=props.user
    return (
        <div className="user">

            <div className="image"> 
                <img className="img" src={img} alt=""/>
            </div>
            <div>
                <h3>{id})Name:{name} </h3> 
                <p>User Name:{username}</p>
                <p><small>Phone Number:{phone}</small></p>
                <p><small>Email:{email}</small></p>   
                <button className="add-btn" onClick={()=>props.handleAddMember(props.user)}><FontAwesomeIcon icon={faPlusCircle} />add member</button>
            </div>
            
        </div>
    );
};

export default User;