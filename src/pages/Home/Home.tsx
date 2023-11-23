import ContentSection from "../../components/ContentSection/ContentSection";
import IntroductionSection from "../../components/IntroductionSection/IntroductionSection";
import aboutMe from "../../../data/about-me.json";

const HomePage = () => {
  return (
    <>
      <IntroductionSection title={aboutMe.title} />
      <section
        className="content-section"
        aria-labelledby="content-section-title"
        id="about-me"
      >
        <ContentSection
          id="about-me"
          title="A propos de moi"
          button={{
            text: "Aller à Portefeuille",
            href: "/portfolio",
            buttonIsDisabled: false,
          }}
          picture={{
            desktop: {
              "1x": `${aboutMe.images.desktop["1x"]}`,
              "2x": `${aboutMe.images.desktop["2x"]}`,
            },
            tablet: {
              "1x": `${aboutMe.images.tablet["1x"]}`,
              "2x": `${aboutMe.images.tablet["2x"]}`,
            },
            mobile: {
              "1x": `${aboutMe.images.mobile["1x"]}`,
              "2x": `${aboutMe.images.mobile["2x"]}`,
            },
          }}
        >
          Je suis développeur front-end spécialisé dans le stack React/Next. Je
          suis à la recherche d'une nouvelle aventure dans une entreprise
          passionnante. Je me spécialise dans l'implémentation d'interfaces
          utilisateur interactives et conviviales. Mon objectif principal est de
          garantir leur fonctionnement optimal et performant sur diverses
          plateformes et navigateurs en utilisant les technologies telles que
          HTML, CSS, SASS et JS. Mon expertise s'étend à la création de
          composants réutilisables avec React et Next, ainsi qu'à l'intégration
          avec des services Back-End. En somme, ma priorité absolue est de créer
          des expériences utilisateur exceptionnelles.
        </ContentSection>
      </section>
    </>
  );
};

export default HomePage;
