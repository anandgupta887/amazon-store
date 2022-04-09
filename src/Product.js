import React from "react";
import "./Product.css";
import Rating from "@material-ui/lab/Rating";
import { useStateValue } from "./StateProvider";
import { Box } from "@material-ui/core";

function Product({ id, title, image, rating, price }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    //dispatch the item to data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id,
        title,
        image,
        rating,
        price,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          <Box component="fieldset" mb={3} borderColor="transparent">
            <Rating name="read-only" value={rating} readOnly />
          </Box>
        </div>
      </div>
      <img className="" src={image} alt="" />
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
}

export default Product;
