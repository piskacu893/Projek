import React from "react";
import Pangeran from "../img/Curug-Pangeran-Bogor.webp";
import { Link } from "react-router-dom";
const Curug1= () => {
  return (
    <div style={{width: 0, height: 0, position: 'relative', background: '#EAE8E6'}}>
 
  <div style={{width: 1449, height: 1022, left: 49, top: 95, position: 'absolute'}}>
    <div style={{left: 450, top: 1, position: 'absolute', textAlign: 'justify', color: 'black', fontSize: 50, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word'}}>Pangeran</div>
    <div style={{width: 141, height: 100, left: 87, top: 430, position: 'absolute'}}>
      <div style={{width: 800, height: 150, left: 70, top: 0, position: 'absolute', background: '#E3E1E1', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 15}}></div>
      <div style={{width: 1448, height: 277, left: 100, top: 30, position: 'absolute', textAlign: 'justify', color: 'black', fontSize: 12, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word'}}>Curug Pangeran adalah salah satu obyek wisata alam yang ada di Bogor, Jawa Barat. Curug ini terletak di kaki gunung Bunder yang masuk dalam <br/>kawasan Taman Nasional Gunung Halimun Salak Dinamakan Curug ‘Pangeran’ karena dipercaya, dulu di sinilah para pangeran kerajaan jaman dahulu<br/> melaksanakan upacara mandi yang sakral sebelum menjadi seorang raja. Yang menarik dari Curug Pangeran adalah tempat wisata ini belum terlalu ramai <br/>didatangi oleh wisatawan sehingga kamu dapat menikmati privasi dan merasakan sensasi mandi layaknya seorang pangeran dari kerajaan di Sunda </div>
    </div>
    <div style={{width: 195, height: 53, left: 37, top: 121, position: 'absolute'}}>

   
    <Link to="/Booking">
          <button
            style={{
              width: 120,
              height: 40,
              left: 140,
              top: 500,
              position: "absolute",
              color: "white",
              fontSize: 16,
              fontFamily: "Poppins",
              fontWeight: "40",
              wordWrap: "break-word",
              background: "#4CAF50",
              borderRadius: 30,
            }}
          >
            Explore Now
          </button>
        </Link>
    </div>
    <img style={{width: 450, height: 300, left: 350, top: 97, position: 'absolute', borderRadius: 10}} src={Pangeran} alt="Gambar 2 - Curug Cilembu" />
 
  </div>
  <div style={{width: 1440, height: 22, position: 'relative'}}>
  <div style={{width: 1210, height: 200, left: 0, top: 916, position: 'absolute', background: '#166534', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderLeft: '0.50px black solid', borderTop: '0.50px black solid', borderRight: '0.50px black solid', borderBottom: '0.50px black solid'}} />
  <div style={{width: 1000, height: 150, left: 135, top: 948, position: 'absolute', background: 'rgba(255, 255, 255, 0.49)', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 10}} />
  <div style={{left: 600, top: 950, position: 'absolute', color: '#FFFDFD', fontSize: 23, fontFamily: 'Poppins', fontStyle: 'italic', fontWeight: '600', wordWrap: 'break-word'}}>Copyright</div>
  <div style={{left: 560, top: 1050, position: 'absolute', color: '#FFFDFD', fontSize: 28, fontFamily: 'Poppins', fontStyle: 'italic', fontWeight: '600', wordWrap: 'break-word'}}>Curug Indonesia</div>
  <div style={{left: 530, top: 1009, position: 'absolute', color: '#FFFDFD', fontSize: 20, fontFamily: 'Poppins', fontStyle: 'italic', fontWeight: '600', wordWrap: 'break-word'}}>Bogor, Jawa Barat, Indonesia</div>
</div>

  
</div>
  );
};

export default Curug1;
