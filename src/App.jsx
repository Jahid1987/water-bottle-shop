import { useState } from "react";
import "./App.css";
import Bottles from "./Components/Bottles/Bottles";
import Nav from "./Components/Nav/Nav";
import { useEffect } from "react";
const App = () => {
  const [bottles, setBottles] = useState([]);
  const [cart, setCart] = useState([]);
  // fetching data
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setBottles(data));
  }, []);

  return (
    <>
      <header>
        <Nav cart={cart}></Nav>
      </header>
      <main className="container">
        <Bottles setCart={setCart} bottles={bottles}></Bottles>
      </main>
      <footer></footer>
    </>
  );
};

export default App;
