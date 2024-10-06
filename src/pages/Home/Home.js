import React from 'react'
import ProductList from '../../components/ProductList'
import Navabr from '../../components/NavBar/NavBar'
import { Link } from 'react-router-dom'
import HeroSection from '../../components/HeroSection/Herosection'

export default function Home() {
    return (
        <div>
            <Navabr />
            <HeroSection/>
<div style={{alignItems:"center"}}>
            <Link to={"/AddProduct"}><button style={{padding: "10px 20px", backgroundColor: "#007bff", color: 'white', border:'none' ,borderRadius: '3px', cursor:'pointer' }} >Add Product</button></Link></div>
            <ProductList />
            
        </div>
    )
}
