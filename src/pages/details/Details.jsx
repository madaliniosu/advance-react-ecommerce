import "./Details.css";
import { useParams } from "react-router-dom";
import cursuriData from "../../cursuri-data.js";
import Contact from "../../components/contact/Contact.jsx";
import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs.jsx";

const Details = () => {
  const { id } = useParams();
  const curs = cursuriData.find((curs) => curs.id === id);
  const { title, image, locations, durata, type, pret, competente } = curs;

  const locationsStr = locations.toString();
  const locationsSpace = locationsStr.replace(/,/g, ", ");

  const competenteList = competente.map((competenta) => (
    <li key={id}>{competenta}</li>
  ));

  return (
    <div className="DetailsPage">
      <Breadcrumbs />
      <section className="CursDetailsContainer">
        <div className="CursDetailsInfo CursDetails">
          <h1 className="DetailsTitle">{title}</h1>
          <p className="DetailsInfoText ">
            Am pregatit pentru tine un curs practic, numai bun ca tu sa incepi
            sa profesezi in aceasta meserie si sa te simti pregatit la locul de
            munca.
          </p>
          <div className="DetailsInfo">
            <div className="DetailsInfoItem">
              <i className="DetailsIcon fa-regular fa-clock"></i>
              <div>
                <p>
                  <strong>Durata</strong>
                </p>
                <p>{durata} ore</p>
              </div>
            </div>
            <div className="DetailsInfoItem">
              <i className="DetailsIcon fa-solid fa-graduation-cap"></i>
              <div>
                <p>
                  <strong>Tip</strong>
                </p>
                <p>{type}</p>
              </div>
            </div>
            <div className="DetailsInfoItem">
              <i className="DetailsIcon fa-solid fa-piggy-bank"></i>
              <div>
                <p>
                  <strong>Preț</strong>
                </p>
                <p>De la {pret}RON</p>
              </div>
            </div>
          </div>

          <p className="DetailsInfoText">
            <strong>Curs disponibil in: {locationsSpace}</strong>
          </p>
          <div className="DetailsParticipanti DetailsInfoText">
            <i className="sidebarIcon fa-regular fa-lightbulb"></i>
            <p className="DetailsParticipantiText">
              12 din 20 de cursanti deja inscrisi. Grabeste-te sa prinzi loc in
              urmatoarea sesiune!
            </p>
          </div>

          <div>
            <button className="hero-button DetailsButton">
              Vreau sa particip
            </button>
          </div>
        </div>

        <div className="CursDetailsImg CursDetails">
          <img
            className="CursDetailsImgFile"
            src={`../../../src/assets/cursCover/${image}`}
            alt={title}
          />
        </div>
      </section>

      <section className="OtherInfo">
        <div>
          <h3 className="OtherInfoTitle">
            CUI SE ADRESEAZA CURSUL DE {title.toUpperCase()}?
          </h3>
          <p>
            Cursul se adreseaza persoanelor care au absolvit invatamantul
            obligatoriu si care doresc sa se califice sau sa-si perfectioneze
            cunostintele in domeniul culinar.
          </p>
        </div>
        <div>
          <h3 className="OtherInfoTitle">
            CE COMPETENTE OBTIN DUPA ABSOLVIREA CURSULUI?
          </h3>
          <div>
            <ul className="CompetenteList">{competenteList}</ul>
          </div>
        </div>
        <div>
          <h3 className="OtherInfoTitle">
            CE TIP DE DIPLOMA SE ELIBEREAZA DUPA ABSOLVIREA CURSULUI?
          </h3>
          <p>
            Dupa absolvirea cursului se elibereaza un certificat de calificare
            recunoscut de Ministerul Muncii si Solidaritatii Sociale si
            Ministerul Educatiei, insotit de suplimentul descriptiv care atesta
            competentele dobandite.Certificatul de calificare are recunoastere
            internationala daca este tradus si apostilat.
          </p>
        </div>
        <div>
          <h3 className="OtherInfoTitle">
            CE ACTE SUNT NECESARE PENTRU INSCRIERE?
          </h3>
          <ul>
            <li>Carte de identitate</li>
            <li>Acte ultimele studii</li>
            <li>Certificat de nastere</li>
            <li>Certificat de casatorie</li>
            <li>Adeverinta medicala de la medicul de familie</li>
          </ul>
        </div>
      </section>

      <section className="Testimoniale">
        <h2>Ce spun absolventii cursurilor Advance</h2>
        <div className="TestimonialCardSection">
          <div className="TestimonialCard">
            <div className="TestimonialCardTitle">
              <img
                src="../../src/assets/testimoniale/testimonial1.png"
                alt="testimonial"
              />
              <div>
                <h4>Andrei Constatinescovici</h4>
                <p>Cursant</p>
              </div>
            </div>
            <p>
              Recomand tuturor celor care isi doresc sa se califice sa urmeze
              cursurile Advance.
            </p>
          </div>
          <div className="TestimonialCard">
            <div className="TestimonialCardTitle">
              <img
                src="../../src/assets/testimoniale/testimonial2.png"
                alt="testimonial"
              />
              <div>
                <h4>Andrei Constatinescovici</h4>
                <p>Cursant</p>
              </div>
            </div>
            <p>
              Recomand tuturor celor care isi doresc sa se califice sa urmeze
              cursurile Advance.
            </p>
          </div>
          <div className="TestimonialCard">
            <div className="TestimonialCardTitle">
              <img
                src="../../src/assets/testimoniale/testimonial3.png"
                alt="testimonial"
              />
              <div>
                <h4>Andrei Constatinescovici</h4>
                <p>Cursant</p>
              </div>
            </div>
            <p>
              Recomand tuturor celor care isi doresc sa se califice sa urmeze
              cursurile Advance.
            </p>
          </div>
        </div>
      </section>
      <Contact />
    </div>
  );
};

export default Details;
