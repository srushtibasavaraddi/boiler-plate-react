import React from 'react';
import moment from 'moment';

const StudComponent = ({firstName,lastName,fatherName,motherName,grade,address,phoneNo,createdAt,gender})=>(
    
        <div class="col-sm-7 col-md-6">
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">{firstName} {lastName}</h3>
                </div>

                <div class="card-body">
                    <p class="card-text">Date submitted: {moment(createdAt).format('L')} </p>
                    <p class="card-text">Father's Name: {fatherName}</p>
                    <p class="card-text">Mothers's Name: {motherName}</p>
                    <p class="card-text">Class: {grade}</p>
                    <p class="card-text">Gender: {gender}</p>
                    <p class="card-text">Phone: {phoneNo}</p>
                    <p class="card-text">Address: {address}</p>
                   
                                
                </div>
            </div>
        </div>
        
        
    
);

export default StudComponent;
