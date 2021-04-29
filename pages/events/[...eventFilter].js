import React from "react";
import { getFilteredEvents } from "../../dummy-data";
import { useRouter } from "next/router";
import EventList from "../../components/events/EventList";
import ResultsTitle from "../../components/events/results-title";
import ErrorAlert from "../../components/UI/error-alert";
import Button from "../../components/UI/Button";

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
    return (
      <>
        <ErrorAlert>
          <p>Invalid filter</p>
        </ErrorAlert>
        <div className="center">
          <Button>Show All Events</Button>
        </div>
      </>
    );
  }

  console.log(numYear, numMonth);

  const filteredEvents = getFilteredEvents({ year: numYear, month: numMonth });

  console.log(filteredEvents);

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <>
        <ErrorAlert>
          <p>No Events found for the filter</p>
        </ErrorAlert>
        <div className="center">
          <Button>Show All Events</Button>
        </div>
      </>
    );
  }

  const date = new Date(numYear, numMonth - 1);

  return (
    <>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </>
  );
};

export default EventFilter;
