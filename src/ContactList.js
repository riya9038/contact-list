import React from 'react';
import Users from './Users'
const ContactList=(props)=>{
    
    const {users,OnHandleDeleteUser,updateUser}= props;
     return (
         <div className="cart">
         {/* <h1> Cart </h1> */}
        {users.map((user)=>{
            // console.log("product",product);
        return(
            <Users 
            user={user} 
            key={user.id}
            updateUser={updateUser}
            OnHandleDeleteUser={OnHandleDeleteUser}/> 
        )}
        )}
         </div>
     )   

}
export default ContactList;
