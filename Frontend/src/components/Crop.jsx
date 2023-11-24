import React from 'react'
import '../Styles/Crop.css'
import bg from '/assets/crop_bg.jpg'
import crop from '/assets/kidney_beans.jpg'

function Crop({
  cropName
}) {
  return (
    <div className='div-wrapper'>
      <div className="crop-wrapper">
        <div className="info-wrapper">
          <div className='image-container'>
            <img className='crop-image' src={crop}></img>
          </div>
          <div className="crop-text">
            <div className="crop-heading">
              {cropName}
            </div>
            <br></br>
            <div className="crop-description">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet velit exercitationem corrupti architecto sunt. Eligendi soluta accusantium aut reprehenderit iste nemo vero ipsam ex itaque. Ratione autem repellat a alias ipsum soluta quis iusto rerum quasi? Tempora eaque odit sequi nobis doloremque et veritatis quis adipisci deleniti libero maiores, ut sunt totam quas quaerat, molestiae, fuga amet praesentium recusandae odio repudiandae. Repellendus necessitatibus, perferendis error expedita quos nisi aliquam minima.
            </div></div>
        </div>
      </div>
    </div>
  )
}

export default Crop
