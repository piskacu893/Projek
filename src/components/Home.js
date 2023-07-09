import React from "react";
import { Link } from "react-router-dom";
import cilembu from "../img/istockphoto-160238476-612x612.jpg";

const Home = () => {
  return (
    <div>
      <div
        style={{
          width: 1210,
          height: 490,
          position: "relative",
          background: "#EAE8E6",
        }}
      >
        <img
          style={{
            width: 1210,
            height: 570,
            left: 0,
            top: 0,
            position: "absolute",
            borderRadius: 10,
          }}
          src={cilembu}
          alt="Gambar 2 - Curug Cilembu"
        />

        <div
          style={{
            left: 67,
            top: 250,
            position: "absolute",
            color: "#DCD89E",
            fontSize: 25,
            fontFamily: "Gafata",
            fontWeight: "400",
            wordWrap: "break-word",
          }}
        >
          Look with open eyes and you will see
          <br />
          the beauty of the waterfall
        </div>
        <div
          style={{
            left: 64,
            top: 330,
            position: "absolute",
            color: "#EAE8E6",
            fontSize: 15,
            fontFamily: "Gafata",
            fontWeight: "400",
            wordWrap: "break-word",
          }}
        >
          Anthony Hincks
        </div>
        
        <Link to="/Destination">
          <button
            style={{
              width: 120,
              height: 40,
              left: 70,
              top: 400,
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
    </div>
  );
};

export default Home;
