import React from "react";
import { getFilteredEvents } from "../../dummy-data";
import { useRouter } from "next/router";
import EventList from "../../components/events/EventList";

const EventFilter = () => {
  const Router = useRouter();
  const filterData = Router.query.eventFilter;
  if (!filterData) {
    return <p className="center">Loading...</p>;
  }

  const [year, month] = filterData;
  const numYear = +year;
  const numMonth = +month;

  if (isNaN(numYear) || isNaN(numMonth) || numMonth < 1 || numMonth > 12) {
    return <p>Invalid Filter</p>;
  }

  console.log(numYear, numMonth);

  const filteredEvents = getFilteredEvents({ year: numYear, month: numMonth });

  console.log(filteredEvents);

  if (!filteredEvents || filteredEvents.length === 0) {
    return <p>No Events found for the filter</p>;
  }

  return (
    <div>
      <EventList items={filteredEvents} />
    </div>
  );
};

export default EventFilter;
