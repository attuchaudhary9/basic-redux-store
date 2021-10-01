import {combineReducers} from 'redux'
import { productReducer,selectedProductReducer } from './reducers/product-reducer'

const rootReducer = combineReducers({
    products:productReducer,
    product:selectedProductReducer
})

export default rootReducer;