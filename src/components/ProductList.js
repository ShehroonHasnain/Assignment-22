import React, { useEffect, useState } from 'react'
import './ProductList.css'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts,deleteProduct,deleteProductApiAction,updateProduct } from '../redux/slice/productSlice';
import { Link } from 'react-router-dom';
import UpdatePopup from './UpdatePopup/UpdatePopup';




export default function ProductList() {
    const products = useSelector(state => state.productSlice.products);
    const dispatch = useDispatch();
    console.log("prdocuts in comp", products)

    useEffect(() => {
      if (products.length===0){
        dispatch(fetchProducts())
    }

    }, [])
  

    const onClickDeleteProduct = (id)=>{
        console.log("delete product id", id)
        // dispatch(deleteProduct(id))
        dispatch(deleteProductApiAction(id))
        }
        const [UpdateState,setUpdateState]=useState(false)
        const [id,setId]=useState()
       
        
    const onClickUpdateProduct=(id)=>{
           console.log("update product id",id);
        //    dispatch(updateProduct(id))
        setUpdateState(true)
        setId(id)
        
     
           
    }



    return (
        <div id='products'>
            { UpdateState && <UpdatePopup id={id} UpdateState={UpdateState} setUpdateState={setUpdateState} />}

            {products?.map(product => {
                return (

                    <div key={product.id} className="card">
                        <div style={{ padding: 10 }}>

                            <img src={product.image} alt={product.title} className="card-image" />
                        </div>
                        <div className="card-content">
                            <h2>{product.title}</h2>
                            <p>{product.description}</p>
                            <p className="price">${product.price}</p>

                           <button onClick={()=>onClickUpdateProduct(product.id)} className="update-btn">Update</button>
                            <button onClick={()=>onClickDeleteProduct(product.id)} className="update-btn" style={{ backgroundColor: "red" }}>Delete</button>
                        
                        </div>


                    </div>
                )

            })}
        </div>

    )
}
