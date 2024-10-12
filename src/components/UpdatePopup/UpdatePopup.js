import React, { useEffect, useState } from 'react'
import './UpdatePopup.css'
import '../AddProduct/AddProduct.css'
import { useSelector ,useDispatch} from 'react-redux';
import { updateProduct} from '../../redux/slice/productSlice';



export default function UpdatePopup(props) {

  let id =props.id
  console.log('product id in updatePopup',id);
 const  allProducts=useSelector(state=>state.productSlice.products)
 const filterUpdateProduct=allProducts.filter(product=>product.id===id)
 console.log('filterUpdateProduct in popup',filterUpdateProduct);
 



  const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    const [image, setImage] = useState("")
    const [category, setCategory] = useState("")


const dispatch=useDispatch()


useEffect(()=>{
  if(filterUpdateProduct){
  setTitle(filterUpdateProduct[0].title)
  setPrice(filterUpdateProduct[0].price)
  setDescription(filterUpdateProduct[0].description)
  setCategory(filterUpdateProduct[0].category)}
  setImage(filterUpdateProduct[0].image)

},[])
 const onClickUpdateProduct = (e) => {
  let product = {
      
      id,
      title,
      price,
      description,
      image,
      category
  }
  console.log("product", product)
  dispatch(updateProduct(product))
  let setUpdate=props.setUpdateState(false)
  e.preventDefault()

}
  
  return (
    <div className='modalBackground'>
      <div className='modalContainer'>
      <div className="form-container">
                <h1>Update a Product</h1>
                <form 
                
                 className="product-form">
                    <div className="form-group">
                        <input value={title } type="text" placeholder="title" onChange={(e) => setTitle(e.target.value)}    required/>
                    </div>
                    <div className="form-group">
                        <input value={price} placeholder="price" onChange={(e) => setPrice(e.target.value)} type="number" required />
                    </div>
                    <div className="form-group">
                        <input value={description} type="text" placeholder="description" onChange={(e) => setDescription(e.target.value)}   require />
                    </div>
                    <div className="form-group">
                        <input value={category} type="text" placeholder="category" onChange={(e) => setCategory(e.target.value)}   required/>
                    </div>
                    <button  type="submit" className="submit-btn" onClick={onClickUpdateProduct}>Add</button>
                </form>
            </div>
        
      </div>
    </div>
  )
}
