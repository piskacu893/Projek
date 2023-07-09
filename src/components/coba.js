import React from 'react';
import Styles from "../components/coba.css";

const testimonials = [
  {
    name: 'John Doe',
    image: 'john.jpg',
    rating: 5,
    comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu felis sem.',
  },
  {
    name: 'Jane Smith',
    image: 'jane.jpg',
    rating: 4,
    comment: 'Aenean at leo id est facilisis eleifend. Vivamus consectetur leo id mi pulvinar varius.',
  },
  {
    name: 'Mike Johnson',
    image: 'mike.jpg',
    rating: 4,
    comment: 'Nulla gravida mauris non metus commodo, in consequat ligula aliquam.',
  },
];

const Testimonial = ({ testimonial }) => (
  <div className="testimonial">
    <img src={testimonial.image} alt={testimonial.name} />
    <h3>{testimonial.name}</h3>
    <p>{testimonial.comment}</p>
    <div className="rating">
      {Array.from({ length: testimonial.rating }, (_, index) => (
        <img key={index} src="star.png" alt="Star" />
      ))}
      <span className="caption">
        {testimonial.rating} out of 5 <em>stars</em>
      </span>
    </div>
  </div>
);

const App = () => (
  <div className="app">
    <h1>Client Testimonials</h1>
    <div className="testimonials-container">
      {testimonials.map((testimonial, index) => (
        <Testimonial key={index} testimonial={testimonial} />
      ))}
    </div>
  </div>
);

export default App;