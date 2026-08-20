import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({ toastArray }) {

  // JP: Need to make context that includes the toastArray so it can be used and updated from everywhere - 8.20.26 @ 3:10pm

  return (
    <ol className={styles.wrapper} key="toast-shelf">
      {toastArray.map(item => {
        return (
          <li>
            <Toast variant={item.variant} key={item.id}>
              {item.message}
            </Toast>
          </li>
        )
      })}
    </ol>
  );
}

export default ToastShelf;
