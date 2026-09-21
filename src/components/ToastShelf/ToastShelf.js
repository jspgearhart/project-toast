import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';
import { ToastArrayContext } from '../App';

function ToastShelf() {

  const { toastArray, setToastArray } = React.use(ToastArrayContext);

  function handleDismiss(id) { 
    const nextToastArray = toastArray.filter(item => item.id !== id);
    setToastArray(nextToastArray);
  };

  return (
    <ol className={styles.wrapper}>
      {toastArray?.map(item =>
          <li className={styles.toastWrapper} key={item.id}>
            <Toast variant={item.variant} handleDismiss={() => {handleDismiss(item.id)}}>
              {item.message}
            </Toast>
          </li>
        )}
    </ol>
  );
}

export default ToastShelf;
