import React from 'react'
import '../Styles/About.css'

function About() {
  return (
    <div>
      <div className='about-wrapper'>
        <div className="about-content">
          <div className="carousel-container">
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img  src="assets/about1.png" className="d-block w-100" alt="..." 
                    style={{ width: '100%', height: 'auto' }}
                    />
                    <div className="carousel-caption d-none d-md-block">
                      <h5>Who are we ?</h5>
                      <p>
                      We are a dedicated NGO committed to empowering farmers through tailored technical assistance, offering invaluable insights on optimal crop selection based on meticulous assessments of prevailing weather conditions and soil nutrient proportions. Our mission is to elevate agricultural practices by providing farmers with cutting-edge expertise, ensuring sustainable and yield-maximizing decisions. Through innovative solutions and a steadfast commitment to rural development, we strive to transform farming landscapes, promoting prosperity and resilience within the agricultural community. Join us on our journey to cultivate a brighter, more sustainable future for farmers, one informed decision at a time.                      </p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img src="assets/about4.jpg" className="d-block w-60" alt="..." 
                      style={{ width: '100%', height: 'auto' }}                                        />
                    <div className="carousel-caption d-none d-md-block">
                      <h5>How we do it ?</h5>
                      <p>
                        We leverage cutting-edge technologies and robust hardware systems to implement a highly precise machine learning algorithm—the Random Forest. Our mission revolves around addressing a fundamental query for every farmer: "Which crop to cultivate?" By seamlessly inputting essential data on weather conditions and soil nutrients, such as nitrogen, phosphorus, and oxygen, farmers gain tailored crop recommendations. We are committed to accessibility, working on innovative hardware solutions to ensure seamless data collection, even in remote villages. As an NGO dedicated to agricultural advancement, we empower farmers with data-driven insights to optimize their crop selection and yield outcomes.
                      </p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img src="assets/about3.jpg" className="d-block w-60" alt="..." 
                    style={{ width: '100%', height: 'auto' , color:'black'}}/>
                    <div className="carousel-caption d-none d-md-block">
                      <h5>Our goal ?</h5>
                      <p>
                      Our NGO's goal is to democratize agricultural technology, ensuring every farmer has access to affordable solutions. By deploying accessible technology, we aim to minimize resource wastage and optimize crop selection, thereby increasing yield production. Our overarching mission is to catalyze economic growth, especially in the primary sector, which remains a cornerstone of our economy. Through strategic interventions and innovative approaches, we aspire to empower farmers, fostering sustainability, productivity, and economic resilience in agriculture, ultimately contributing to the broader economic advancement of our nation. You can reach out to us using the given links :
                      </p>
                      <div className="connect">
                        <div className="facebook">Facebook <i className="fab fa-facebook"></i></div>
                        <div className="gmail">Gmail <i className="fas fa-envelope"></i></div>
                        <div className="instagram">Instagram <i className="fab fa-instagram"></i></div>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About