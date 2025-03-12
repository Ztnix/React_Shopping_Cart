import ShopItem from "../components/shopComponents/ShopItem";
import "../styles/Shop.css";
import PropTypes from "prop-types";
import { useOutletContext } from "react-router-dom";

export default function Shop() {
  const { cartContents, handleAddToCart, handleInLimboItems } =
    useOutletContext();

  return (
    <div className="shop">
      <div className="shopTitle"></div>
      <div className="shopContainer">
        {cartContents.map((element) => (
          <ShopItem
            {...element}
            key={element.id}
            id={element.id}
            handleAddToCart={handleAddToCart}
            handleInLimboItems={handleInLimboItems}
          />
        ))}
      </div>
    </div>
  );
}

Shop.propTypes = {
  loading: PropTypes.bool,
  cartContents: PropTypes.object,
};
