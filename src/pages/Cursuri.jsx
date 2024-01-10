import "./cursuri.css";
import Card from "../components/card/Card.jsx";
import cursuriData from "../cursuri-data.js";
import Contact from "../components/contact/Contact.jsx";

export default function Cursuri() {
  const cursElements = cursuriData.map((curs) => {
    return (
      <Card
        key={curs.id}
        id={curs.id}
        title={curs.title}
        description={curs.description}
        date={curs.date}
        img={curs.image}
      />
    );
  });

  return (
    <div className="cursuri-page">
      {/* <section className="search-section">
                <div className="search-container">
                    <h3 className="search-title">CĂUTARE RAPIDĂ</h3>


                </div>

            </section> */}
      <section className="CursuriSection">
        <h2 className="CursuriTitle">Cursuri</h2>
        <div className="Cursuri">{cursElements}</div>
      </section>
      <Contact />
    </div>
  );
}
