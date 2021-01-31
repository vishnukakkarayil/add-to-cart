import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import {ListAction, AddingTocart} from '../../redux/action'
import './HomeStyle.css'

const ProductList = () => {
    const dispatch = useDispatch()
    useEffect(()=>{ dispatch(ListAction() )}, []) 
    
    
const addToCart = (id) => {
    dispatch(AddingTocart(id))
    // dispatch({type:'CHANGE_STATUS', cartProductId:id})
    
}
const products = useSelector(state => state.productList.data) 

    return (
        <div className="row">
        { products !== undefined ?

        products.map((product, index) =>{
            return(
            <div className="col-md-4 mt-5" key={ product.id }>
                <div className="products">
                    <img className="p-image" src={ product.url }></img>
                    <div className="p-data">
                    <h4 className="p-name">{ product.title }</h4>
                    <div className="h-p-details">                        
                        <p className="p-price">  {`${"$" + product.price }`}</p>
                        <button className="add-to-cart" onClick={ product.status === false ? () => addToCart(product.id) : null }>{ product.status === false ? "Add To Cart" :  "Added To Cart" }</button>
                    </div>
                    </div> 
                </div>
            </div>

            )} 
        ) 
        : console.log('')
    }
        </div>
    );
};

export default ProductList;