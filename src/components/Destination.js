import React from "react";
import cilember from "../img/curug celember 1.jpg";
import kencana from "../img/curug kencana 2.jpg";
import leuwi from "../img/Curug Luewi Hejo 1.jpg";
import pangeran from "../img/curug Pangeran 1.jpg";
import { Link } from "react-router-dom";


const curugs = [
  {
    pict: cilember,
    alt: "Curug Cilember",
    path: "/Cilember" // Ubah path menuju halaman yang diinginkan
  },
  {
    pict: kencana,
    alt: "Curug Kencana",
    path: "/Putrikencana" // Ubah path menuju halaman yang diinginkan
  },
  {
    pict: leuwi,
    alt: "Curug Leuwi Hejo",
    path: "/Leuwihejo" // Ubah path menuju halaman yang diinginkan
  },
  {
    pict: pangeran,
    alt: "Curug Pangeran",
    path: "/Pangeran" // Ubah path menuju halaman yang diinginkan
  }
];


const Destination = () => {
  return (
    <>
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignitems: "center",
            justifyContent: "center",
            color: "black"
          }}
        >
          <h1 style={{ fontWeight: "bold", fontSize: "50px", margin: "auto" }}>
            Welcome to
          </h1>
          <h2
            style={{
              color: "#",
              marginBottom: "50px",
              marginTop: "15px",
              fontWeight: "bold",
              fontSize: "30px",
              margin: "auto"
            }}
          >
            Trip Plan Destination
          </h2>
        </div>

        <div className="grid grid-cols-4 gap-2 mx-24 justify-items-center">
          {curugs.map((items, index) => (
            <div
              class="w-60 p-2 bg-cream rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl items-center"
              key={index}
            >
              <img
                class="h-56 object-cover rounded-xl mx-auto"
                src={items.pict}
                alt={items.alt}
              />
              <div class="p-2">
                <h2 class="font-bold text-lg mb-2 ">{items.alt}</h2>
                <Link to={items.path}>
                  <button href='#' class="text-white bg-green-500 px-3 py-1 rounded-md hover:bg-green-400">
                    Explore Now
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div
          className="Group1"
          style={{
            width: 1200,
            height: 96,
            position: "relative",
            marginTop: "50px"
          }}
        >
          
          
          
        </div>
        <div className="Group1" style={{width: 1200, height: 96, position: 'relative'}}>
  <div className="Rectangle1" style={{width: 1264, height: 96, left: 0, top: 250, position: 'absolute', background: '#008000', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'}} />
  <div className="2023YourCompanyAllRightsReserved" style={{left: 495, top: 290, position: 'absolute', color: 'white', fontSize: 20, fontFamily: 'Poppins', fontStyle: 'italic', fontWeight: '600', wordWrap: 'break-word'}}>© 2023  Trip Plan. All rights reserved</div>
</div>
    
      </div>
    </>
  );
};

export default Destination;
