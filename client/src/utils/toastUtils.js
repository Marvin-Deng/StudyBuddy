import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const showToast = (message, type) => {
  const toastConfig = {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    className: "custom-toast",
  };

  if (type === "error") {
    toastConfig.style = {
      backgroundColor: "#d9534f",
      color: "#fff",
    };
  } else if (type === "success") {
    toastConfig.style = {
      backgroundColor: "#5bc0de",
      color: "#fff",
    };
  }

  toast[type](message, toastConfig);
};
