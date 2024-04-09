const FLIGHTS_KEY = "flights";

export const storageService = {
  getFlights() {
    const Flights = localStorage.getItem(FLIGHTS_KEY);
    return Flights ? JSON.parse(Flights) : [];
  },
  //   getUser(id) {
  //     const Flights = this.getFlights();
  //     const user = Flights.filter((user) => user.id === id);
  //     return user.pop();
  //   },
  saveFlights(Flights) {
    localStorage.setItem(FLIGHTS_KEY, JSON.stringify(Flights));
  },
  goToDeletePage(id) {
    const Flights = this.getFlights();
    const updatedFlights = Flights.filter((flight) => flight.id !== id);
    this.saveFlights(updatedFlights);
    return updatedFlights;
  },
};
