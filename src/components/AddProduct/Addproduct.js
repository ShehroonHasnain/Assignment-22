import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addProduct } from '../../redux/slice/productSlice'
import './AddProduct.css'
import { Link } from 'react-router-dom'


export default function Addproduct() {

    const dispatch = useDispatch()
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    const [image, setImage] = useState(" https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg")
    const [category, setCategory] = useState("")


    const onClickAddProduct = () => {
        let product = {
            title,
            price,
            description,
            image,
            category
        }
        console.log("product", product)
        dispatch(addProduct(product))

    }




    return (
        <div>
    <div className="form-container">
                <h1>Add a Product</h1>
                <form 
                
                 className="product-form">
                    <div className="form-group">
                        <input
                            type="text" placeholder="title" onChange={(e) => setTitle(e.target.value)}    required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            placeholder="price" onChange={(e) => setPrice(e.target.value)}
                            type="number" required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text" placeholder="description" onChange={(e) => setDescription(e.target.value)}   required
                        />
                    </div>
                    <div className="form-group">
                        <input type="text" placeholder="category" onChange={(e) => setCategory(e.target.value)}   required
                        />
                    </div>
                   <Link to='/' style={{alignItems:"center"}}> <button type="submit" className="submit-btn" onClick={onClickAddProduct}>Add</button></Link>
                </form>
            </div>
        </div>


    )
}
