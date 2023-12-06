import FormContact from "../Forms/FormContact";

const ContactMeSection = () => {
  return (
    <section className="section-contact-me" aria-labelledby="contact-me-title">
      <h2 className="section-contact-me__title" id="contact-me-title">
        Contacter-moi
      </h2>
      <FormContact />
    </section>
  );
};

export default ContactMeSection;
