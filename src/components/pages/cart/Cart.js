import React, {useState, createRef} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import Table from 'react-bootstrap/Table'
import { AddCartItemCount } from '../../redux/action'
import './CartStyle.css'

const Cart = () => {
    const dispatch = useDispatch()
    const productCountRef = createRef()
    // const[productCount, setProductCount] = useState(1)
    const productLists = useSelector(state => state.productList.data)
    const cartListIds = useSelector(state => state.cart.data)
    console.log(productLists)
    const removeProduct = () =>{
    }
    const addProduct = (id,count) =>{
        dispatch(AddCartItemCount(id,count))
    }
    return (
        <Table responsive="sm">
        <thead>
        <tr>
            <th>Sl.No</th>
            <th>Product</th>
            <th>Id</th>
            <th>Name</th>
            <th>Count</th>
            <th>Price</th>
        </tr>
        </thead>
        <tbody>
            {
                productLists.map(productList =>{
                    return(
                        <div key={ productList.id }>
                            { cartListIds.includes(productList.id) === true ?
                             
                               <tr>
                                 <td>1</td>
                                 <td>
                                     <img className="cartImg" src={productList.url}></img>
                                 </td>
                                 <td>{productList.id}</td>
                                 <td>{productList.title}</td>
                                 <td>
                                     <div className="removeItem" onClick={()=>removeProduct(productList.id,productList.count)}>-</div>
                                    <div className="itemCount">{productList.count} </div>
                                     <div className="addItem" onClick={() => addProduct(productList.id,productList.count)}>+</div>
                                 </td>
                                 <td>{`${'$'+ productList.price}`}</td>
                               </tr>
                             :
                             console.log('not')}
                        </div>
                    )
                })
            }
            <tr>
                <td>Total</td>
                <td>Total</td>
            </tr>
         </tbody>
        </Table>
    );
};

export default Cart;