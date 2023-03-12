import { useRouter } from "next/router";
import EventList from "../../components/events/EventList";
import { getFilteredEvents } from "../../dummy-data";

const FilteredEventsDetailPage = () => {
  const router = useRouter();

  const filteredData = router.query.slug;
  if (!filteredData) {
    return <p className="center">Loading...</p>;
  }

  const year = filteredData[0];
  const month = filteredData[1];

  const numYear = parseInt(year);
  const numMonth = parseInt(month);

  if (isNaN(numYear) || isNaN(numMonth)) {
    return (
      <div>
        <h1>Error!</h1>
      </div>
    );
  }

  const events = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });
  if (!events || events.length === 0) {
    return <h1>Not Found Events</h1>;
  }

  return (
    <div>
      <EventList items={events}></EventList>
    </div>
  );
};
export default FilteredEventsDetailPage;
