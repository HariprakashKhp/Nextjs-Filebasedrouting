import React from "react";
import { getFeaturedEvents } from "../dummy-data";
import EventList from "../components/events/EventList";

const HomePage = () => {
  const featuredEvent = getFeaturedEvents();
  return (
    <div>
      <ul>
        <EventList items={featuredEvent} />
      </ul>
    </div>
  );
};

export default HomePage;
