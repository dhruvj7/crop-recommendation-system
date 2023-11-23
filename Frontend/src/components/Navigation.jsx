import React from 'react'
import {Link} from 'react-router-dom'
import '../Styles/navigation.css'

function Navigation() {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <div className="navbar-brand"><span>Crop Advisor</span></div>
            
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
            aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
        </div>
        <div className="collapse navbar-collapse nav-right-items" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 list">
                <div className="nav-item">
                    <Link to="/" className="nav-link active" aria-current="page"><span>Home</span></Link>
                </div>
                <div className="nav-item">
                    <Link to="/about" className="nav-link" href="#"><span>About us</span></Link>
                </div>
                <div className="nav-item">
                    <Link to="/contact" className="nav-link"><span>Contact us</span></Link>
                </div>
            </ul>
        </div>
    </nav>
    </>
  )
}

export default Navigation