import React from 'react';
import Tour from './Tour';
const Tours = ({ tours, removeTour }) => {
  return (
    <section className="title">
      <h2>Our Tours</h2>
      <div className="underline"></div>
      {tours.map(tour => {
        return (
          <Tour removeTour={removeTour} key={tour.id} {...tour}></Tour>
        )
      })}
    </section>
  )
};

export default Tours;
