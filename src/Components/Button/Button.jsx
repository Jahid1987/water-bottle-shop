import PropTypes from "prop-types";
import "./Button.css";
const Button = ({ id, setCart, children }) => {
  return (
    <>
      <button onClick={() => setCart(id)} className="btn">
        {children}
      </button>
    </>
  );
};
Button.propTypes = {
  id: PropTypes.number,
  setCart: PropTypes.func,
  children: PropTypes.string,
};
export default Button;
