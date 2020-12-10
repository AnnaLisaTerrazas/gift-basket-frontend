import React, { useState, useEffect } from 'react';


function App() {
  var[isEdit, setIsEdit] = useState(" ");
  var [orders, setOrders] = useState([]);
  var [order, setOrder] = useState({})

  /*
  {
    "customer": {
      "firstname": "Anna",
      "lastname": "Terrazas",
      "email": "annalisaterrazas@yahoo.com"
    },
    "product": "cupcake",
    "price": 3, 
    "address": {
      "mailingOne": "123 Lords Way",
      "mailingTwo": "",
      "city": "Zion",
      "state": "Heaven", 
      "zip": 13713
    }
  }*/

  var [customer, setCustomer] = useState({});
  var [address, setAddress] = useState({});
  var [product, setProduct] = useState("");
  var [price, setPrice] = useState(-1);

  useEffect(() => {

    getAllOrders()
  }, [])  

  const getAllOrders = async () => {
    let ordersData = await fetch("http://localhost:3000/orders/")
    let o = await ordersData.json();

    //console.log(o);

    setOrders(o.data.orders);
  }

    const handleSubmit = async (e) =>{
    e.preventDefault();
    let newOrderData = await fetch("http://localhost:3000/orders/add", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
            customer: {
              firstname: "Anna",
              lastname: "Terrazas",
              email: "annalisaterrazas@yahoo.com"
            },
          product,
            price, 
            address: {
              mailingOne: "123 Lords Way",
              mailingTwo: "",
              city: "Zion",
              state: "Heaven", 
              zip: 13713
            }
          })
    })

    let newOrder = await newOrderData.json();

    getAllOrders();
    }
  
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>Product: </label>
        <input type="text" onChange={e => setProduct(e.target.value)} />
        <label>Price: </label>
        <input type="text" onChange={e => setPrice(e.target.value)} />
        <input type="submit" />
      </form>
      {orders.map((order, idx) => {
        return(
          <div key={idx}>
            {order.customer.firstname} {order.customer.lastname} - {order.product} - {order.price}
          </div>
       )
     })} 
    </div>
  );
}

export default App;
