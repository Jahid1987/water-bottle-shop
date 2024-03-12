import PropTypes from "prop-types";
import "./Button.css";
const Button = ({ bottle, setCart, children }) => {
  return (
    <>
      <button onClick={() => setCart(bottle)} className="btn">
        {children}
      </button>
    </>
  );
};
Button.propTypes = {
  bottle: PropTypes.object,
  setCart: PropTypes.func,
  children: PropTypes.string,
};
export default Button;
