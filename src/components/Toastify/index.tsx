import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function Toastify() {
  return (
    <ToastContainer
      theme="colored"
      autoClose={5000}
      position="bottom-center"
    />
  );
}
