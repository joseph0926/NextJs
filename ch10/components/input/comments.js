import { useState, useEffect, useContext } from "react";

import CommentList from "./comment-list";
import NewComment from "./new-comment";
import NotificationContext from "../../store/notification-context";

import classes from "./comments.module.css";

function Comments(props) {
  const notificationCtx = useContext(NotificationContext);
  const { showNotification } = notificationCtx;

  const { eventId } = props;

  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([]);
  const [isFetchingComment, setIsFetchingComment] = useState(false);

  useEffect(() => {
    if (showComments) {
      setIsFetchingComment(true);
      fetch("/api/comments/" + eventId)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          setComments(data.comments);
          setIsFetchingComment(false);
        });
    }
  }, [showComments]);

  function toggleCommentsHandler() {
    setShowComments((prevStatus) => !prevStatus);
  }

  function addCommentHandler(commentData) {
    showNotification({
      title: "Registering comment,,,",
      message: "registering comments. Please wait.",
      status: "pending",
    });

    fetch("/api/comments/" + eventId, {
      method: "POST",
      body: JSON.stringify(commentData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return response.json().then((data) => {
          throw new Error(data.message || "Error,,,");
        });
      })
      .then((data) => {
        showNotification({
          title: "Success!!!",
          message: "comment registration successful.",
          status: "success",
        });
      })
      .catch((err) => {
        showNotification({
          title: "Error,,,",
          message: err.message || "Error,,,",
          status: "error",
        });
      });
  }

  return (
    <section className={classes.comments}>
      <button onClick={toggleCommentsHandler}>{showComments ? "Hide" : "Show"} Comments</button>
      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {showComments && !isFetchingComment && <CommentList comments={comments} />}
      {showComments && isFetchingComment && <p>Loading,,,</p>}
    </section>
  );
}

export default Comments;
