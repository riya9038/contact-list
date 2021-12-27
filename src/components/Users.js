import React from 'react';

//returns the user information present in the fetched data
const Users=(props)=>{

        const{name, phone, address,email,company,website}= props.user;
        return(
            <div className="contact-list">
                <div className="left-block">
                    <img style={styles.image} src="https://cdn-icons-png.flaticon.com/512/149/149071.png" />
                    <div style={ { color: 'black',paddingLeft:10} }>{name} </div>
                    <button style={ { background:'black',color:'white'}} onClick={()=> props.OnHandleDeleteUser(props.user.id)}> Delete</button>
                    <button onClick={()=> props.updateUser(props.user.id)}> Update</button>
                </div>
                <div className="right-block">
                    
                    <div className="user-info" style={ { color: 'white' } }> Address: {address.city} 
                        <div className="contact-list-action">
                            <img className="action-button" 
                            src="https://cdn-icons.flaticon.com/png/512/3437/premium/3437179.png?token=exp=1640457658~hmac=b565137bbcb79c4ea0f4e12dffa44a0c" 
                            alt="address"/>
                        </div>
                    </div>
                    <div className="user-info" style={ { color: 'white' } }> Email: {email} 
                        <div className="contact-list-action">
                            <img className="action-button" 
                            src="https://cdn-icons-png.flaticon.com/512/732/732200.png" 
                            alt="email"/>
                        </div>
                    </div>
                    <div className="user-info" style={ { color: 'white' } }> Company: {company.name} 
                        <div className="contact-list-action">
                            <img className="action-button" 
                            src="https://cdn-icons-png.flaticon.com/512/3061/3061341.png" 
                            alt="company"/>
                        </div>
                    </div>
                    <div className="user-info" style={ { color: 'white' } }> Website: {website}
                        <div className="contact-list-action">
                            <img className="action-button" 
                            src="https://cdn-icons-png.flaticon.com/512/975/975645.png" 
                            alt="website"/>
                        </div>
                    </div>
                    <div className="user-info" style={ { color: 'white'} }> Phone: {phone} 
                        <div className="contact-list-action">
                            <img className="action-button" 
                            src="https://cdn-icons-png.flaticon.com/512/724/724664.png" 
                            alt="call"/>

                            <img className="action-button" src="https://cdn-icons-png.flaticon.com/512/1041/1041916.png" 
                            alt="message" onClick={()=> props.updateUser(props.user.id)}/>
                        </div>
                    </div>
                    
                </div>

            </div>
        )
    };
const styles={
    image:{
        height: 110,
        width: 110,
        borderRadius: 50,
        boxShadow: "0.5px 0.5px 22px grey"
    }
}
export default Users;
