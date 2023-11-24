import React from 'react'
import '../Styles/About.css'

function About() {
  return (
    <div>
      <div className='about-wrapper'>
        <h3 className="about-heading">About us</h3>
        <div className="about-content">
          <div className="carousel-container">
            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src="assets/background3.jpg" class="d-block w-60" alt="..." />
                    <div class="carousel-caption d-none d-md-block">
                      <h5>Who are we ?</h5>
                      <p>We are a NGO to provide technical help to all the farmers.</p>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <img src="assets/background3.jpg" class="d-block w-70" alt="..." />
                    <div class="carousel-caption d-none d-md-block">
                      <h5>How we do it ?</h5>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad eligendi at quis consectetur quia, nemo totam. Maxime corporis minus animi aliquid labore veritatis, cumque quas inventore sit. Consectetur vel perspiciatis vero maxime nostrum sapiente, aspernatur possimus repellendus? Perspiciatis, quidem autem. Soluta veniam fugit possimus quaerat dignissimos maxime dolorum ratione quidem tempore officiis deserunt aliquid aut, molestiae quos, voluptatem blanditiis aliquam obcaecati delectus, expedita reprehenderit voluptates esse! Ipsam, amet et. Dolore laboriosam unde obcaecati libero expedita. A dolorem expedita eligendi architecto quas ipsam tenetur laudantium labore obcaecati impedit, perspiciatis rerum aut vitae illo ratione repudiandae iusto nesciunt? Quisquam harum rerum dolorum?.</p>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <img src="assets/background3.jpg" class="d-block w-70" alt="..." />
                    <div class="carousel-caption d-none d-md-block">
                      <h5>Our goal ?</h5>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi soluta deleniti molestiae cupiditate error tempore itaque veniam obcaecati neque suscipit dolore eum, nisi iste architecto laboriosam consectetur est quia, veritatis nulla laudantium sunt et aut. Quaerat, dolor reprehenderit, doloribus rem architecto vero obcaecati sed aliquid velit exercitationem sequi, necessitatibus expedita?</p>
                      <div className="connect">
                        <div className="facebook">facebook</div>
                        <div className="gmail">gmail</div>
                        <div className="instagram">instagram</div>
                      </div>
                    </div>
                  </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About