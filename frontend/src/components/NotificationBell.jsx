import React, { useState, useEffect } from 'react';
import iconBell from '../../assets/icons/icon_bell.png';

export default function NotificationBell({ userId }) {
  const [unreadCount, setUnreadCount] = useState(0);

  return (
    <div className="dash-nav-icon-btn" title="Notifications">
      <img src={iconBell} alt="Notifications" />
      {unreadCount > 0 && <span className="dash-nav-notification-dot"></span>}
    </div>
  );
}
