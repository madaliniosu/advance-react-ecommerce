import "./footer.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/soft-logo.svg";
import Facebook from "../../assets/images/facebook-icon.svg";
import Messanger from "../../assets/images/messenger-icon.svg";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <Link to="/">
        <img src={Logo} alt="main-logo" className="FooterIcons" />
      </Link>
      <div>
        <a
          href="https://www.facebook.com/"
          aria-label="Facebook"
          rel="noreferrer"
          target="_blank"
        >
          <img src={Facebook} alt="facebook-logo" className="FooterIcons" />
        </a>
        <a
          href="https://www.facebook.com/"
          aria-label="Facebook"
          rel="noreferrer"
          target="_blank"
        >
          <img src={Messanger} alt="messanger-logo" className="FooterIcons" />
        </a>
      </div>
      <p> COPYRIGHT © {currentYear} ADVANCE SRL TOATE DREPTURILE REZERVATE</p>
    </footer>
  );
}

export default Footer;
