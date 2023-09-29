import React from 'react'
import '../Styles/Crop.css'
import Kidney from '/assets/kidney_beans.jpg'

function Crop() {
  return (
    <div className='crop-wrapper'>
      <div className="crop-description">
        <div className='image-container'>
          <img className='image' src={Kidney}></img>
        </div>
        <div className="description">
          <div className="crop-heading">
            Kidney beans
          </div>
          <div className="crop-text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet velit exercitationem corrupti architecto sunt. Eligendi soluta accusantium aut reprehenderit iste nemo vero ipsam ex itaque. Ratione autem repellat a alias ipsum soluta quis iusto rerum quasi? Tempora eaque odit sequi nobis doloremque et veritatis quis adipisci deleniti libero maiores, ut sunt totam quas quaerat, molestiae, fuga amet praesentium recusandae odio repudiandae. Repellendus necessitatibus, perferendis error expedita quos nisi aliquam minima.
          </div>
        </div>
      </div>
    </div>
  )
}

export default Crop
