import React from "react";
import "./index.css";
import data from "./data.json";
import Products from "./Components/Products";

import Navbar from './Components/Navbar/Navbar';
import './App.css';


import Cart from "./Components/Cart";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: data.products,
      cartItems: [],
      size: "",
      sort: "",
    };
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
  sortProducts(event) {
    const sort = event.target.value;
    console.log(event.target.value);
    this.setState((state) => ({
      sort: sort,
      products: this.state.products
        .slice()
        .sort((a, b) =>
          sort === "lowest"
            ? a.price > b.price
              ? 1
              : -1
            : sort === "highest"
            ? a.price < b.price
              ? 1
              : -1
            : a._id < b._id
            ? 1
            : -1
        ),
    }));
  }

  render() {
    return (
      <div className="grid-container">
        <header>
          <div><a href="/">Gift Basket Heaven</a></div>
          <div><Navbar /></div>

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
