import PropTypes from "prop-types";
import "./Nav.css";

const Nav = ({ cart }) => {
  return (
    <>
      <div className="nav-container">
        <h3 className="brand-name">Your Bottle</h3>
        <div className="nav-links">
          <ul>
            <li>
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
    </>
  );
};

Nav.propTypes = {
  cart: PropTypes.array.isRequired,
};
export default Nav;
