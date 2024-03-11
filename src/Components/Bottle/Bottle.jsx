import PropTypes from "prop-types";
import "./Bottle.css";
const Bottle = ({ bottle, setCart }) => {
  return (
    <div className="card">
      <h3 onClick={() => setCart([2])}>{bottle.title}</h3>
    </div>
  );
};
Bottle.propTypes = {
  bottle: PropTypes.object.isRequired,
  setCart: PropTypes.func.isRequired,
};
export default Bottle;
