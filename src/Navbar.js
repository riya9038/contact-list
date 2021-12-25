import React from 'react';

const NavBar=(props)=>{
    return(
        <div style={styles.nav}>
            
            <div className="heading" style={styles.cartName}>
                <img src="https://cdn-icons-png.flaticon.com/512/46/46646.png" alt="contact-book"></img>
                 <span>Contacts List</span></div>
            
            <div style={styles.cartBox}>
                <button className="add" onClick={props.addUser}>Add Contact</button>
                <span style={styles.count}>{props.count} Users</span>
            </div>
        </div>
    )
    };

const styles={
    nav:{ 
        height:70,
        background: 'grey',
        display:'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        boxShadow: '1px -1px 15px black inset'
    },
    cartName:{
        marginLeft: 10,
        fontFamily: 'cursive',
        fontSize: 25,
        // background: 'white'
    },
    cartBox:{
        width:300,
        height:50,
        display:'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginRight: 20,
    },
    cartIcon:{
        width: 30,
        height: 30,  
    },
    count:{
        width:80,
        height:40,
        borderRadius: 6,
        background:'orange',
        textAlign:'center',
        border: '2px solid black',
        display:'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
}
export default NavBar;
