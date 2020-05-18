import React from 'react';
import moment from 'moment';

const StudComponent = ({firstName,lastName,fatherName,motherName,grade,address,phoneNo,createdAt})=>(
    <div>
        <h3>Name: {firstName} {lastName}</h3>
        <p>Date submitted:{moment(createdAt).format('L')} </p>
        <p>Father's Name: {fatherName}</p>
        <p>Mothers's Name: {motherName}</p>
        <p>Class: {grade}</p>
        <p>Address: {address}</p>
        <p>Phone: {phoneNo}</p>
    </div>
);

export default StudComponent;
