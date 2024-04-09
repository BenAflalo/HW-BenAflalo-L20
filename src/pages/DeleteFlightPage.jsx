import React, { useState } from "react";
import { useFlights } from "../context/FlightsProvider";
import { storageService } from "../services/storageService";

const DeleteFlightPage = () => {
  const { flights, setFlights, navigate } = useFlights();
  const [id, setId] = useState("");

  const showAllflights = () => {
    setFlights(storageService.getFlights());
  };
  const goToAddFlight = () => {
    navigate("/controlpanel/add");
  };
  const goToFilteredPage = () => {
    navigate("/controlpanel/sort");
  };
  const deleteFlight = () => {
    const allFlights = storageService.getFlights();
    const flightToDelete = allFlights.filter((flight) => flight.id === id);
    if (!flightToDelete.pop()) return alert("ID does not exist");
    const filteredFlights = allFlights.filter((flight) => flight.id !== id);
    setFlights(filteredFlights);
    storageService.saveFlights(filteredFlights);
    const total = filteredFlights.reduce(
      (acc, flight) => acc + parseInt(flight.passengers),
      0
    );
    alert(`Flight has beed deleted.
    Current flights in the system: ${filteredFlights.length}.
    Total number of passangers in flights: ${total}.`);
  };
  return (
    <div>
      {" "}
      <div>
        <button onClick={() => showAllflights()}>All flights</button>
        <button onClick={() => goToFilteredPage()}>Filter flights </button>
        <button onClick={() => goToAddFlight()}>Add flight</button>
      </div>
      <div>
        <label>Flight ID</label>
        <input
          type="number"
          name="id"
          placeholder="Flight ID"
          maxLength={5}
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <button onClick={deleteFlight}>Delete</button>
      </div>
    </div>
  );
};

export default DeleteFlightPage;
