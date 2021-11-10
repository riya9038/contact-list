import React from 'react';

class CartItem extends React.Component{
    constructor(){
        super();
        this.state= {
            title: 'Product',
            price: 999,
            qty: 1,
            img: ""
        }
    }
    increaseQuantity= () =>{console.log(this.state); this.setState({qty: this.state.qty+1} );}
    decreaseQuantity= () =>{console.log(this.state); this.setState({qty: this.state.qty-1} );}
    render() {
        const{title, price, qty}= this.state;
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} />
                </div>
                <div className="right-block">
                    <div style={ { fontSize: 25 } }> {title} </div>
                    <div style={ { color: 'grey' } }> Rs {price} </div>
                    <div style={ { color: 'grey' } }> Qty: {qty} </div>
                    <div className="cart-item-action">
                        <img className="action-button" 
                        src="https://cdn-icons.flaticon.com/png/512/3303/premium/3303893.png?token=exp=1636565766~hmac=43f1f0a9414f77a7e366d50281f97788" 
                        alt="increase" onClick={this.increaseQuantity} />

                        <img className="action-button" src="https://cdn-icons-png.flaticon.com/512/992/992683.png" alt="decrese" onClick={this.decreaseQuantity} />

                        <img className="action-button" src="https://cdn-icons-png.flaticon.com/512/1214/1214594.png" alt="delete" />
                    </div>

                </div>

            </div>
        )
    };
}

const styles={
    image:{
    height: 110,
    width: 110,
    borderRadius: 4,
    background: '#ccc'

    }
}
export default CartItem;
