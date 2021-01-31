const initialState = {
    data:[]
}
const CartList = (state = initialState, action) =>{
    switch(action.type){
        case 'LIST_CART':
            return{
                ...state,
                data:state.data.concat(action.pId)
            }
        default:
            return state

    }
}
export default CartList