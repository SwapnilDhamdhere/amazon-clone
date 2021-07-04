import React from "react";
import "./CheckoutProduct.css";
import StarIcon from "@material-ui/icons/Star";

function CheckoutProduct({ id, image, title, price, rating }) {
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => {
              <StarIcon />;
            })}
        </div>
        <button>Remove from Basket</button>
        {/* 2:50:23 */}
      </div>
    </div>
  );
}

export default CheckoutProduct;
