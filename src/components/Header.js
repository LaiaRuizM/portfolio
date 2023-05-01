import { Link } from "react-router-dom";
import "../styles/layouts/Header.scss";

const Header = () => {
  return (
    <header className="header">
      <nav className="header--nav">
        <Link to={"/"} className="header--link">
          <h1 className="header--title">
            LRM <i class="fa-solid fa-house"></i>
          </h1>
        </Link>
        <ul className="header--nav__ul">
          <li>
            <Link to={"/aboutme"} className="header--link">
              01. About me
            </Link>
          </li>
          <li>
            <Link to={"/projects"} className="header--link">
              02. Projects
            </Link>
          </li>
          <li>
            <Link to={""} className="header--link">
              03. Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
