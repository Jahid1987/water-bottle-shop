import PropTypes from "prop-types";
import "./CartItem.css";
const CartItem = ({ item, deleteCartItem }) => {
  const { id, img, name, price } = item;

  return (
    <>
      <div onClick={() => deleteCartItem(id)} className="cart-item">
        <div className="img">
          <img src={img} alt="" />
        </div>
        <h3>{name}</h3>
        <p>{price}</p>
      </div>
    </>
  );
};
CartItem.propTypes = {
  item: PropTypes.object,
  deleteCartItem: PropTypes.func.isRequired,
};
export default CartItem;
