import React from 'react';

import ToastPlayground from '../ToastPlayground';
import Footer from '../Footer';

export const ToastArrayContext = React.createContext();

function App() {
  const [toastArray, setToastArray] = React.useState([]);

  const value = { toastArray, setToastArray };

  return (
    <ToastArrayContext value={value}>
      <ToastPlayground />
      <Footer />
    </ToastArrayContext>
  );
}

export default App;
