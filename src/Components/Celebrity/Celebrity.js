import React from 'react';
import './Celebrity.css'

const Celebrity = (props) => {
    const {name,img,phone,username,email,earning}=props.celebrity;
    return (
        <div className="celebrity">
            <img className="img" src={img} alt=""/>
            <h1>{name}</h1>
            <h3>{username}</h3>
            <h3>{email}</h3>
            <h4>{phone}</h4>
            <h4>{earning}</h4>
            <button onClick={()=>props.handleClick(props.celebrity)}>Add Friend</button>
        </div>
    );
};

export default Celebrity;