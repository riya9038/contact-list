import React from 'react';

const CartItem=(props)=>{

        const{title, price, qty}= props.product;
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} src={props.product.img} />
                </div>
                <div className="right-block">
                    <div style={ { fontSize: 25 } }> {title} </div>
                    <div style={ { color: 'grey' } }> Rs {price} </div>
                    <div style={ { color: 'grey' } }> Qty: {qty} </div>
                    <div className="cart-item-action">
                        <img className="action-button" 
                        src="https://cdn-icons.flaticon.com/png/512/3303/premium/3303779.png?token=exp=1637828176~hmac=011f65aa259bf87770c24ab1ee70c81a" 
                        alt="increase" onClick={()=> props.OnIncreaseQuantity(props.product)} />

                        <img className="action-button" src="https://cdn-icons-png.flaticon.com/512/1665/1665765.png" 
                        alt="decrease" onClick={()=> props.OnDecreaseQuantity(props.product)} />

                        <img className="action-button" src="https://cdn-icons.flaticon.com/png/512/484/premium/484560.png?token=exp=1637828374~hmac=b8c1f1b805fc3ed3815ba0d00544f0f4" 
                        alt="delete" onClick={()=> props.OnDeleteProduct(props.product.id)} />
                    </div>
                </div>

            </div>
        )
    };
const styles={
    image:{
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#ccc'

    }
}
export default CartItem;
