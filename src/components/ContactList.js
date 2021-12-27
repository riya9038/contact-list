import React from 'react';
import Users from './Users'

//returns the container that wraps the list of users from the fetched resource
const ContactList=(props)=>{
    
    const {users,OnHandleDeleteUser,updateUser}= props;
     return (
        <div className="container">
        {users.map((user)=>{
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
