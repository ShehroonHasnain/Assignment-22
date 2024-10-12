import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <div id='contact'> <footer className="footer">
    <div className="footer-content">
        <h1 style={{color:'white'}}>Contact Us</h1>
        <h3>If you have any questions, feel free to reach out!</h3>
        <div className="contact-info" >
            <p><strong>Email:</strong> info@example.com</p>
            <p><strong>Phone:</strong> +1 (123) 456-7890</p>
            <p><strong>Address:</strong> 1234 Main St, Anytown, USA</p>
        </div>
    </div>
    <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
    </div>
</footer></div>
  )
}
