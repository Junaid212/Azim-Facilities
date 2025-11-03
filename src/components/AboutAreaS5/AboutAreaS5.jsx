import React from 'react';
import { Link } from 'react-router-dom';
import Ab5 from '../../img/new/141.png'
import Ab6 from '../../img/new/142.png'
import Award from '../../img/normal/award-2.png'
import CountUp from 'react-countup';

const AboutAreaS5 = (props) => {
   const ClickHandler = () => {
      window.scrollTo(10, 0);
   }
   return (
      <div className={"" +props.hclass} id="about-sec">
      <div className="container">
          <div className="row gy-5 align-items-center">
              <div className="col-xl-6">
                  <div className="img-box5">
                      <div className="about-img-area">
                          <div className="img1 th-parallax">
                              <img className="w-100" src={Ab5} alt="" />
                          </div>
                      </div>
                      <div className="about-wrapp">
                          <div className="img2">
                              <img src={Ab6} alt="" />
                          </div>
                          <div className="box-content">
                              {/* <div className="award"><img src={Award} alt="" /></div> */}
                              <h3 className="box-title"> ISO 9001:2015 certified company</h3>
                          </div>
                      </div>

                  </div>
              </div>
              <div className="col-xl-5">
                  <div className="ps-xxl-5 ms-xxl-2">
                      <div className="title-area mb-37">
                          <span className="sub-title2 style1">ABOUT </span>
                          <h2 className="sec-title">What Azim Facilities Do</h2>
                      </div>
                      <p className="extra-text text-body fs-18 mb-0">We provide highly trained and professional hospitality
                         staff, including butlers, captains, bartenders, waiters/waitresses, hosts/hostesses, and commis 
                         personnel. Our team delivers exceptional service, ensuring a refined and seamless guest experience
                          for hotels, events, and luxury venues.</p><br/><br/>
                          <div className="checklist list-two-column">
                              <ul>
                                 <li>Butlers</li>
                                 <li>Captains</li>
                                 <li>Bartenders</li>
                                 <li>Waiters/Waitresses</li>
                                 <li>HHosts/Hostesses</li>
                                 <li>Commis personnel</li>
                              </ul>
                           </div>

                      {/* <div className="counter-card-wrap style2">
                          <div className="counter-card">
                              <div className="media-body">
                                  <h2 className="box-number"><span className="counter-number"><CountUp end={290}></CountUp></span>+ </h2>
                                  <p className="box-text">Luxury Rooms</p>
                              </div>
                          </div>
                          <div className="divider style2"></div>
                          <div className="counter-card">
                              <div className="media-body">
                                  <h2 className="box-number"><span className="counter-number">
                                  <CountUp end={4}></CountUp>.<CountUp end={8}></CountUp>
                                    </span>+ </h2>
                                  <p className="box-text">Guest Rating</p>
                              </div>
                          </div>
                          <div className="divider style2"></div>
                          <div className="counter-card">
                              <div className="media-body">
                                  <h2 className="box-number"><span className="counter-number"><CountUp end={128}></CountUp></span>k+ </h2>
                                  <p className="box-text">Clients Happy</p>
                              </div>
                          </div>
                          <div className="divider style2"></div>
                      </div> */}

                      <div className="btn-group mt-70 justify-content-start">
                          {/* <Link onClick={ClickHandler}  to="/about" className="th-btn th-icon">LEARN MORE</Link>
                          <Link onClick={ClickHandler}  to="/room" className="th-btn style3 th-icon">EXPLORE ROOMS</Link> */}
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
   );
};

export default AboutAreaS5;