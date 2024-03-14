import PropTypes from "prop-types";
import Modal from "../Modal/Modal";
import CartItem from "./CartItem/CartItem";

const Cart = ({ cart, setShowCart, deleteCartItem }) => {
  //   console.log(setShowCart);
  return (
    <>
      <Modal setShowCart={setShowCart}>
        <div>
          <h3>Your cart</h3>
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
