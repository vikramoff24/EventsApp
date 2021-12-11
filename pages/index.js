import React from "react";
import { getFeaturedEvents } from "../dummy-data";

const HomePage = () => {
  const featuredEvents = getFeaturedEvents();
  return <div>List of featured events</div>;
};

export default HomePage;
