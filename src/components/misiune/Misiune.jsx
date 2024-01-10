import Statistici from "../../assets/images/statistici.svg";
import "./Misiune.css";

export default function Misiune() {
  return (
    <div className="MisiuneSection">
      <div className="MisiuneSectionText">
        <h2 id="MisiuneTitle">VIZIUNEA NOASTRA</h2>
        <h3>
          Misiunea noastra este dezvoltarea continua a carierei dvs, scopul
          nostru este de a facilita accesul la educatie pentru a va putea atinge
          potentialul maxim pe plan profesional.{" "}
        </h3>
        <img src={Statistici} alt="statistics" />
      </div>
    </div>
  );
}
