import React, { useRef } from "react";
import Button from "../UI/Button";

import styles from "./EventSearch.module.css";

const EventSearch = (props) => {
  const selectedYearRef = useRef();
  const selectedMonthRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const selectedYear = selectedYearRef.current.value;
    const selectedMonth = selectedMonthRef.current.value;

    props.onSearch(selectedYear, selectedMonth);
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <div className={styles.controls}>
        <div className={styles.control}>
          <label htmlFor="year">Year</label>
          <select id="year" ref={selectedYearRef}>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>
        <div className={styles.control}>
          <label htmlFor="month">Month</label>
          <select id="month" ref={selectedMonthRef}>
            <option value="1">01</option>
            <option value="2">02</option>
            <option value="3">03</option>
            <option value="4">04</option>
            <option value="5">05</option>
            <option value="6">06</option>
            <option value="7">07</option>
            <option value="8">08</option>
            <option value="9">09</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
          </select>
        </div>
      </div>
      <Button>Find Events</Button>
    </form>
  );
};

export default EventSearch;
