import React from 'react';
import CartItem from './CartItem';
class Cart extends React.Component{
    constructor(){
        super();
        this.state= {
            products:[
            {
                title: 'Phone',
                price: 999,
                qty: 1,
                img: "",
                id: 1
            },
            {
                title: 'Watch',
                price: 1999,
                qty: 1,
                img: "",
                id: 2
            },
            {
                title: 'Laptop',
                price: 99999,
                qty: 1,
                img: "",
                id: 3
            }
        ]
        }
    }
    onHandleIncreaseQuantity=(product)=>{
        console.log('Increase the quantity of',product);
        const {products}= this.state;
        const index= products.indexOf(product);
        products[index].qty+=1;

        this.setState({
            products:products
        });

    }
    onHandleDecreaseQuantity=(product)=>{
        console.log('Decrease the quantity of',product);
        const {products}= this.state;
        const index= products.indexOf(product);
        {if(products[index].qty>0)
        products[index].qty-=1;
        }

        this.setState({
            products:products
        });

    }
    OnHandleDeleteProduct=(id)=>{
        console.log('Deleted');
        const {products}= this.state;
        const items= products.filter((item)=> item.id!==id);
        this.setState({
            products:items
        });

    }

    render() {
        const {products}= this.state;
     return (
         <div className="cart">
         {/* <h1> Cart </h1> */}
        {products.map((product)=>{
        return(
            <CartItem 
            product={product} 
            key={product.id}
            OnIncreaseQuantity={this.onHandleIncreaseQuantity}
            OnDecreaseQuantity={this.onHandleDecreaseQuantity}
            OnDeleteProduct={this.OnHandleDeleteProduct}
            /> 
        )}
        )}
         
         </div>
     )   
}

}
export default Cart;
