import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
    "product/fetchProducts",
    async () => {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        console.log("data in fetchProducts action", data);

        return data;
    }
);
export const deleteProductApiAction = createAsyncThunk(
    "product/deleteProduct",
    async (id) => {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
            method: "DELETE",
        });
        const data = await response.json();
        console.log("data in deleteProduct action", data);
        return data;
    });

export const productSlice = createSlice({
    name: 'product',
    initialState: {
        products: []
    },
    reducers: {
        deleteProduct: (state, action) => {
            let id = action.payload
            let filterProduct = state.products.filter(product => product.id !== id)
            state.products = filterProduct
        },
        addProduct:(state,action)=>{
            console.log('add product action',action.payload);
            state.products=[action.payload,...state.products]
            
        },
        updateProduct:(state,action)=>{
            let id = action.payload
            console.log('id in updateAction ',id);
            let fiterUpdateProduct=state.products.filter(product=>product.id!==id)
            console.log('filterUpdateProduct',fiterUpdateProduct);
            

            // let updatedata = state.products.filter(product => product.id!==id)
        //    console.log("product to be update",updatedata);
           
            
        }
    },
    extraReducers: builder => {

        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            console.log("fetch products in reducer", action.payload);

            state.products = action.payload;
        },)
        builder.addCase(deleteProductApiAction.fulfilled, (state, action) => {
            console.log("delete product in reducer", action.payload);
            let id = action.payload.id;
            let filteredProducts = state.products.filter(product => product.id !== id);
            state.products = filteredProducts;
        },)

    }
}
);
export const {deleteProduct,addProduct,updateProduct } = productSlice.actions;
export default productSlice.reducer;