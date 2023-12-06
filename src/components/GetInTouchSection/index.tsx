import SocialMediaList from "../UI/SocialMediaList";

const GetInTouchSection = () => {
  return (
    <section
      className="section-get-in-touch"
      aria-labelledby="get-in-touch-title"
    >
      <h2 className="section-get-in-touch__title" id="get-in-touch-title">
        Entrer en contract
      </h2>
      <div className="section-get-in-touch__wrapper">
        <p className="section-get-in-touch__description">
          J’aimerais savoir sur quoi vous travaillez et comment je pourrais vous
          aider. Je suis Je suis actuellement à la recherche d’un nouveau poste
          et je suis ouvert à Ma préférence serait de trouver un poste dans une
          entreprise Londres. Mais je suis également heureux d’entendre parler
          d’opportunités qui ne correspondent pas de cette description. Je suis
          une personne qui travaille fort et qui aborder chaque tâche avec un
          sens du but et une attention aux détails. N’hésitez pas à consulter
          mes profils en ligne ci-dessous et à entrer toucher en utilisant le
          formulaire.
        </p>
        <SocialMediaList />
      </div>
    </section>
  );
};

export default GetInTouchSection;
