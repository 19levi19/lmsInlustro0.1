import React, { useState } from 'react';
import "./settings.scss";
function NotifSettings() {
  const [notificationPrefs, setNotificationPrefs] = useState({
    email: true,
    sms: false,
    push: true
  });
  

  const handleNotificationChange = (event) => {
    const { name, checked } = event.target;
    setNotificationPrefs((prevState) => ({
      ...prevState,
      [name]: checked
    }));
  };

  return (


    <div>
      <h2>Notification Settings</h2>
      <label>
        Email:
        <input
          type="checkbox"
          name="email"
          checked={notificationPrefs.email}
          onChange={handleNotificationChange}
        />
      </label>
      <label>
        SMS:
        <input
          type="checkbox"
          name="sms"
          checked={notificationPrefs.sms}
          onChange={handleNotificationChange}
        />
      </label>
      <label>
        Push Notifications:
        <input
          type="checkbox"
          name="push"
          checked={notificationPrefs.push}
          onChange={handleNotificationChange}
        />
      </label>
    </div>
  );
}

export default NotifSettings;
