import React,{useEffect} from "react";
import axios from 'axios'
import {useDispatch} from 'react-redux'

//actions types 
import {setProducts} from '../redux/actions/productAction'

//components import
import ProductComponent from "./ProductComponent";

const ProductListing = () => {
  const dispatch = useDispatch()
  
  
const fetchProducts = async  ()=>{
    const response = await axios.get('https://fakestoreapi.com/products').catch((err)=>{
        console.log('ERROR',err);
    })
    dispatch(setProducts(response.data));
}

useEffect(()=>{
    fetchProducts()
// eslint-disable-next-line react-hooks/exhaustive-deps
},[])

  return (
    <div className="ui four column doubling stackable grid container" style={{ marginTop: "2rem" }}>
        <ProductComponent /> 
    </div>
  );
};

export default ProductListing;
