import { FC, ReactNode } from "react";
import { createPortal } from "react-dom";
import LetterIcon from "../../../assets/icons/Letter";
import CheckCircleIcon from "../../../assets/icons/CheckCircle";
import CloseCircleIcon from "../../../assets/icons/CloseCircle";
import SpinnerLoading from "../SpinnerLoading/Spinner";

type NotificationProps = {
  status: string;
  title: string;
  children: ReactNode;
};

const Notification: FC<NotificationProps> = ({ status, title, children }) => {
  const portalElement = document.getElementById("notifications")! as Element;

  const notificationHTML = (
    <div className="notification">
      <div
        className={`notification__icon-left notification__icon-left--${status}`}
      >
        <LetterIcon />
      </div>
      <div className="notification__content">
        <h4 className={`notification__title notification__title--${status}`}>
          {title}
        </h4>
        <p className="notification__message">{children}</p>
      </div>
      <div
        className={`notification__icon-right notification__icon-right--${status}`}
      >
        {status === "pending" && <SpinnerLoading />}
        {status === "failure" && <CloseCircleIcon />}
        {status === "success" && <CheckCircleIcon />}
      </div>
    </div>
  );

  return createPortal(notificationHTML, portalElement);
};

export default Notification;
