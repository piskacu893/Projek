import React from "react";
import cilember from "../img/curug cilember 4.jpg";
import { Link } from "react-router-dom";
import Styles from "../components/curug.css";

const Cilember = () => {
  return (
    <div style={{  background: '#EAE8E6' }}>

      <div style={{ width: 1449, height: 1022, left: 49, top: 95, position: 'absolute' }}>
        <div style={{ left: 480, top: 1, position: 'absolute', textAlign: 'justify', color: 'black', fontSize: 50, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word' }}>Cilember</div>
        <div style={{ width: 0, height: -10, left: 87, top: 430, position: 'absolute' }}>
          <div style={{ width: 800, height: 150, left: 70, top: 0, position: 'absolute', background: '#E3E1E1', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 15 }}></div>
          <div style={{ width: 1448, height: 277, left: 80, top: 50, position: 'absolute', textAlign: 'justify', color: 'black', fontSize: 12, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word' }}>Keunikan Curug Cilember adalah memiliki tujuh titik air terjun. Mengutip situs Pemerintah Kabupaten BogorCurug Cilember mempunyai satu sumber mata air<br /> kemudian terbagi mengaliri tujuh titik air terjun.Jarak satu titik air terjun dengan lainnya kurang lebih 150 hingga 450 meter. Masing-masing air terjun memiliki<br /> kolam di bawahnya sehingga wisatawan dapat bermain di kolam tersebut. Setiap air terjun diberi nomor urut dari 1-7. Curug nomor 7 berada paling dekat dengan <br /> pintu masuk, atau sekitar 300 meter dari pintu kedatangan wisatawan.</div>
        </div>
        <div style={{ width: 195, height: 53, left: 37, top: 121, position: 'absolute' }}>


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
        <img style={{ width: 450, height: 300, left: 350, top: 97, position: 'absolute', borderRadius: 10 }} src={cilember} alt="Gambar 2 - Curug Cilembu" />

      </div>

      <div className="Group1" style={{width: 1200, height: 96, position: 'relative'}}>
  <div className="Rectangle1" style={{width: 1264, height: 96, left: 0, top: 954, position: 'absolute', background: '#008000', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'}} />
  <div className="2023YourCompanyAllRightsReserved" style={{left: 508, top: 990, position: 'absolute', color: 'white', fontSize: 20, fontFamily: 'Poppins', fontStyle: 'italic', fontWeight: '600', wordWrap: 'break-word'}}>© 2023  Trip Plan. All rights reserved</div>
</div>
   

    </div>
  );
};

export default Cilember;
