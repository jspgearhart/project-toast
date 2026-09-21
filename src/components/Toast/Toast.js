import React from 'react';
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from 'react-feather';

import VisuallyHidden from '../VisuallyHidden';
import { ToastArrayContext } from '../App';

import styles from './Toast.module.css';

const ICONS_BY_VARIANT = {
  notice: <Info size={24} />,
  warning: <AlertTriangle size={24} />,
  success: <CheckCircle size={24} />,
  error: <AlertOctagon size={24} />,
};

function Toast({ variant, handleDismiss, children }) {

  const { toastArray, setToastArray } = React.use(ToastArrayContext);

  return (
    <div className={`${styles.toast} ${variant && styles[variant]}`}>
      <div className={styles.iconContainer}>
        {ICONS_BY_VARIANT[variant]}
      </div>
      <p className={styles.content}>
        {children}
      </p>
      <form onSubmit={event => {
        event.preventDefault();
        handleDismiss();
        }}>
        <button className={styles.closeButton}>
          <X size={24} />
          <VisuallyHidden>Dismiss message</VisuallyHidden>
        </button>
      </form>
    </div>
  );
}

export default Toast;
