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
    e.preventDefault();
    const newData = { ...formData};

    //send new data to api to fetch data
    console.log(newData);
  }
  return (
    <>
        <form action="" onSubmit={handleSubmit} name="inputForm">
            <div className="form-input">
              <label htmlFor="nitrogen">Ratio of Nitrogen content in soil : </label>
              <input type="text" 
              value={formData.nitrogen}
              name="nitrogen"
              onChange={handleInput}
              ></input>
            </div>
            <div className="form-input">
              <label htmlFor="phsophorus">Ratio of Phosphorus content in soil : </label>
              <input type="text" 
              value={formData.phosphorus}
              name="phosphorus"
              onChange={handleInput}
              ></input>
            </div>
            <div className="form-input">
              <label htmlFor="potassium">Ratio of Potassium content in soil : </label>
              <input type="text"
              value={formData.potassium}
              name="potassium"
              onChange={handleInput}
              ></input>
            </div>
            <div className="form-input">
              <label htmlFor="temperature">Temperature(in degree Celsius) : </label>
              <input type="text" 
              value={formData.temperature}
              name="temperature"
              onChange={handleInput}
              ></input>
            </div>
            <div className="form-input">
              <label htmlFor="ph">PH value of soil : </label>
              <input type="text" 
              value={formData.ph}
              name="ph"
              onChange={handleInput}
              ></input>
            </div>
            <div className="form-input">
              <label htmlFor="rainfall">Rainfall(in mm) : </label>
              <input type="text" 
              value={formData.label}
              name="rainfall"
              onChange={handleInput}
              ></input>
            </div>
            <button type='submit'>
              Submit button
            </button>
        </form>
    </>
  )
}

export default PredictForm