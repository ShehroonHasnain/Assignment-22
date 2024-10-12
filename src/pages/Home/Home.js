import React from 'react'
import ProductList from '../../components/ProductList'
import Navabr from '../../components/NavBar/NavBar'
import { Link } from 'react-router-dom'
import HeroSection from '../../components/HeroSection/Herosection'
import Footer from '../../components/Footer/Footer'

export default function Home() {
    return (
        <div>
            <Navabr />
            <HeroSection />
            <div style={{ display: "flex", alignItems: "center", flexDirection: "column", height: 200, padding:40,}}>
                <h3 style={{padding:30,}}>Add More Products</h3>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: "center" }}>

                    <Link to={"/AddProduct"}><button style={{ padding: "10px 20px", backgroundColor: "#007bff", color: 'white', border: 'none', borderRadius: '3px', cursor: 'pointer' }} >Add Product</button></Link></div></div>
            <ProductList />
            <Footer/>

        </div>
    )
}
