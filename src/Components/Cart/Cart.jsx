import PropTypes from "prop-types";
import Modal from "../Modal/Modal";
import CartItem from "./CartItem/CartItem";
import "./Cart.css";

const Cart = ({ cart, setShowCart, deleteCartItem }) => {
  //   console.log(setShowCart);
  return (
    <>
      <Modal setShowCart={setShowCart}>
        <div>
          <h3>
            {cart.length > 0
              ? `You have ${cart.length} items`
              : `Your cart is empty! Buy something.`}
          </h3>
          <div className="cart-item-container">
            {cart.map((item) => (
              <CartItem
                deleteCartItem={deleteCartItem}
                key={item.id}
                item={item}
              ></CartItem>
            ))}
          </div>
        </div>
      </Modal>
    </>
  );
};
Cart.propTypes = {
  cart: PropTypes.array.isRequired,
  setShowCart: PropTypes.func.isRequired,
  deleteCartItem: PropTypes.func.isRequired,
};
export default Cart;
