import PropTypes from "prop-types";
import "./Bottle.css";
import Button from "../Button/Button";
const Bottle = ({ bottle, setCart }) => {
  // console.log("I am in bottle");
  const { name, img, price } = bottle;
  return (
    <div className="card">
      <img className="img" src={img} alt={name} />
      <h3>{name}</h3>
      <p>Price: {price}</p>
      <Button bottle={bottle} setCart={setCart}>
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
