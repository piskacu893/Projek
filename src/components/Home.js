import React from "react";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import Putri from "../img/hamzah-hanafi-EjaM2vz4Rdc-unsplash.jpg";
import Kencana from "../img/mourizal-zativa-PVNFI44jCmY-unsplash (1).jpg";
import Curug1 from "../img/bagus-ghufron-zE1PZSdHmvg-unsplash.jpg";
import Curug2 from "../img/rafael-atantya-JwtTQaHl5Kw-unsplash.jpg";
import "../components/home.css";

const Home = () => {
  return (
    <div>
      <div className="carousel-container">
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          showStatus={false}
          showThumbs={false}
        >
          
          <div>
            <img
              className="carousel-image"
              src={Putri}
              alt="Waterfall"
            />
           
            
          </div>
          <div>
            <img
              className="carousel-image"
              src={Kencana}
              alt="Forest"
            />
            
          </div>
          <div>
            <img
              className="carousel-image"
              src={Curug1}
              alt="Waterfall"
            />
           
            
          </div>
          <div>
            <img
              className="carousel-image"
              src={Curug2}
              alt="Waterfall"
            />
           
            
          </div>
        </Carousel>
        
        <Link to="/Destination">
          <button className="explore-button">Explore Now</button>
        </Link>
      </div>
      <div className="carousel-text">
              <h1 className="carousel-title">Look with open eyes and you will see the beauty of the waterfall</h1>
            
              <p className="carousel-author">Anthony Hincks</p>
            </div>

            <div className="Group1" style={{width: 1200, height: 96, position: 'relative'}}>
  <div className="Rectangle1" style={{width: 1264, height: 96, left: 0, top: 842, position: 'absolute', background: '#008000', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'}} />
  <div className="2023YourCompanyAllRightsReserved" style={{left: 508, top: 880, position: 'absolute', color: 'white', fontSize: 20, fontFamily: 'Poppins', fontStyle: 'italic', fontWeight: '600', wordWrap: 'break-word'}}>© 2023  Trip Plan. All rights reserved</div>
</div>
    </div>
  );
};

export default Home;
