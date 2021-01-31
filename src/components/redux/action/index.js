import store from '../Store'
export const ListAction = () =>
// let products = 
    (dispatch,getState)=>{
        dispatch({type:'LIST_PRODUCT'})
}


export const AddingTocart = (id) =>
(dispatch,getState)=>{    
    dispatch({type:'LIST_CART', pId:id})
}

export const AddCartItemCount = (id, count) =>
(dispatch, getState)=>{
    const allDatas = store.getState().productList.data
    const updateData = allDatas.find(allData=>allData.id === id)
    updateData.count = count + 1
    const currentIndex = allDatas.findIndex(allData=>allData.id === id)
    allDatas.splice(currentIndex,1,updateData)
    const cartListData = allDatas
    dispatch({type:'ADD_ITEM_COUNT',payload:cartListData})
}