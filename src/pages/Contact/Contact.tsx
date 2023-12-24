import { useSelector } from "react-redux";
import ContactMeSection from "../../components/ContactMeSection";
import GetInTouchSection from "../../components/GetInTouchSection";
import TitleForAssistiveTechnologies from "../../components/TitleForAssistiveTechnologies/TitleForAssistiveTechnologies";
import Notification from "../../components/UI/Notification";

const ContactPage = () => {
  const notificationState = useSelector((state) => state.ui.notification);

  return (
    <>
      <TitleForAssistiveTechnologies title="Contact me page" />
      <GetInTouchSection />
      <ContactMeSection />
      {notificationState.isShown && (
        <Notification
          status={notificationState.status}
          title={notificationState.title}
        >
          {notificationState.message}
        </Notification>
      )}
    </>
  );
};

export default ContactPage;
