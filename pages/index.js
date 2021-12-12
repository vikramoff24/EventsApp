import React from "react";
import EventList from "../components/event-list";
import { getFeaturedEvents } from "../dummy-data";

const HomePage = () => {
  const featuredEvents = getFeaturedEvents();
  return <EventList items={featuredEvents} />;
};

export default HomePage;
