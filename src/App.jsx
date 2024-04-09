import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import ControlPage from "./pages/ControlPage";
import FilteredFlightsPage from "./pages/FilteredFlightsPage";
import AddFlightPage from "./pages/AddFlightPage";
import DeleteFlightPage from "./pages/DeleteFlightPage";
import FlightsProvider from "./context/FlightsProvider";

const App = () => {
  return (
    <FlightsProvider>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/controlpanel" element={<ControlPage />} />
        <Route path="/controlpanel/sort" element={<FilteredFlightsPage />} />
        <Route path="/controlpanel/add" element={<AddFlightPage />} />
        <Route path="/controlpanel/delete" element={<DeleteFlightPage />} />
      </Routes>
    </FlightsProvider>
  );
};

export default App;
