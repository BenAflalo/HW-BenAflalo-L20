import React, { createContext, useContext, useEffect, useState } from "react";
import { storageService } from "../services/storageService";
import { useNavigate } from "react-router-dom";

const FlightsContext = createContext(null);

const FlightsProvider = ({ children }) => {
  const [flights, setFlights] = useState(storageService.getFlights());
  const [flight, setFlight] = useState(null);

  const navigate = useNavigate();

  const value = { flights, setFlights, navigate, flight, setFlight };

  return (
    <FlightsContext.Provider value={value}>{children}</FlightsContext.Provider>
  );
};

export default FlightsProvider;

export const useFlights = () => useContext(FlightsContext);
