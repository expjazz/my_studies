import { notification } from "./index";

const showNotification = () => {
  notification.classList.add("show");

  setTimeout(() => {
    notification.classList.remove("show");
  }, 5000);
};

export { showNotification };
