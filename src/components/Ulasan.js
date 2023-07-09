import React from "react";
import cilembu from "../img/curugCilembu-review.jpg";
import pangeran from "../img/curugPangeran-review.jpg";
import leuwiHejo from "../img/curugLeuwiHejo-review.jpg";
import review1 from "../img/riviewer1.webp";
import review2 from "../img/riviewer2.webp";
import Styles from "../components/riview.css";

const Ulasan = () => {
  return (
    
    <div className="review-page">
      
      <header>
        <h1>Review</h1>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
      </header>
      <p style={{width: 280, height: 300, left: 200, top: 470, position: 'absolute', borderRadius: 10}}>Curug Leuwi Hejo</p>
      <p style={{width: 280, height: 300, left: 550, top: 470, position: 'absolute', borderRadius: 10}}>Curug Cilembu</p>
      <p style={{width: 280, height: 300, left: 870, top: 470, position: 'absolute', borderRadius: 10}}>Curug Pangeran</p>
      <section className="testimoni">
        <div className="testimoni-text">
          <h1>What Our Client Says..</h1>
        </div>

        <div className="box-container">
          <div className="box-1">
            <figure>
              <img style={{width: 280, height: 300, left: 135, top: 150, position: 'absolute', borderRadius: 10}} src={leuwiHejo} alt="Gambar 1 - Curug Leuwi Hejo" />
          
            
            </figure>
          </div>

          <div className="box-2">
            <figure>
              <img style={{width: 280, height: 300, left: 467, top: 150, position: 'absolute', borderRadius: 10}} src={cilembu} alt="Gambar 2 - Curug Cilembu" />
              <figcaption>Gambar 2 - Curug Cilembu</figcaption>
            </figure>
          </div>

          <div className="box-3">
            <figure>
              <img style={{width: 280, height: 300, left: 797, top: 150, position: 'absolute', borderRadius: 10}} src={pangeran} alt="Gambar 3 - Curug Pangeran" />
              <figcaption>Gambar 3 - Curug Pangeran</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <div className="testimoni-col">
        <div className="testimoni-1">
          <img
            src="https://assets.ayobandung.com/crop/0x0:0x0/750x500/webp/photo/bandungnewsphoto/2015-07/ori/dwi-0824.jpg"
            alt="Review 1"
          />
          <div>
            <p>
              Baru pertama kali ke curug setelah lihat website ini. Sesuai
              Ekseptasi banget, dengan budget yang murah dan tempat yang worth
              it.
            </p>
            <p>
              Tapi sayang, pas udah booking krn kuota penuh jadi dialihin ke
              hari lain
            </p>
            <h3>Vina Alviolina</h3>
            <div className="star-rating">
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star"></span>
            </div>
          </div>
        </div>

        <div className="testimoni-2">
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLJ5HqJ1glMny_GPZBO2iFDlkHd0zqHtV9CQ&usqp=CAU"
            alt="Review 2"
          />
          <div>
            <p>
              Web terpercaya banget. bisa langsung booking sesuai hari yang kita
              mau. Terlebih lagi tempatya bagus bangettt jadi mau kesana lagi,
              buat nyoba curug baru
            </p>
            <h3>Kemal Alfaruq</h3>
            <div className="star-rating">
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ulasan;
