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

export { getStoredCart, saveCartInLocalStorage };
