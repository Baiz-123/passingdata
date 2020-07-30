import React from 'react';

const User = (props) =>  {
    return(
<div>
    <p>First Name : {props.firstname}</p>
    <p>Last Name : {props.lastname}</p>
    <p>Email ID : {props.email}</p>
    <p>Phone Number : {props.phonenumber}</p>
    <Userchild condition="working..." />

</div>
    );
}

const Userchild = (props) =>  {
    return(
<div>
    <p>Communication : {props.condition}</p>
</div>
    );
}


export default User;
