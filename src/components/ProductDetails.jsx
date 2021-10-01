/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import {
  selectedProducts,
  removeSelectedProduct,
} from "../redux/actions/productAction";
const ProductDetails = () => {
  const { productId } = useParams();
  //fetch product details from redux store
  const product = useSelector((state) => state.product);
  const { title, description, category, image, price } = product;
  //dispatch method
  const dispatch = useDispatch();

  //fetch data from fakestoreapi
  const fetchSingleProduct = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => console.log("ERROR: ", err));
    dispatch(selectedProducts(response.data));
  };

  useEffect(() => {
    if (productId && productId !== "") fetchSingleProduct();
    return () => {dispatch(removeSelectedProduct());}
  }, [productId]);
  return (
    <div className=" ui segment" style={{ margin: "5rem" }}>
      {Object.keys(product).length === 0 ? (
        <h2>Loading...</h2>
      ) : (
        <div className="ui two column very relaxed grid">
          <div className="column">
            <div className="ui medium image">
              <img src={image} alt={title} />
            </div>
          </div>
         
          <div className="column">
            <div className="content">
              <span className="header">{title}</span>
              <div className="meta">
                <span className="date">{price}</span>
              </div>
              <div className="description">{description}</div>
            </div>
            <div className="extra content">
              <span>
                <i className="user icon"></i>
                {category}
              </span>
            </div>
            <button className="positive ui button">Add To cart</button>
          </div>
        </div>
      )}
      <div class="ui vertical divider">and</div>
    </div>
  );
};

export default ProductDetails;
