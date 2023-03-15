import React from "react";
import Link from "next/link";

import Button from "../UI/Button";

import DateIcon from "../icons/date-icon";
import AddressIcon from "../icons/address-icon";
import styles from "./EventItem.module.css";
import ArrowRightIcon from "../icons/arrow-right-icon";

const EventItem = (props) => {
  const { title, image, date, location, id } = props;

  const readableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const readableAddress = location.replace(", ", "\n");
  const exploreLink = `/events/${id}`;

  return (
    <li className={styles.item}>
      <img src={`/` + image}></img>
      <div className={styles.content}>
        <div className={styles.summary}>
          <h2>{title}</h2>
          <div className={styles.date}>
            <DateIcon></DateIcon>
            <time>{readableDate}</time>
          </div>
          <div className={styles.address}>
            <AddressIcon></AddressIcon>
            <address>{readableAddress}</address>
          </div>
        </div>
        <div className={styles.actions}>
          <Button link={exploreLink}>
            <span>Explore Event</span>
            <span className={styles.icon}>
              <ArrowRightIcon></ArrowRightIcon>
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
