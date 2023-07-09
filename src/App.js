import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Index from "./Pages/Index"
import Reservasi from "./Pages/Reservasi";
import Destinasi from "./Pages/Destinasi";
import Navigation from "./components/Navigation";
import Review from "./Pages/Review";
import Footer from "./components/footer";
import Cilember from "./components/Cilember";
import Putrikencana from "./components/Putrikencana";
import Leuwihejo from "./components/Leuwihejo";
import Pangeran from "./components/Pangeran";

const App = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="Destination" element={<Destinasi />} />
        <Route path="Booking" element={<Reservasi />} />
        <Route path="Ulasan" element={<Review />} />
        <Route path="Footer" element={<Footer />} />
        <Route path="Cilember" element={<Cilember />} />
        <Route path="Putrikencana" element={<Putrikencana />} />
        <Route path="Leuwihejo" element={<Leuwihejo />} />
        <Route path="Pangeran" element={<Pangeran />} />
      </Routes>
    </Router>
  );
};

export default App;
