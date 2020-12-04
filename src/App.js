import React from "react";
import "./index.css";

import Filter from "./Components/Filter";
import Products from "./Components/Products";
import data from "./data.json";

import Navbar from "./Components/Navbar/Navbar";
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
    // this.state = {
    //   products: this.loadProducts(),
    //   cartItems: localStorage.getItem("cartItems")
    //     ? JSON.parse(localStorage.getItem("cartItems"))
    //     : [],
    //   size: "",
    //   sort: "",
    // };
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

  filterProducts = (event) => {
    // impliment
    //console.log(event.target.value);
    if (event.target.value === "") {
      this.setState({ size: event.target.value, products: data.products });
    } else {
      this.setState({
        size: event.target.value,
        products: data.products.filter(
          (product) => product.availableSizes.indexOf(event.target.value) >= 0
        ),
      });
    }
  };

  createOrder = (order) => {
    alert("Need to save order for " + order.name);
  };
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
          <div>
            <a href="/">Gift Basket Heaven</a>
          </div>
          <div>
            <Navbar />
          </div>
        </header>
        <main>
          <div className="content">
            <div className="main">
              <Filter
                count={this.state.products.length}
                size={this.state.size}
                sort={this.state.sort}
                filterProducts={this.filterProducts}
                sortProducts={this.sortProducts}
              ></Filter>

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
