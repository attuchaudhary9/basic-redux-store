import React from "react";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from 'uuid';
import {Link} from 'react-router-dom'


const ProductComponent = () => {
  const products = useSelector((state) => state.products.products);
  console.log("PRODUCTS: ", products);

  return (
    <>
      {products.map((prod) => {
        return (
          <Link to={`/product/${prod.id}`}>
          <div key={uuidv4()} className="column" style={{marginBottom:'2rem'}}>
            <div className="ui link cards">
              <div className="card">
                <div className="ui segment">
                  <img style={{height:'10rem',width:'8rem'}} className='ui centered medium image' src={prod.image} alt={prod.title} />
                </div>
                <div className="content">
                  <div className="header">{prod.title}</div>
                  <div className="meta price">{prod.price}</div>
                  <div className="meta">{prod.category}</div>
                </div>
              </div>
            </div>
          </div>
          </Link>
        );
      })}
    </>
  );
};

export default ProductComponent;
