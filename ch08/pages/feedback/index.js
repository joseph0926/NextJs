import React, { Fragment, useState } from "react";

import { buildFeedbackPath, extractFeedback } from "../api/feedback";

const FeedbackPage = (props) => {
  const [feedbackData, setFeedBackData] = useState();

  const loadFeedbackHandler = (id) => {
    fetch(`/api/${id}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setFeedBackData(data.feedback);
      });
  };
  console.log(feedbackData);

  return (
    <Fragment>
      {feedbackData && <p>{feedbackData.email}</p>}
      <ul>
        {props.feedbackItems.map((item) => {
          return (
            <li id={item.id}>
              {item.text} <button onClick={loadFeedbackHandler.bind(null, item.id)}>Show Detail</button>
            </li>
          );
        })}
      </ul>
    </Fragment>
  );
};

export async function getStaticProps(context) {
  const filePath = buildFeedbackPath();
  const data = extractFeedback(filePath);

  return {
    props: {
      feedbackItems: data,
    },
  };
}

export default FeedbackPage;
