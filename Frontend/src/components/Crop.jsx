import React from 'react'
import '../Styles/Crop.css'
import bg from '/assets/crop_bg.jpg'

function Crop({
  cropName,
  cropDescription,
  cropImage
}) {
  return (
    <div className='div-wrapper'>
      <div className="crop-wrapper">
        <div className="info-wrapper">
          <div className='image-container'>
            <img className='crop-image' src={cropImage}></img>
          </div>
          <div className="crop-text">
            <div className="crop-heading">
              {cropName}
            </div>
            <br></br>
            <div className="crop-description">
              {cropDescription}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Crop
