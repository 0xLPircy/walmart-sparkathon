// start a new trip page
import React from "react";
import { useStore } from "zustand";

const ExploreTripsPage = () => {
  const trips = useStore((state) => state.trips);
  return <div>ExploreTripsPage</div>;
};

export default ExploreTripsPage;
