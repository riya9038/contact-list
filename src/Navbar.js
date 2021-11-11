import React from 'react';

const NavBar=(props)=>{
    return(
        <div style={styles.nav}>
            <div style={styles.cartBox}>
                <img style={styles.cartIcon} src="https://cdn-icons.flaticon.com/png/512/2207/premium/2207569.png?token=exp=1636646844~hmac=7eec1cc1ca8e87081e70c4990e56b407" 
                alt="cart-icon"></img>
                <span style={styles.count}>{props.count}</span>
            </div>
        </div>
    )
    };

const styles={
    nav:{ 
        height:70,
        background: 'blue',
        display:'flex',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    cartBox:{
        width:50,
        height:50,
        display:'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginRight: 20,
        position:'relative'
    },
    cartIcon:{
        width: 30,
        height: 30,  
    },
    count:{
        width:20,
        height:20,
        borderRadius: 50,
        background:'yellow',
        position:'absolute',
        top: 0.5,
        left: 20,
        textAlign:'center'
    }
}
export default NavBar;
