import React from 'react'
import '../Styles/homepage.css'
import {Link} from 'react-router-dom'

function Homepage() {
  return (
    <>
        <div className="wrapper">
            <div className="heading">
                <div className="heading-text">
                    Advising for crop cultivation <br></br>
                    using machine learning
                </div>
                <div className="homepage-buttons">
                    <Link to='/predict' className='button'>
                        Predict Now
                    </Link>  
                    <Link to='/crop' className='button'>
                        Search Crop
                    </Link> 
                </div>              
            </div>
            
        </div>
    </>
  )
}

export default Homepage