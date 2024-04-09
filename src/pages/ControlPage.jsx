import React from "react";
import Flights from "../components/Flights";
import { storageService } from "../services/storageService";
import { useFlights } from "../context/FlightsProvider";

const ControlPage = () => {
  const { flights, setFlights, navigate } = useFlights();

  const showAllflights = () => {
    setFlights(storageService.getFlights());
  };
  const goToFilteredPage = () => {
    navigate("/controlpanel/sort");
  };
  const goToDeletePage = () => {
    navigate("/controlpanel/delete");
  };
  const goToAddFlight = () => {
    navigate("/controlpanel/add");
  };

  return (
    <section>
      <div>
        <button onClick={() => showAllflights()}>All flights</button>
        <button onClick={() => goToFilteredPage()}>Filter flights </button>
        <button onClick={() => goToDeletePage()}>Delete flight</button>

        <button onClick={() => goToAddFlight()}>Add flight</button>
      </div>

      <div>
        {flights?.map((flight) => (
          <Flights key={flight.id} flight={flight} />
        ))}
      </div>
    </section>
  );
};

export default ControlPage;
