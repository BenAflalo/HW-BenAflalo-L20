import React, { useRef, useState } from "react";
import { storageService } from "../services/storageService";
import { useFlights } from "../context/FlightsProvider";
import Flights from "../components/Flights";

const FilteredFlightsPage = () => {
  const [boolean, setBoolean] = useState(false);
  const [company, setCompany] = useState("");

  const { flights, setFlights, navigate } = useFlights();

  const changeBoolean = () => {
    setBoolean(!boolean);
  };

  const showAllflights = () => {
    setFlights(storageService.getFlights());
  };
  const goToAddFlight = () => {
    navigate("/controlpanel/add");
  };
  const goToDeletePage = () => {
    navigate("/controlpanel/delete");
  };
  const filterByCompany = (e) => {
    const companyName = e.target.value;
    setCompany(companyName);
    const allFlights = storageService.getFlights();
    const filteredFlights = allFlights.filter((flight) =>
      flight.company.includes(companyName)
    );

    setFlights(filteredFlights);
  };
  const filterByPassengersNumber = (e) => {
    const allFlights = storageService.getFlights();
    const highLow = e.target.value;
    console.log(highLow);
    if (highLow === "highest") {
      const sortedFlights = allFlights.sort((a, b) => {
        return parseInt(b.passengers) - parseInt(a.passengers);
      });
      setFlights(sortedFlights);
    } else {
      const sortedFlights = allFlights.sort((a, b) => {
        return parseInt(a.passengers) - parseInt(b.passengers);
      });
      setFlights(sortedFlights);
    }
  };
  return (
    <div>
      <div>
        <button onClick={() => showAllflights()}>All flights</button>
        <button onClick={() => goToAddFlight()}>Add flight</button>
        <button onClick={() => goToDeletePage()}>Delete flight</button>
        <input
          type="text"
          placeholder="Filter by company name"
          value={company}
          onChange={filterByCompany}
        />
        <select
          id="high-low"
          onClick={() => changeBoolean()}
          onChange={filterByPassengersNumber}
        >
          <option value="" disabled={boolean}>
            Choose
          </option>
          <option value="highest">Highest</option>
          <option value="lowest">Lowest</option>
        </select>
      </div>
      <div>
        {flights?.map((flight) => (
          <Flights key={flight.id} flight={flight} />
        ))}
      </div>
    </div>
  );
};

export default FilteredFlightsPage;
