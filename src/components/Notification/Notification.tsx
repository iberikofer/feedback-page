import React from 'react';
import type { FC } from 'react';
import css from './Notification.module.css';

interface NotificationProps {
  message?: string;
  title?: string;
}

export const Notification: FC<NotificationProps> = ({
  message = 'There is no feedback yet',
  title = 'No Feedback Given',
}) => {
  return (
    <div className={css.container} role="status" aria-live="polite">
      <span className={css.icon} role="img" aria-hidden="true">
        📊
      </span>
      <h3 className={css.title}>{title}</h3>
      <p className={css.message}>{message}</p>
    </div>
  );
};

export default Notification;
