import {combineReducers} from 'redux'
import { productReducer } from './reducers/product-reducer'

const rootReducer = combineReducers({
    products:productReducer
})

export default rootReducer;