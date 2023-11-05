import React from 'react'
import './style.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useState, useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGoogle, faXTwitter, faFacebookF} from '@fortawesome/free-brands-svg-icons'
import {faAngleRight, faAngleDown,faChartColumn, faClock,
   faLightbulb, faHeadphones, faPlay, faUsers, faComments,
   faBoltLightning, faArrowRightLong, faCreditCard, faMessage,
   faPhone, faCommentDots, faPalette, faHourglassEnd, faCircleCheck} from '@fortawesome/free-solid-svg-icons'



const Body = () => {

  const [fix, setFix] = useState(false);
  // const [transit, setTransit] = useState(false);

  const setFixed = () =>{
      window.scrollY >= 54.2? setFix(true) : setFix(false);
  }

  // setInterval( () =>{
  //   window.scrollY = true ? setTransit(true) : setTransit(false);}, 1500)
  window.addEventListener('scroll', setFixed);  

  useEffect( () =>{
    AOS.init({duration: 900});
  }, [])
  
  return (
    // main header
    <div className='container' id='#Home'>
        <img src={'https://prium.github.io/elixir/assets/images/header-6.jpg'} alt='background' className='bcg'/>

        <div className={fix? 'fixed': 'banner'}>
            <div className='second-nav'>
                <img src={'https://prium.github.io/elixir/assets/images/logo-dark.png'} alt='logo-dark' />
                <ul className='dropdown-menu'>
                  <li className='dropbtn'>Home <FontAwesomeIcon icon={faAngleDown} />
                    <div class="dropdown-content">
                      <a href="#Home">Slider Header</a>
                      <a href="#Home">Slider Classic</a>
                      <a href="#Home">Static Header</a>
                      <a href="#Home">Static Classic</a>
                      <a href="#Home">Youtube Background</a>
                      <a href="#Home">Youtube Classic</a>
                      <a href="#Home">Self-hosted Video</a>
                      <a href="#Home">Self-hosted Classic</a>
                    </div>
                  </li>
                  <li className='dropbtn'>Pages <FontAwesomeIcon icon={faAngleDown} /> 
                    <div class="dropdown-content1">
                      <a href="#Home">Services</a>
                      <a href="#Home">About</a>
                      <a href="#Home">Alumni</a>
                      <a href="#Home">Blank Page</a>
                      <a href="#Home">404 Page</a>
                      <a href="#Home">Login</a>
                      <a href="#Home">Registration</a>
                    </div>
                  </li>
                  <li className='dropbtn'>News <FontAwesomeIcon icon={faAngleDown}/>
                    <div class="dropdown-content2">
                      <a href="#Home">Newsroom</a>
                      <a href="#Home">Single News</a>
                    </div>
                  </li>
                  <li className='dropbtn'>Elements <FontAwesomeIcon icon={faAngleDown} />
                    <div class="dropdown-content3">
                      <a href="#Home">Button</a>
                      <a href="#Home">Colors</a>
                      <a href="#Home">Google Maps</a>
                      <a href="#Home">Grid</a>
                      <a href="#Home">Icons</a>
                      <a href="#Home">Layout Helpers</a>
                      <a href="#Home">Modal Videos</a>
                      <a href="#Home">Owl Carousal</a>
                      <a href="#Home">Slider</a>
                      <a href="#Home">Typography</a>
                    </div>
                  </li>
                  <li>Contact </li>
                </ul>
            </div>

            <div className='purchase'>
              <button className='btn'>
                Purchase
              </button>
            </div>
        </div>

        <div className='head' data-aos='fade-up' data-aos-once = "true">
            <h1 className='leader'>
            Helping Leaders
            </h1>
            <p className='forward'>
            We look forward to help you in taking your <br/> company to new height.
            </p>

            <button className='Read'>Read more<FontAwesomeIcon icon={faAngleRight} style={{color: "#ffffff", marginLeft: "5px"}} /></button>
            <button className='Contact'> Contact us <FontAwesomeIcon icon={faAngleRight} /></button>
        </div>

        {/* welcome container here */}

      <div className='welcome-container' data-aos='fade-up'  data-aos-once = "true">
        <div className='welcome'>
          <h1> Welcome to the Elixir</h1>
          <p>Get expert consultancy and support with Elixir, an advisory firm <br/> that stand by your side always.</p>
        </div> <hr/>

        <div className='elixir'>
            <div className='circle-container'>
              <div className='circle'><FontAwesomeIcon icon={faChartColumn} size="2xl" style={{color: "#2a3855",}} /></div>
              <h2>Business Consulting </h2>
              <p> Solution for every business <br/>
              related problems, readily<br/>
              and skillfully.</p>

            </div>
            <div className='circle-container'>
              <div className='circle'><FontAwesomeIcon icon={faClock} size="2xl"  style={{color: "#2a3855",}} /></div>
              <h2>Risk Management </h2>
              <p> Calculate every possible risk <br/> 
              in your business, take <br/>
              control over them.</p>

            </div>
            <div className='circle-container'>
              <div className='circle'><FontAwesomeIcon icon={faLightbulb} size="2xl" style={{color: "#2a3855",}} /></div>
              <h2> Market Research </h2>
              <p> Know the market before <br/> 
              taking any step, reduce<br/>
              risks before you go.</p>

            </div>
            <div className='circle-container'>
              <div className='circle'><FontAwesomeIcon icon={faHeadphones} size="2xl" style={{color: "#2a3855",}} /></div>
              <h2>Quality Services </h2>
              <p>Experience unparalleled <br/> 
              service, from beginning <br/>
              to final construction.</p>
            </div>
          </div>

      </div>

      <div className='video-container' data-aos='fade-up'  data-aos-once = "true">
        <img src={'https://prium.github.io/elixir/assets/images/video-screenshot-2.jpg'} alt='video screenshot' className='video'/>

        <a href="https://www.youtube.com/watch?v=jlWMTNZNOc0" className='link'>
           <div className='link-big-bgc'>
           <div className='link-small-bgc'>
            <FontAwesomeIcon icon={faPlay} size="2xl" style={{color: "#2a3855",}} />
            </div>
           </div>
        </a>

        {/* company conatiners */}

        <div className='company-container'  data-aos='fade-up'  data-aos-once = "true">
          <div className='company-item'>
            <div className='items-span'>
            <FontAwesomeIcon icon={faUsers} size="xl" style={{color: "#2a3855",}}/>
            <h2>Awesome Team</h2>
            </div>
            <p>
              Before talking destination, we shine a <br/>
              spotlight across your organization <br/>
              to fully understand it.
            </p>
          </div>
          <div className='company-item'>
           <div className='items-span'>
           <FontAwesomeIcon icon={faComments} size="xl" style={{color: "#2a3855",}}/>
           <h2>Excellence Support</h2>
           </div>
            <p>
            If you face any trouble, you can always <br/> 
            let our dedicated support team help <br/>
            you. They are ready for you 24/7.
            </p>
          </div>
          <div className='company-item'>
           <div className='items-span'>
           <FontAwesomeIcon icon={faBoltLightning} size='xl' style={{color: "#2a3855",}}/>
           <h2>Faster Performance</h2>
           </div>
            <p>
            We develop a systematic well-ordered <br/> process of analysis, from concept <br/> through implementation.
            </p>
          </div>
        </div>
      </div>

      {/* services container */}

      <div className='service-container' data-aos='fade-up'  data-aos-once = "true">
        <div className='services'>
            <h1> Our Services <hr/> </h1> 
        </div>

        <div className='service-grid'>
          <div className='image-grid1'>
            <img src='https://prium.github.io/elixir/assets/images/6.jpg' alt='grid-image1' className='grid-image'/>
          </div>

          <div className='text-grid1' data-aos='fade-up'  data-aos-once = "true">
             <div className='grid-div'>
             <h2>Business Consulting</h2>
              <p>
              As one of the world’s largest accountancy networks, elixir <br/>
              helps a diverse range of clients with a diverse range of 
              needs.This is especially true of our Advisory Practice, which
              provides corporate finance and transaction services, business 
              restructuring.
              </p>

              <a href='#Home' className='learn-more'>
                Learn More <FontAwesomeIcon icon={faArrowRightLong} style={{"--fa-primary-color": "#2a3855", "--fa-secondary-color": "#2a3855",}} />
              </a>
             </div>
          </div>
          <div className='text-grid2' data-aos='fade-up'  data-aos-once = "true">
            <div className='grid-div'>
              <h2>Tax consulting</h2>
                <p>
                Elixir serves clients across the country and around the world 
                 as they navigate an increasingly complex tax landscape. Our
                  tax professionals draw on deep experience and industry-
                  specific knowledge to deliver clients the insights and 
                  innovation they need.


                </p>

                <a href='#Home' className='learn-more'>
                  Learn More <FontAwesomeIcon icon={faArrowRightLong} style={{"--fa-primary-color": "#2a3855", "--fa-secondary-color": "#2a3855",}} />
                </a>
              </div>
          </div>
          <div className='image-grid2'>
          <img src='https://prium.github.io/elixir/assets/images/7.jpg' alt='grid-image1' className='grid-image'/>
          </div>
          <div className='image-grid3'>
          <img src='https://prium.github.io/elixir/assets/images/8.jpg' alt='grid-image1' className='grid-image'/>
          </div>
          <div className='text-grid3' data-aos='fade-up'  data-aos-once = "true">
            <div className='grid-div'>
              <h2>Advisory</h2>
                <p>
                To help you understand what this road looks like, we 
                surveyed 1165 digital marketers across Europe and North
                 America to explore current trends and priorities in digital
                  marketing.
                </p>

                <a href='#Home' className='learn-more'>
                  Learn More <FontAwesomeIcon icon={faArrowRightLong} style={{"--fa-primary-color": "#2a3855", "--fa-secondary-color": "#2a3855",}} />
                </a>
            </div>
          </div>

        </div>

        <div className='services-contact-container'>
            <div className='service-item'  data-aos='fade-up'  data-aos-once = "true">
              <div className='service-icon-flex'>
                <FontAwesomeIcon icon={faCreditCard} style={{color: "#2a3855",}} />
                <h2>
                  Special financing
                </h2>
              </div>
              
              <p>
              Apply for special financial support and earn exclusive rewards.
              </p>
  
            </div>

            <div className='service-item'  data-aos='fade-up'  data-aos-once = "true">
              <div className='service-icon-flex'>
                <FontAwesomeIcon icon={faMessage} style={{color: "#2a3855",}} />
                <h2>
                  Chat with team
                </h2>
              </div>
              
              <p>
              Have a question? Chat online with an expert. <a className='learn-more' href='#home'> Start chatting </a>
              </p>
  
            </div>

            <div className='service-item' data-aos='fade-up'  data-aos-once = "true">
                <div  className='service-icon-flex'>
                  <FontAwesomeIcon icon={faPhone} style={{color: "#2a3855",}} />
                  <h2>
                    Call a specialist
                  </h2>
                </div>

                <p>
                Our 24/7 support team is ready for you at 1-800-MY-Elixir.
                </p>

            </div>
        </div>

      </div>

      <div className="Elixir-container" data-aos='fade-up'  data-aos-once = "true">
            <h1> Why Choose Elixir <hr/></h1>

            <div className='choose-grid'>
              <div className='choose-box1'>
                  <img src={'https://prium.github.io/elixir/assets/images/why-choose-us.jpg'} alt='why-choose-us' className='choose-image'/>
              </div>

              <div className='text-box1'>
                  <div className='grid-div'>
                    <div  className='service-icon-flex'>
                      <FontAwesomeIcon icon={faCommentDots} style={{color: "#2a3855",}} />
                      <h2>
                         We Are Professional
                      </h2>
                    </div>
                    <p>
                    We resource, train, speak, mentor and encourage;
                    marketplace leaders, business owners and career
                    professionals to be effective in the workplace.
                     </p>
                  </div>

                  <div className='grid-div'>
                  <div  className='service-icon-flex'>
                      <FontAwesomeIcon icon={faPalette} style={{color: "#2a3855",}} />
                      <h2>
                      We Are Creative
                      </h2>
                    </div>
                    <p>
                    With so many factors to consider when deciding how to 
                    characterize your company , wouldn’t it be great to have a 
                    group of forward-thinking, well-informed individuals on
                     board who know what they’re doing?


                     </p>
                  </div>

                  <div className='grid-div'>
                  <div  className='service-icon-flex'>
                      <FontAwesomeIcon icon={faHourglassEnd} style={{color: "#2a3855",}} />
                      <h2>
                      24/7 Great Support
                      </h2>
                    </div>
                    <p>
                    Design clever and compelling marketing strategies,
                     improve product positioning, and drive conversion 
                     rates, Elixir is all time available to guide you.
                     </p>
                  </div>

              </div>
            </div>
      </div>

      <div className='investment' data-aos='fade-up'  data-aos-once = "true">
        <p>If you have any query related investment... we are available 24/7</p>
        <button className='contact-btn' href='#Home'> contact us</button>
      </div>


      <div className='rightStep-container' data-aos='fade-up'  data-aos-once = "true">
          {/* <img src={'https://prium.github.io/elixir/assets/images/background-15.jpg'} alt='rightStep-background'/> */}

          <div className='rightStep-content'>
            <h1>
              <FontAwesomeIcon icon={faCircleCheck} style={{color: "#fdd428",}} size='xl'/>
              <div style={{color: "#fdd428",}} className='right'>
                 Take the right step,<br/>
                 <span className='take-step'>do the big things.</span>
              </div>
              
            </h1>

            <div className='step-box'>
              <div>
                <h1> 52K</h1>
                <p> Case Solved</p>
              </div>
              <div>
                <h1>164</h1>
                <p> Trained Expert</p>
              </div>
              <div>
                <h1> 38</h1>
                <p> Branches</p>
              </div>
              <div>
                <h1> 100%</h1>
                <p> Satisfied Clients</p>
              </div>
            </div>

          </div>
      </div>

      <section className='footer' data-aos='fade-up'  data-aos-once = "true">
        <div className="container">
            <div className="row ">
              <div className="foot-flex">
                <div className="foot-sign" data-aos='fade-up'  data-aos-once = "true">
                  <div className='sign-container'>
                  <span className="sign-text">Sign up for email alerts</span>
                  <span className="current-text">Stay current with our latest insights</span>
                  </div>
                  <form className='sign-form'>
                    <div className="row">
                        <div className="input-group">
                         <input className="form-control" type="email" placeholder="Enter Email Here"/>
                        </div>
                        <button className="foot-btn" type="submit">
                          Submit
                        </button>
                    </div>
                  </form>
                </div>
                <div  data-aos='fade-up'  data-aos-once = "true">
                  <div className="foot-text">
                    <div className="foot-text-left">
                      <ul className="list-unstyled">
                        <li ><a className="color-white" href="#Home">Contact Us</a></li>
                        <li ><a className="color-white" href="#Home">FAQ</a></li>
                        <li ><a className="color-white" href="#Home">Privacy Policy</a></li>
                        <li ><a className="color-white" href="#Home">Terms of Use</a></li>
                        <li ><a className="color-white" href="#Home">Global Office</a></li>
                        <li ><a className="color-white" href="#Home">Local Office</a></li>
                      </ul>
                    </div>
                    <div className="foot-text-right">
                     <a href="https://www.linkedin.com/in/shasere-elijah-2a7174293/" >
                      <div className="social-flex">
                        <div className="social-icon">
                          <div className="">
                          <FontAwesomeIcon icon={faLinkedinIn} className='icon' />
                          </div>
                        </div>
                        <div className="social-name">
                          <h5>Linkedin</h5>
                        </div>
                      </div>
                     </a>
                     <a href="https://twitter.com/Deflows_">
                      <div className="social-flex">
                        <div className="social-icon">
                          <FontAwesomeIcon icon={faXTwitter} className='icon' />
                        </div>
                        <div className="social-name">
                          <h5>Twitter</h5>
                        </div>
                      </div>
                     </a>
                     <a href="#Home">
                      <div className="social-flex">
                        <div className="social-icon">
                          <FontAwesomeIcon icon={faFacebookF} className='icon' />
                        </div>
                        <div className="social-name">
                          <h5 className="">Facebook</h5>
                        </div>
                      </div>
                     </a>
                     <a href="#Home">
                      <div className="social-flex">
                        <div className="social-icon">
                          <FontAwesomeIcon icon={faGoogle} className='icon' />
                        </div>
                        <div className="social-name">
                          <h5>Google+</h5>
                        </div>
                      </div>
                     </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* .row */}
            </div>
            {/* .container */}
        </div>
      </section>

    </div>
  )
}

export default Body