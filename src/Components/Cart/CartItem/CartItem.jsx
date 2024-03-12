import PropTypes from "prop-types";
const CartItem = ({ item }) => {
  console.log(typeof item);
  return (
    <>
      <div className="cart-item">
        <h3>item</h3>
      </div>
    </>
  );
};
CartItem.propTypes = {
  item: PropTypes.object,
  setShowCart: PropTypes.func.isRequired,
};
export default CartItem;
