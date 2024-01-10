import { useRef } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/images/new-logo.svg";
import "./navbar.css";

export default function Navbar() {
  const navigate = useNavigate();
  const id = useRef(true);

  const handleClickScroll = () => {
    id.current = !id.current;
    navigate(`/?id=${id.current}`);
    // const element = document.getElementById("contact")
    // if(element) {
    //     element.scrollIntoView({behavior: "smooth"});
    // }
  };

  return (
    <>
      <nav className="nav">
        <Link to="/" className="site-title">
          <img src={Logo} alt="main-logo" />
        </Link>
        <ul className="menu">
          <NavLink
            to="/cursuri"
            style={({ isActive }) => {
              return { color: isActive ? "#BA5624" : "#17255A" };
            }}
          >
            CURSURI
          </NavLink>

          <NavLink
            to="/despre-noi"
            style={({ isActive }) => {
              return { color: isActive ? "#BA5624" : "#17255A" };
            }}
          >
            DESPRE NOI
          </NavLink>
        </ul>
        {/* <NavLink to="/?id=contact" className="contact-button"> */}
        <button className="contact-button" onClick={handleClickScroll}>
          CONTACTEAZĂ-NE
        </button>
        {/* </NavLink> */}
      </nav>
    </>
  );
}

// function CustomLink ({ to, children, ...props}) {

//         const resolvedPath = useResolvedPath(to)
//         const isActive = useMatch({path: resolvedPath.pathname,
//                                     end: true })

//     return (
//         <li className={isActive ? "active" : ""}>
//             <Link to={to} {...props}>{children}</Link>
//         </li>
//     )
//  }
