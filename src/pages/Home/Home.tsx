import ContentSection from "../../components/ContentSection/ContentSection";
import IntroductionSection from "../../components/IntroductionSection/IntroductionSection";
import Avatar from "../../assets/images/homepage/desktop/image-homepage-profile.jpg";

const HomePage = () => {
  return (
    <>
      <IntroductionSection />
      <ContentSection
        id="about-me"
        title="A propos de moi"
        button={{
          text: "Aller à Portefeuille",
          href: "/portfolio",
          buttonIsDisabled: false,
        }}
        picture={{ src: Avatar, alt: "Avatar" }}
      >
        Je suis développeur front-end spécialisé dans le stack React/Next. Je
        suis à la recherche d'une nouvelle aventure dans une entreprise
        passionnante. Je me spécialise dans l'implémentation d'interfaces
        utilisateur interactives et conviviales. Mon objectif principal est de
        garantir leur fonctionnement optimal et performant sur diverses
        plateformes et navigateurs en utilisant les technologies telles que
        HTML, CSS, SASS et JS. Mon expertise s'étend à la création de composants
        réutilisables avec React et Next, ainsi qu'à l'intégration avec des
        services Back-End. En somme, ma priorité absolue est de créer des
        expériences utilisateur exceptionnelles.
      </ContentSection>
    </>
  );
};

export default HomePage;
