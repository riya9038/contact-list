import React from 'react';

const NavBar=(props)=>{
    return(
        <div style={styles.nav}>
            
            <div style={styles.cartName}> TechCart</div>
            
            <div style={styles.cartBox}>
                
                <button onClick={props.addProduct}>Add a product</button>
                <img style={styles.cartIcon} src="https://cdn-icons-png.flaticon.com/512/709/709640.png" 
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
        justifyContent: 'space-between'
    },
    cartName:{
        marginLeft: 10,
        fontFamily: 'monospace',
        fontSize: 25,
        background: 'orange'
    },
    cartBox:{
        width:300,
        height:50,
        display:'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
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
        left: 245,
        textAlign:'center'
    }
}
export default NavBar;
