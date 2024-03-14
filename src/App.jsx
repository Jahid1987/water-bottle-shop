import { useState } from "react";
import "./App.css";
import Bottles from "./Components/Bottles/Bottles";
import Nav from "./Components/Nav/Nav";
import { useEffect } from "react";
import {
  deleteFromLocalStorage,
  getStoredCart,
  saveCartInLocalStorage,
} from "./utilities/localstorage";
import Cart from "./Components/Cart/Cart";
const App = () => {
  const [bottles, setBottles] = useState([]);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  // fetching data
  useEffect(() => {
    // fetching bottles from local data (not working)
    fetch("/bottles.json")
      .then((res) => res.json())
      .then((data) => setBottles(data));
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
    const isExist = cart.find((item) => item.id === bottle.id);
    if (!isExist) {
      setCart([...cart, bottle]);
      saveCartInLocalStorage(bottle.id);
    }
  }

  function deleteCartItem(id) {
    setCart(cart.filter((item) => item.id !== id));
    deleteFromLocalStorage(id);
  }
  return (
    <>
      <header>
        <Nav setShowCart={setShowCart} cart={cart}></Nav>
      </header>
      <main className="container">
        <h2>All Products</h2>
        <Bottles setCart={handleSetCart} bottles={bottles}></Bottles>
      </main>
      {showCart && (
        <Cart
          deleteCartItem={deleteCartItem}
          setShowCart={setShowCart}
          cart={cart}
        ></Cart>
      )}
      <footer></footer>
    </>
  );
};

export default App;
