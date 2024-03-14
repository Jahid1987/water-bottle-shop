function getStoredCart() {
  const storedCart = localStorage.getItem("cart");
  if (storedCart) {
    return JSON.parse(storedCart);
  }
  return [];
}

function setCartInLocalStorage(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function saveCartInLocalStorage(id) {
  const cart = getStoredCart();
  cart.push(id);
  setCartInLocalStorage(cart);
}

function deleteFromLocalStorage(id) {
  const cart = getStoredCart();
  const newCart = cart.filter((item) => item !== id);
  setCartInLocalStorage(newCart);
}

export { getStoredCart, saveCartInLocalStorage, deleteFromLocalStorage };
