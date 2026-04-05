import React, { createContext, useContext, useState, useCallback } from 'react';

const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);
  const [isRinging, setIsRinging] = useState(false);
  const [toast, setToast] = useState(null);

  const notify = useCallback((message, type = 'info') => {
    const newNotification = {
      id: Date.now(),
      message,
      type,
      timestamp: new Date(),
      read: false
    };

    setNotifications(prev => [newNotification, ...prev].slice(0, 50)); // Keep last 50
    setIsRinging(true);
    setToast(newNotification); // Track latest notification for toast UI
    
    // Auto-clear toast after 5s
    setTimeout(() => setToast(null), 5000);
    
    // Play a subtle notification sound (optional, browser-supported)
    // new Audio('/notification.mp3').play().catch(() => {});

    setTimeout(() => setIsRinging(false), 2000); // Ring for 2 seconds
  }, []);

  const markAllAsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
  };

  const clearAll = () => {
    setNotifications([]);
  };

  return (
    <NotificationContext.Provider value={{ notifications, isRinging, toast, notify, markAllAsRead, clearAll }}>
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotifications = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error('useNotifications must be used within a NotificationProvider');
  }
  return context;
};
