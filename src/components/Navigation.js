import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="sticky z-10 bg-green-800">
      <ul className="flex items-center justify-center space-x-4 py-4">
        <li>
          <Link to="/" className="text-white">
            Home
          </Link>
        </li>
        <li>
          <Link to="/destination" className="text-white">
            Destination
          </Link>
        </li>
        <li>
          <Link to="/booking" className="text-white">
            Booking
          </Link>
        </li><li>
          <Link to="/Ulasan" className="text-white">
            Review
          </Link>
        </li>
     
      </ul>
    </nav>
  );
};

export default Navigation;
