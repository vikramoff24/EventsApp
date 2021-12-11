import React from "react";
import EventItem from "./event-item";

const eventList = (props) => {
  const { items } = props;
  return (
    <ul>
      {items.map((item) => (
        <EventItem />
      ))}
    </ul>
  );
};

export default eventList;
