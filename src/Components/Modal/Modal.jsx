import PropTypes from "prop-types";
import "./Modal.css";
const Modal = ({ children, setShowCart }) => {
  //   console.log(typeof children);
  return (
    <div>
      <div className="modal">
        <div className="modal-content">
          <span onClick={() => setShowCart(false)} className="close">
            &times;
          </span>
          {children}
        </div>
      </div>
    </div>
  );
};
Modal.propTypes = {
  setShowCart: PropTypes.func.isRequired,
  children: PropTypes.object,
};
export default Modal;
