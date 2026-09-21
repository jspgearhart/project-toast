import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';
import { ToastArrayContext } from '../App';

function ToastShelf() {

  const { toastArray, setToastArray } = React.use(ToastArrayContext);

  return (
    <ol className={styles.wrapper}>
      {toastArray?.map(item =>
          <li className={styles.toastWrapper} key={item.id}>
            <Toast variant={item.variant}>
              {item.message}
            </Toast>
          </li>
        )}
    </ol>
  );
}

export default ToastShelf;
