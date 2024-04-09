import React from "react";

const Flights = ({ flight }) => {
  return (
    <div className="flight-container">
      <p>{flight.id}</p>
      <p>{flight.company}</p>
      <p>{flight.passengers}</p>
    </div>
  );
};

export default Flights;
