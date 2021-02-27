import React from 'react';
import './Celebrity.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const Celebrity = (props) => {
    const {name,img,phone,username,email,earning}=props.celebrity;
    return (
        <div className="celebrity">
            <img className="img" src={img} alt=""/>
            <h2>{name}</h2>
            <h5>@{username}</h5>
            <h5>{email}</h5>
            <h5>Mob: {phone}</h5>
            <h5>Earning: {earning}</h5>
            <button onClick={()=>props.handleClick(props.celebrity)}><FontAwesomeIcon icon={faPlus} /></button>
        </div>
    );
};

export default Celebrity;