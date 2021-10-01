import React,{useEffect} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import {useSelector,useDispatch} from 'react-redux'
import {selectedProducts} from '../redux/actions/productAction'
const ProductDetails = () => {
    const {productId} = useParams()
    //fetch product details from redux store
    const product = useSelector(state=>state.product)
    const {title,description,category,image,price} = product
    //dispatch method
    const dispatch = useDispatch()

    //fetch data from fakestoreapi 
    const fetchSingleProduct=async (id)=>{
      const response=  await axios.get(`https://fakestoreapi.com/products/${id}`).catch(err=>console.log('ERROR: ',err))
      dispatch(selectedProducts(response.data))
    }


    useEffect(()=>{
        fetchSingleProduct(productId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[productId])
    return (
        <div className=" ui raised very padded text container segment" style={{ marginTop:'5rem'}}>
  <div className="ui centered medium image">
    <img src={image} alt={title}/>
  </div>
  <div className="content">
    <span className="header">{title}</span>
    <div className="meta">
      <span className="date">{price}</span>
    </div>
    <div className="description">
      {description}
    </div>
  </div>
  <div className="extra content">
    <span>
      <i className="user icon"></i>
     {category}
    </span>
  </div>
</div>
    )
}

export default ProductDetails
