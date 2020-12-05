import React from "react";
import "./index.css";
import Products from "./Components/Products";
import "./App.css";

import Cart from "./Components/Cart";

class App extends React.Component {
  state = {
    products: [],
    cartItems: [],
    size: "",
    sort: "",
  };

  constructor() {
    super();

    this.loadProducts();
  }

  loadProducts() {
    fetch("http://localhost:3000/api/products")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ products: data.data.products });
        console.log(data.data.products);
      })
      .catch(console.log);
  }



  removeFromCart = (product) => {
    const cartItems = this.state.cartItems.slice();
    this.setState({
      cartItems: cartItems.filter((x) => x._id !== product._id),
    });
  };

  addToCart = (product) => {
    const cartItems = this.state.cartItems.slice();
    let alreadyInCart = false;
    cartItems.forEach((item) => {
      if (item._id === product._id) {
        item.count++;
        alreadyInCart = true;
      }
    });
    if (!alreadyInCart) {
      cartItems.push({ ...product, count: 1 });
    }
    this.setState({ cartItems });
  };

  createOrder() {
    fetch("http://localhost:3000/api/order")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ orders: data.data.orders });
        console.log(data.data.orders);
      })
      .catch(console.log);
  }

  render() {
    return (
      <div className="grid-container">
        <header>
          <div>
            <a href="/">Gift Basket Heaven</a>
          </div>
          <div></div>
        </header>
        <main>
          <div className="content">
            <div className="main">
              <Products
                products={this.state.products}
                addToCart={this.addToCart}
              ></Products>
            </div>

            <div className="sidebar">
              <Cart
                cartItems={this.state.cartItems}
                removeFromCart={this.removeFromCart}
                createOrder={this.createOrder}
              />
            </div>
          </div>
        </main>
        <footer>Best present ever!</footer>
      </div>
    );
  }
}

export default App;
