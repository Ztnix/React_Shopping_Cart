import PropTypes from "prop-types";

export default function Shop({
  image,
  title,
  category,
  price,
  rating,
  inCart,
}) {
  return (
    <div className="cartItem">
      <div className="cartLeftSide">
        <div className="cartImageContainer">
          <img src={image} alt="" />
        </div>
        <div className="cartItemInfo">
          <div className="cartItemTitle">{title}</div>
          <div className="cartCategory">{category}</div>
          <div className="cartPrice">${price}</div>
          <div className="cartRatings">
            ⭐{rating.rate} - {rating.count} Reviews
          </div>
        </div>
      </div>
      <div className="cartRightSide">
        <div className="cartInCart">No. in cart: {inCart}</div>
        <div className="subTotal">Subtotal: ${price * inCart}</div>
      </div>
    </div>
  );
}

Shop.propTypes = {
  cartContents: PropTypes.object,
  title: PropTypes.string,
  image: PropTypes.string,
  category: PropTypes.string,
  price: PropTypes.number,
  inCart: PropTypes.number,
  rating: PropTypes.shape({
    rate: PropTypes.number,
    count: PropTypes.number,
  }),
  id: PropTypes.number,
};
