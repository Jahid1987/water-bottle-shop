import { useState } from "react";
import "./App.css";
import Bottles from "./Components/Bottles/Bottles";
import Nav from "./Components/Nav/Nav";
import { useEffect } from "react";
import {
  getStoredCart,
  saveCartInLocalStorage,
} from "./utilities/localstorage";
const App = () => {
  const [bottles, setBottles] = useState([]);
  const [cart, setCart] = useState([]);

  // fetching data
  useEffect(() => {
    // fetching bottles from local data (not working)
    fetch("/bottles.json")
      .then((res) => res.json())
      .then((data) => setBottles(data));

    // // fetching data from remote api (working)
    // fetch("https://jsonplaceholder.typicode.com/posts")
    //   .then((response) => response.json())
    //   .then((data) => setBottles(data));
  }, []);

  // handling cart saved in localStorage
  useEffect(() => {
    if (bottles.length) {
      const cartIdInLocalStorage = getStoredCart();
      const cartInLocalStorage = [];
      cartIdInLocalStorage.filter((id) => {
        const bottle = bottles.find((bottle) => bottle.id === id);
        bottle && cartInLocalStorage.push(bottle);
      });
      setCart(cartInLocalStorage);
    }
  }, [bottles]);

  // handling set cart state and in local storage
  function handleSetCart(bottle) {
    setCart([...cart, bottle]);
    saveCartInLocalStorage(bottle.id);
  }
  // console.log("I am in App");
  return (
    <>
      <header>
        <Nav cart={cart}></Nav>
      </header>
      <main className="container">
        <div>
          <h3>Card items</h3>
          {cart.map((cartItem) => (
            <p key={cartItem.id}>{cartItem.name}</p>
          ))}
        </div>
        <h2>All Products</h2>
        <Bottles setCart={handleSetCart} bottles={bottles}></Bottles>
      </main>
      <footer></footer>
    </>
  );
};

export default App;
