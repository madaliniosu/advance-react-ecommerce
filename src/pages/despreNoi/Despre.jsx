import "./despre.css";
import Contact from "../../components/contact/Contact.jsx";
import Misiune from "../../components/misiune/Misiune.jsx";
import Parteneri from "../../assets/images/parteneri.svg";

export default function Despre() {
  return (
    <div>
      <header className="DespreHeader">
        <h3 id="MotoTitle">MOTTO-UL NOSTRU</h3>
        <h1 id="Moto">Ai carte, ai parte!</h1>
      </header>
      <main>
        <section className="DespreDescriere">
          <p>
            Cu totii avem potentialul de a crea schimbare, fie la nivel
            personal, fie in comunitatea din care facem parte sau in lume. Acest
            potential este cel mai usor atins prin educatie. Pentru ca accesul
            la educatie este de multe ori restrans si limitat doar celor
            privilegiati, in 2001 ne-am propus sa schimbam acest “status quo” si
            sa facilitam accesul tuturor la educatie de calitate in scopul
            patrunderii pe piata muncii.
          </p>
          <p>
            Prin infiintarea platformei de e-learning ne dorim sa sporim
            accessul tuturor la educatie prin cursuri online, suporturi de curs
            disponibile non stop si inca ceva? Inca o propozieie aici, poate...
          </p>
        </section>
        <section className="Parteneri">
          <img src={Parteneri} alt="logo-parteneri" />
        </section>
      </main>
      <Misiune />
      <Contact />
    </div>
  );
}
