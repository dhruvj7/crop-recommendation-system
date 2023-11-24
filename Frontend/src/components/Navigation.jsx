import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../Styles/navigation.css'

function Navigation() {
    const navigate = useNavigate();
    const [homeButton, setHomeButton] = useState(true);
    const [aboutButton, setAboutButton] = useState(false);
    const [contactButton, setContactButton] = useState(false);

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <div className="navbar-brand"><span onClick={() => {
                        navigate('/');
                    }}>Crop Advisor</span></div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div className="collapse navbar-collapse nav-right-items" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 list">
                        <div className="nav-item">
                            <Link to="/" className={homeButton ? "nav-link active" : "nav-link"} aria-current="page"
                                onClick={() => {
                                    setHomeButton(true);
                                    setAboutButton(false);
                                    setContactButton(false);
                                }}><span>Home</span></Link>
                        </div>
                        <div className="nav-item">
                            <Link to="/about" className={aboutButton ? "nav-link active" : "nav-link"}
                                onClick={() => {
                                    setAboutButton(true);
                                    setHomeButton(false);
                                    setContactButton(false);
                                }}><span>About us</span></Link>
                        </div>
                        <div className="nav-item">
                            <Link to="/contact" className={contactButton ? "nav-link active" : "nav-link"}
                                onClick={() => {
                                    setHomeButton(false);
                                    setAboutButton(false);
                                    setContactButton(true);
                                }}><span>Contact us</span></Link>
                        </div>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navigation