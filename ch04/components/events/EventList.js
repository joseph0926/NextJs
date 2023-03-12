import React from "react";

import EventItem from "./EventItem";

import styles from "./EventList.module.css";

const EventList = (props) => {
  const { items } = props;

  return (
    <ul className={styles.list}>
      {items.map((item) => {
        return <EventItem key={item.id} id={item.id} title={item.title} image={item.image} location={item.location}></EventItem>;
      })}
    </ul>
  );
};

export default EventList;
