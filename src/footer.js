import React from 'react';

const Footer=(props)=>{
    console.log(props.totalPrice);
    return(
        <div style={styles.footer}>
                <span style={styles.total}>Total:{props.totalPrice}</span>
        </div>
    )
    };

const styles={
    footer:{ 
        height:70,
        background: 'orange',
        display:'flex',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    total:{
        marginRight:10
    }
}
export default Footer;
