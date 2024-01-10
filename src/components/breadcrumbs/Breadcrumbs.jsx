import { Link, useLocation } from "react-router-dom";
import "./breadcrumbs.css";
export default function Breadcrumbs() {
  const location = useLocation();

  let currentLink = "";
  console.log(location);

  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb) => {
      currentLink += `/${crumb}`;

      return (
        <div className="crumb" key={crumb}>
          <Link to={currentLink}>{crumb}</Link>
        </div>
      );
    });

  return <div className="breadcrumbs">{crumbs}</div>;
}
