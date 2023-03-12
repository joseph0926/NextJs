import { useRouter } from "next/router";

import EventList from "../../components/events/EventList";
import EventSearch from "../../components/events/EventSearch";
import { getAllEvents } from "../../dummy-data";

const EvenstPage = () => {
  const router = useRouter();
  const events = getAllEvents();

  const searchHandler = (year, month) => {
    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath);
  };

  return (
    <div>
      <EventSearch onSearch={searchHandler}></EventSearch>
      <EventList items={events}></EventList>
    </div>
  );
};
export default EvenstPage;
