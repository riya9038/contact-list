// import logo from './logo.svg';
import './App.css';
import CartItem from './CartItem';
import Cart from './Cart';
import NavBar from './Navbar';
import React from 'react';
import Footer from './footer';
class App extends React.Component{
  constructor(){
    super();
    this.state= {
        products:[
        {
            title: 'Phone',
            price: 999,
            qty: 1,
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Dialog_gr_1972.jpg/1200px-Dialog_gr_1972.jpg",
            id: 1
        },
        {
            title: 'Watch',
            price: 1999,
            qty: 1,
            img: "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/13036796/2021/1/6/bb6d18c9-39c1-4632-bc4a-f452606965ef1609906124788-WROGN-Men-Silver-Toned-Analogue-Watch-WRG00048A-802160990612-1.jpg",
            id: 2
        },
        {
            title: 'Laptop',
            price: 99999,
            qty: 1,
            img: "https://m.media-amazon.com/images/I/81KoSSAwH2L._SL1500_.jpg",
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

getCount=()=>{
  const {products}= this.state;
  let count=0;
  products.forEach((product)=>{
    count+=product.qty;
  })
  return count;
}
getTotal=()=>{
  const {products}= this.state;
  let total=0;
  products.forEach((product)=>{
    total+=product.price*product.qty;
  })
  return total;
}

render() {
  const {products}= this.state;
  return (
    <div className="App">
      <NavBar count={this.getCount()}/>
      <Cart 
        products={products}
        OnIncreaseQuantity={this.onHandleIncreaseQuantity}
        OnDecreaseQuantity={this.onHandleDecreaseQuantity}
        OnDeleteProduct={this.OnHandleDeleteProduct}/>
      <Footer totalPrice={this.getTotal()}/>

    </div>
  );
}
}

export default App;
