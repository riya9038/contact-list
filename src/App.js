// import logo from './logo.svg';
import './App.css';
import CartItem from './CartItem';
import Cart from './Cart';
import NavBar from './Navbar';
import React from 'react';
import Footer from './footer';
import firebase from 'firebase/app';
// import firebase from 'firebase';
class App extends React.Component{
  constructor(){
    super();
    this.state= {
        products:[],
        loading: true
    }
}

componentDidMount(){
  firebase
  .firestore()
  .collection('Products')
  // .where('price','==',999)
  // .orderBy('price','desc')
  .onSnapshot((snapshot)=>{
    console.log('snapshot',snapshot);
    snapshot.docs.map((doc)=>{
      console.log(doc.data());
    })
    const products= snapshot.docs.map((doc)=>{
      const data= doc.data();
      data['id']=doc.id;
      return data;
    })
  
    this.setState({
      products,
      loading: false
    })
  })
}
onHandleIncreaseQuantity=(product)=>{
    console.log('Increase the quantity of',product);
    const {products}= this.state;
    const index= products.indexOf(product);
    // products[index].qty+=1;

    // this.setState({
    //     products:products
    // });
    const docRef= firebase.firestore().collection('Products').doc(products[index].id);
    docRef.update({
      qty: products[index].qty + 1
    }).then(()=>{
      console.log('Updated successfully');
    }).catch((err)=>{
      console.log('error',err);
    })

}
onHandleDecreaseQuantity=(product)=>{
    console.log('Decrease the quantity of',product);
    const {products}= this.state;
    const index= products.indexOf(product);
    // {if(products[index].qty>0)
    // products[index].qty-=1;
    // }

    // this.setState({
    //     products:products
    // });
    const docRef= firebase.firestore().collection('Products').doc(products[index].id);
    docRef.update({
      qty: products[index].qty - 1
    }).then(()=>{
      console.log('Updated successfully');
    }).catch((err)=>{
      console.log('error',err);
    })

}
OnHandleDeleteProduct=(id)=>{
    console.log('Deleted');
    const {products}= this.state;
    // const items= products.filter((item)=> item.id!==id);
    // this.setState({
    //     products:items
    // });
    const docRef= firebase.firestore().collection('Products').doc(id);
    docRef.delete()
    .then(()=>{
      console.log('Deleted successfully');
    }).catch((err)=>{
      console.log('error',err);
    })

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
addProduct=()=>{
  firebase.
  firestore()
  .collection('Products')
  .add({
    title:'watch',
    price: 99999,
    qty: 6,
    img:"https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/13036796/2021/1/6/bb6d18c9-39c1-4632-bc4a-f452606965ef1609906124788-WROGN-Men-Silver-Toned-Analogue-Watch-WRG00048A-802160990612-1.jpg"
  }).then((docRef)=>{
    console.log("Product has been added",docRef);
  }).catch((error)=>{
    console.log('error',error);
  })
}
render() {
  const {products, loading}= this.state;
  return (
    <div className="App">
      <NavBar count={this.getCount()}
      addProduct={this.addProduct}/>
      
      <Cart 
        products={products}
        OnIncreaseQuantity={this.onHandleIncreaseQuantity}
        OnDecreaseQuantity={this.onHandleDecreaseQuantity}
        OnDeleteProduct={this.OnHandleDeleteProduct}/>
        {loading && <h1>loading products...</h1>}
      <Footer totalPrice={this.getTotal()}/>
    
    </div>
  );
}
}

export default App;
