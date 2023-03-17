import React, { useState, useEffect } from "react";

const NotificationContext = React.createContext({
  notification: null,
  showNotification: (notification) => {},
  hideNotification: () => {},
});

export const NotificationContextProvider = (props) => {
  const [activeNotification, setActiveNotification] = useState();

  useEffect(() => {
    if (activeNotification && (activeNotification.status === "success" || activeNotification.status === "error")) {
      const timer = setTimeout(() => {
        setActiveNotification(null);
      }, 3000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [activeNotification]);

  const showNotificationHandler = (notificationData) => {
    setActiveNotification(notificationData);
  };
  const hideNotificationHandler = () => {
    setActiveNotification(null);
  };

  return (
    <NotificationContext.Provider
      value={{ notification: activeNotification, showNotification: showNotificationHandler, hideNotification: hideNotificationHandler }}
    >
      {props.children}
    </NotificationContext.Provider>
  );
};

export default NotificationContext;
