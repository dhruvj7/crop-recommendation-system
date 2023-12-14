import React from 'react'
import '../Styles/PredictForm.css'
import axios from 'axios';
import Crop from './Crop';
import { useState,useEffect } from 'react'

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
 const [cropDescription, setcropDescription]=useState('Description is here');
 const [cropImage, setcropImage]=useState('Image url');

  const [formData,setFormData]=useState({
    nitrogen:'',
    phosphorus:'',
    potassium:'',
    temperature:'',
    humidity:'',
    ph:'',
    rainfall:''
  })

  const formatName = (name)=>{
    return name[0].toUpperCase()+name.substr(1,name.length);
  }

  const getCropData = async(name)=>{
    try{
        //debugger;
        const response = await axios.get('data.json')
        for(let i=0; i < response.data['Crops'].length ; i++){
          if(name == response.data['Crops'][i].name){
            setCropName(formatName(name));
            setcropDescription(response.data['Crops'][i].description)
            setcropImage("assets/crop_images/"+response.data['Crops'][i].image_url)
            setIsPredicted(true);
            break;
          }
        }
    }
    catch(e){
        console.log("unexpected error occured-",e)
    }
  }

  const handleInput =(e)=>{
    const fieldTargeted = e.target.name;
    const value = e.target.value;
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
    axios
    .post('http://127.0.0.1:8000/prediction/', newData)
    .then((response) => {
      console.log('Response from the backend:', response.data.predicted_crop );
      getCropData(response.data.predicted_crop); //response from api comes here
    })
    .catch((error) => {
      // Handle any errors here
      console.error('Error making POST request:', error);
    });

    // getCropData('jute'); //response from api comes here
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
                <input required type="number"
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
                <input required type="number"
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
                <input required type="number"
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
                <input required type="number"
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
                  <input required type="number" 
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
                <input required type="number"
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
                <input required type="number"
                  className="form-control"
                  value={formData.rainfall}
                  name="rainfall"
                  onChange={handleInput}
                ></input>
              </div>
            </div>

            <button  className='predict-button' type='submit'>
              Predict
            </button>
          </form>
        </div>
      </div> 
      : <Crop cropName={cropName} 
            cropImage={cropImage} 
            cropDescription={cropDescription}/>
    }
    </>
  )
}

export default PredictForm