import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1>Todo List</h1>
      <nav>
        <div>
          <ul>
            <li>
              <NavLink
                to="home"
                className={({ isActive }) => isActive && "active"}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="about"
                className={({ isActive }) => isActive && "active"}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="list"
                className={({ isActive }) => isActive && "active"}
              >
                TodoList
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
