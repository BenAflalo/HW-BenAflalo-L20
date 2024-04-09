import React from "react";
import { useFlights } from "../context/FlightsProvider";
import { storageService } from "../services/storageService";

const AddFlightPage = () => {
  const { flights, setFlights, navigate, flight, setFlight } = useFlights();

  const showAllflights = () => {
    setFlights(storageService.getFlights());
  };
  const goToDeletePage = () => {
    navigate("/controlpanel/delete");
  };
  const goToFilteredPage = () => {
    navigate("/controlpanel/sort");
  };
  const handleChange = (e) => {
    setFlight({ ...flight, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const allFlights = storageService.getFlights();
    const id = flight.id;
    const check = allFlights.find((flight) => flight.id === id);
    if (!flight.id || !flight.company || !flight.passengers)
      return alert("Missing info");
    if (check) return alert("ID already exist");
    if (!flight.company) return alert("There is no company");
    if (flight.passengers > 450 || flight.passengers < 1)
      return alert("passangers can be between 1 to 450");

    storageService.saveFlights([...allFlights, flight]);
    setFlights([...allFlights, flight]);
    navigate("/controlpanel");
  };

  return (
    <div>
      <div>
        <button onClick={() => showAllflights()}>All flights</button>
        <button onClick={() => goToFilteredPage()}>Filter flights </button>
        <button onClick={() => goToDeletePage()}>Delete flight</button>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <label> Flight ID</label>
          <input
            type="number"
            placeholder="Flight ID"
            maxLength={5}
            name="id"
            onChange={handleChange}
          />
        </div>
        <div>
          <label> Flight company</label>
          <input
            type="text"
            placeholder="Flight company"
            minLength={1}
            name="company"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Passengers capacity </label>
          <input
            type="number"
            placeholder="Passengers"
            name="passengers"
            onChange={handleChange}
          />
        </div>
        <button>Add</button>
      </form>
    </div>
  );
};

export default AddFlightPage;
