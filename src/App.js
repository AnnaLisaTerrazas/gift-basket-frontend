import React from "react";
import store from "./store";
import { Provider } from "react-redux";
import Products from "./Components/Products";
import Filter from './Components/Filter';
import Cart from "./Components/Cart";
import "./index.css";
import Navbar from "./Components/Navbar/Navbar";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
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
                <Filter></Filter>
                <Products ></Products>
              </div>
              <div className="sidebar">
                <Cart />
              </div>
            </div>
          </main>
          <footer>Best present ever!</footer>
        </div>
        </Provider>
      );
    }
}

export default App;
