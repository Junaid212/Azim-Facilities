import { useState } from 'react';
import { Link } from 'react-router-dom';
import ImageShape from '../../img/shape/circle-line.png';

import icon1 from '../../img/new/101.png';
import icon2 from '../../img/new/102.png';
import icon3 from '../../img/new/103.png';
import icon4 from '../../img/new/104.png';
import icon5 from '../../img/new/105.png';
import icon6 from '../../img/new/106.png';
import icon7 from '../../img/icon/hotel_1_7.svg';

import image1 from '../../img/new/135.png';
import image2 from '../../img/new/136.png';
import image3 from '../../img/new/137.png';
import image4 from '../../img/new/138.png';
import image5 from '../../img/new/139.png';
import image6 from '../../img/new/140.png';
import image7 from '../../img/hotel/hotel_2_7.jpg';



const amenities = [
   {
      title: 'AZIM Facilities Management & services',
      icon: icon1,
      image: image1,
   },
   {
      title: 'One Way Limousine WLL',
      icon: icon2,
      image: image2,
   },
   {
      title: 'VenYou Events',
      icon: icon3,
      image: image3,
   },
   {
      title: 'Najila Food Trading',
      icon: icon4,
      image: image4,
   },
   {
      title: 'Golden Vision Cleaning and Hospitality Services',
      icon: icon5,
      image: image5,
   },
   {
      title: 'Vadakara To Kasargod Restaurant',
      icon: icon6,
      image: image6,
   },
   // {
   //    title: 'Swimming Pool',
   //    icon: icon7,
   //    image: image7,
   // },
];

const ClickHandler = () => {
   window.scrollTo(10, 0);
}

const HotelAreaS2 = (props) => {
   const [activeIndex, setActiveIndex] = useState(0);
   const backgroundImage = amenities[activeIndex].image;
   return (
      <div
         className={"" + props.hclass}
         style={{ backgroundImage: `url(${backgroundImage})` }}
      >
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-lg-5">
                  <div className="title-area text-center space">
                     <span className="sub-title2">Service</span>
                     <h2 className="sec-title">Our Services</h2>
                     <p className="fs-18 mt-30">
                        We are a Group of companies
Empowering Growth, Uniting Excellence to Shape Tomorrow's Success
AZIM Group is a constellation of enterprises at the heart of Qatar's
 dynamic business landscape. With seven unique companies under our banner,
  we orchestrate services to deliver unmatched value across diverse industries

                     </p>
                  </div>
               </div>
            </div>

            <div className="row">
               <div className="col-xl-12 hotel-card2_wrapp">
                  {amenities.map((item, index) => (
                     <div
                        key={index}
                        className={`hotel-card2 hover-item ${index === activeIndex ? 'item-active' : ''
                           }`}
                        onMouseEnter={() => setActiveIndex(index)}
                     >
                        <div className="box-icon" style={{backgroundColor:'#01776E'}}>
                           <img src={item.icon} alt="Icon" />
                        </div>
                        <div className="box-content">
                           <div className="box-img">
                              <img src={item.image} alt="" />
                           </div>
                           <h3 className="box-title">{item.title}</h3>
                           <div>
                              <Link onClick={ClickHandler} to="/room" className="th-btn style2">
                                 View Details
                              </Link>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
         <div className="circle-line">
            <img src={ImageShape} alt="" />
         </div>
      </div>
   );
};

export default HotelAreaS2;


