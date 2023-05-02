import { NavLink } from "react-router-dom";
import "../styles/layouts/Header.scss";

const Header = () => {
  return (
    <header className="header">
      <nav className="header--nav">
        <NavLink
          to={"/"}
          className={({ isActive, isPending }) =>
            isPending
              ? "pending header--link"
              : isActive
              ? "active header--link"
              : "header--link"
          }
        >
          <h1 className="header--title">
            LRM <i class="fa-solid fa-house"></i>
          </h1>
        </NavLink>
        <ul className="header--nav__ul">
          <li>
            <NavLink to={"/aboutme"} className="header--link">
              01. About me
            </NavLink>
          </li>
          <li>
            <NavLink to={"/projects"} className="header--link">
              02. Projects
            </NavLink>
          </li>
          <li>
            <NavLink to={"/contact"} className="header--link">
              03. Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
