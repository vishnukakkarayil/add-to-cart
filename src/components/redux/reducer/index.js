import { combineReducers } from 'redux'
import ProductReduser from './ProductReduser'
import CartList from './CartList'

const RootReducer = combineReducers({
    productList : ProductReduser,
    cart : CartList
})
export default RootReducer