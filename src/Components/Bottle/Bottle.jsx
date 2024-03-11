import PropTypes from "prop-types";
import "./Bottle.css";
import Button from "../Button/Button";
const Bottle = ({ bottle, setCart }) => {
  console.log(bottle);
  const { id, title } = bottle;
  return (
    <div className="card">
      <h3>{title}</h3>
      <Button id={id} setCart={setCart}>
        Add to Cart
      </Button>
    </div>
  );
};
Bottle.propTypes = {
  bottle: PropTypes.object.isRequired,
  setCart: PropTypes.func.isRequired,
};
export default Bottle;
