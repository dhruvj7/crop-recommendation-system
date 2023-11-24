import React, { useState } from 'react'
import '../Styles/PredictForm.css'
import axios from 'axios';
import { Route } from 'react-router';
import Crop from './Crop';


function PredictForm() {
  // const [data, setData] = useState({});

//   useEffect(() => {
//     // Make an HTTP GET request to the Django API
//     axios.get('/api/data/')
//         .then(response => {
//             setData(response.data);
//         })
//         .catch(error => {
//             console.error('Error fetching data:', error);
//         });
// }, []);

 const [isPredicted, setIsPredicted]=useState(false);
 const [cropName, setCropName]=useState('kidney');

  const [formData,setFormData]=useState({
    nitrogen:'',
    phosphorus:'',
    potassium:'',
    temperature:'',
    humidity:'',
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
    setIsPredicted(true);

    //send new data to api to fetch data
    console.log(newData);
    axios
    .post('http://127.0.0.1:8000/prediction/', newData)
    .then((response) => {
      // Handle the response from the backend here
      console.log('Response from the backend:', response.data);
      // You can update your state or UI based on the response if needed.
    })
    .catch((error) => {
      // Handle any errors here
      console.error('Error making POST request:', error);
    });
    console.log(isPredicted)
  }
  
  return (
    <>
    {isPredicted == false ? 
      <div className="form-wrapper">
        <div className="form-overlay-wrapper">
          <form action="" onSubmit={handleSubmit} name="inputForm" className="input-form">
            <div className="form-input row mb-3">
              <label htmlFor="nitrogen" className="col-sm-4 col-form-label">Ratio of Nitrogen content in soil:</label>
              <div className="col-sm-8">
                <input required type="text"
                  className="form-control"
                  value={formData.nitrogen}
                  name="nitrogen"
                  onChange={handleInput}
                ></input>
              </div>
            </div>

            <div className="form-input row mb-3">
              <label htmlFor="phosphorus" className="col-sm-4 col-form-label">Ratio of Phosphorus content in soil: </label>
              <div className="col-sm-8">
                <input required type="text"
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
                <input required type="text"
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
                <input required type="text"
                  className="form-control"
                  value={formData.temperature}
                  name="temperature"
                  onChange={handleInput}
                ></input>
              </div>
            </div>

              <div className="form-input row mb-3">
                <label htmlFor="humidity" className="col-sm-4 col-form-label">Humidity : </label>
                <div className="col-sm-8">
                  <input required type="text" 
                  className="form-control"
                  value={formData.humidity}
                  name="humidity"
                  onChange={handleInput}
                  ></input>
                </div>
              </div>

            <div className="form-input row mb-3">
              <label htmlFor="ph" className="col-sm-4 col-form-label">PH value of soil: </label>
              <div className="col-sm-8">
                <input required type="text"
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
                <input required type="text"
                  className="form-control"
                  value={formData.rainfall}
                  name="rainfall"
                  onChange={handleInput}
                ></input>
              </div>
            </div>

            <div onClick={handleSubmit} className='predict-button' type='submit'>
              Predict
            </div>
          </form>
        </div>
      </div> 
      : <Crop cropName={cropName}/>
    }
    </>
  )
}

export default PredictForm