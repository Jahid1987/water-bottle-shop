import PropTypes from "prop-types";
import "./CartItem.css";
const CartItem = ({ item, deleteCartItem }) => {
  const { id, img, name, price } = item;

  return (
    <>
      <div className="cart-item">
        <div className="cart-content">
          <div className="img">
            <img src={img} alt="" />
          </div>
          <h3>{name}</h3>
          <p>﹩{price}</p>
        </div>
        <p className="cart-action" onClick={() => deleteCartItem(id)}>
          ✕
        </p>
      </div>
    </>
  );
};
CartItem.propTypes = {
  item: PropTypes.object,
  deleteCartItem: PropTypes.func.isRequired,
};
export default CartItem;
