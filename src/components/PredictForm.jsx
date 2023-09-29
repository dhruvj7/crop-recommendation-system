import React, { useState } from 'react'
import '../Styles/PredictForm.css'

function PredictForm() {

  const [formData,setFormData]=useState({
    nitrogen:'',
    phosphorus:'',
    potassium:'',
    temperature:'',
    ph:'',
    rainfall:''
  })

  const handleInput =(e)=>{
    const fieldTargeted = e.target.name;
    const value = e.target.value;
    // console.log(fieldTargeted,value);
    setFormData(
      {
        ...formData,
        [fieldTargeted]:value
      }
    )
  }
  const handleSubmit =(e)=>{
    // e.preventDefault();
    const newData = { ...formData};

    //send new data to api to fetch data
    console.log(newData);
  }
  return (
    <div className="form-wrapper">
        <form action="" onSubmit={handleSubmit} name="inputForm" className="input-form">

            <div className="form-input row mb-3">
              <label htmlFor="nitrogen" className="col-sm-4 col-form-label">Ratio of Nitrogen content in soil:</label>
              <div className="col-sm-8">
                <input type="text" 
                className="form-control"
                value={formData.nitrogen}
                name="nitrogen"
                onChange={handleInput}
                ></input>
              </div>
            </div>

            <div className="form-input row mb-3">
              <label htmlFor="phsophorus" className="col-sm-4 col-form-label">Ratio of Phosphorus content in soil: </label>
              <div className="col-sm-8">
                <input type="text" 
                className="form-control"
                value={formData.phosphorus}
                name="phosphorus"
                onChange={handleInput}
                ></input>
              </div>
            </div>

            <div className="form-input row mb-3">
              <label htmlFor="potassium" className="col-sm-4 col-form-label">Ratio of Potassium content in soil: </label>
              <div className="col-sm-8">
                <input type="text" 
                className="form-control"
                value={formData.potassium}
                name="potassium"
                onChange={handleInput}
                ></input>
              </div>
            </div>

            <div className="form-input row mb-3">
              <label htmlFor="temperature" className="col-sm-4 col-form-label">Temperature (in degree Celsius): </label>
              <div className="col-sm-8">
                <input type="text" 
                className="form-control"
                value={formData.temperature}
                name="temperature"
                onChange={handleInput}
                ></input>
              </div>
            </div>

            <div className="form-input row mb-3">
              <label htmlFor="ph" className="col-sm-4 col-form-label">PH value of soil: </label>
              <div className="col-sm-8">
                <input type="text" 
                value={formData.ph}
                className="form-control"
                name="ph"
                onChange={handleInput}
                ></input>
              </div>
            </div>

            <div className="form-input row mb-3">
              <label htmlFor="rainfall" className="col-sm-4 col-form-label">Rainfall(in mm): </label>
              <div className="col-sm-8">
                <input type="text" 
                className="form-control"
                value={formData.label}
                name="rainfall"
                onChange={handleInput}
                ></input>
              </div>
            </div>

            <div onClick={handleSubmit} className='predict-button' >
              Predict
            </div>
        </form>
    </div>
  )
}

export default PredictForm