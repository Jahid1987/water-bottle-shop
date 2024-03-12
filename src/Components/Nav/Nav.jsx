import PropTypes from "prop-types";
import "./Nav.css";

const Nav = ({ cart, setShowCart }) => {
  return (
    <>
      <div className="nav-container">
        <div className="nav-contents">
          <h3 className="brand-name">Your Bottle</h3>
          <div className="nav-links">
            <ul>
              <li onClick={() => setShowCart(true)}>
                <a>
                  Cart <sup>{cart.length}</sup>
                </a>
              </li>
              <li>
                <a>Log in</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

Nav.propTypes = {
  cart: PropTypes.array.isRequired,
  setShowCart: PropTypes.func.isRequired,
};
export default Nav;
