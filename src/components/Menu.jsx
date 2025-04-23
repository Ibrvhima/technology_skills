import { NavLink } from "react-router-dom";

function Menu() {
  return (
    <nav className="navbar navbar-expand-lg bg-primary px-3 mt-3 rounded shadow">
      <div className="container-fluid">
        <NavLink className="navbar-brand text-white fw-bold" to="/">
          TechnoSkills
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item mx-2">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `nav-link fw-semibold rounded px-3 py-2 ${
                    isActive ? "bg-light text-primary" : "text-white"
                  }`
                }
              >
                Accueil
              </NavLink>
            </li>
            <li className="nav-item mx-2">
              <NavLink
                to="/form"
                className={({ isActive }) =>
                  `nav-link fw-semibold rounded px-3 py-2 ${
                    isActive ? "bg-light text-primary" : "text-white"
                  }`
                }
              >
                Ajouter Techno
              </NavLink>
            </li>
            <li className="nav-item mx-2">
              <NavLink
                to="/list"
                className={({ isActive }) =>
                  `nav-link fw-semibold rounded px-3 py-2 ${
                    isActive ? "bg-light text-primary" : "text-white"
                  }`
                }
              >
                Liste des Technos
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Menu;
