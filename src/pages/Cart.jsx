import PropTypes from "prop-types";
import CartItem from "../components/cartComponents/CartItem";
import { useOutletContext } from "react-router-dom";
import "../styles/Cart.css";

export default function Cart() {
  const { cartContents, handleClearCart } = useOutletContext();

  return (
    <div className="cart">
      {cartContents.some((obj) => obj.inCart > 0) ? (
        <div className="cartContainer">
          <h2 className="cartTitle">Review your selections:</h2>
          <div className="cartMid">
            <button className="cartClearBtn" onClick={handleClearCart}>
              Clear Cart
            </button>
            <div className="cartList">
              {cartContents.map(
                (element) =>
                  element.inCart > 0 && (
                    <CartItem
                      {...element}
                      key={element.id}
                      id={element.id}
                      handleClearCart={handleClearCart}
                    />
                  )
              )}
            </div>
            <div className="cartTotal">
              <b>Total:</b>{" "}
              {cartContents
                .reduce((sum, item) => sum + item.inCart * item.price, 0)
                .toFixed(2)}
            </div>
          </div>
        </div>
      ) : (
        <div className="cartFalse">
          <h2 className="cartFalseTitle">
            Your cart is empty<br></br>
            ¡Go check out our store!
          </h2>
        </div>
      )}
    </div>
  );
}

Cart.propTypes = {
  cartContents: PropTypes.object,
  handleClearCart: PropTypes.func,
};
