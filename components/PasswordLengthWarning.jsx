import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PasswordLengthWarning = ({ password }) => {
  const [isWarningVisible, setIsWarningVisible] = useState(false);

  const showWarning = () => {
    toast.warning('Your password should be at least 8 characters long.', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnFocusLoss: false,
      draggable: true,
      progress: undefined,
    });
    setIsWarningVisible(true);
  };

  return (
    <div>
      {password.length < 8 && !isWarningVisible && showWarning()}
    </div>
  );
};

export default PasswordLengthWarning;