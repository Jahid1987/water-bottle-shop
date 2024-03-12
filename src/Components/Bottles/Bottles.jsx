import PropTypes from "prop-types";
import Bottle from "../Bottle/Bottle";
import "./Bottles.css";

const Bottles = ({ bottles, setCart }) => {
  // console.log("i am in bottles");
  return (
    <>
      <div className="bottle-container">
        {bottles.map((bottle) => (
          <Bottle key={bottle.id} bottle={bottle} setCart={setCart}></Bottle>
        ))}
      </div>
    </>
  );
};
Bottles.propTypes = {
  bottles: PropTypes.array.isRequired,
  setCart: PropTypes.func,
};
export default Bottles;
