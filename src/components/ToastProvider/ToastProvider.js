import React from 'react';
import useKeyDown
 from '../../hooks/use-keydown';
export const ToastContext = React.createContext();



function ToastProvider({children}) {

  const [toasts, setToasts] = React.useState([]);

  function createToast(message, variant){
    const newToast = {
      message,
      variant,
      id: crypto.randomUUID(),
    }
    const newArr = [...toasts, newToast];
    setToasts(newArr);
  }

  function deleteToast(id) {
    const newArr = toasts.filter((toast) => toast.id !== id);
    setToasts(newArr);
  }

  const keydownCallback = React.useCallback(() => {
    setToasts([]);
  }, []);

  useKeyDown('Escape', keydownCallback);

  return (
    <ToastContext.Provider
      value={{toasts, createToast, deleteToast}}
    >
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
