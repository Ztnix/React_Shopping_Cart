import PropTypes from "prop-types";

export default function ShopItem({
  image,
  id,
  title,
  category,
  price,
  rating,
  inLimbo,
  inCart,
  handleAddToCart,
  handleInLimboItems,
}) {
  return (
    <div className="shopItem">
      <div className="shopImgContainer">
        <img src={image} alt="" className="shopImg" />
      </div>
      <div className="shopTitle">{title}</div>
      <div className="shopCategories">{category}</div>
      <div className="shopDetailsContainer">
        <div className="price">${price}</div>
        <div className="ratings">
          ⭐{rating.rate} - {rating.count} Reviews
        </div>
      </div>
      <div className="shopInputContainer">
        <div className="topInputs">
          <div className="cartInputs">
            <button
              className="minus"
              onClick={() => handleInLimboItems("minus", id)}
            >
              -
            </button>
            <div className="cartCount">{inLimbo}</div>
            <button
              className="plus"
              onClick={() => handleInLimboItems("plus", id)}
            >
              +
            </button>
          </div>
          <button className="AddItem" onClick={() => handleAddToCart(id)}>
            Add to Cart
          </button>
        </div>
        <div className="bottomInputs">({inCart} currently in cart)</div>
      </div>
    </div>
  );
}

ShopItem.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  key: PropTypes.number,
  category: PropTypes.string,
  price: PropTypes.number,
  inLimbo: PropTypes.number,
  inCart: PropTypes.number,
  rating: PropTypes.shape({
    rate: PropTypes.number,
    count: PropTypes.number,
  }),
  id: PropTypes.number,
  handleAddToCart: PropTypes.func,
  handleInLimboItems: PropTypes.func,
};
