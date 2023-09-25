import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Notification = () => {
  return null; // No need to render anything here
};

export const displayNotification = (message, options) => {
  toast(message, options);
};

export default Notification;
