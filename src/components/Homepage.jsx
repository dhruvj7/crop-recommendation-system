import React from 'react'
import '../Styles/homepage.css'
import background from '/assets/background3.jpg'

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
                    <div type="button" className='button'>
                        Predict Now
                    </div>  
                    <div type="button" className='button'>
                        Search Crop
                    </div> 
                </div>              
            </div>
            
        </div>
    </>
  )
}

export default Homepage