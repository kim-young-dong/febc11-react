import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1>리엑트 라우터 = 02 리엑트 라우터 사용</h1>

      <NavLink
        className={({ isActive }) => (isActive ? "menu-dark" : "menu")}
        to="/"
      >
        Home
      </NavLink>
      <br />
      <NavLink
        className={({ isActive }) => (isActive ? "menu-dark" : "menu")}
        to="/about"
      >
        About
      </NavLink>
      <br />
      <NavLink
        className={({ isActive }) => (isActive ? "menu-dark" : "menu")}
        to="/contact"
      >
        Contact
      </NavLink>
      {/* <p>
        <Link to={"/"}>home</Link>
      </p>
      <p>
        <Link to={"/about"}>about</Link>
      </p>
      <p>
        <Link to={"/contact"}>contact</Link>
      </p> */}
    </header>
  );
}

export default Header;
