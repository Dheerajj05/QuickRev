import { Link } from "react-router-dom";
import './header.css'
const Header = () => {
  const handleLogout = () => {
    localStorage.clear();
  };
  const named = JSON.parse(localStorage.getItem("userData")).user.username;
  return (
    <>
      <nav className="navbar navbar-inverse navbar-expand-lg fixed-top navbar-dark bg-dark">
        <Link to="/home" className="navbar-brand">

          QuickRev
        </Link>
        <div className="navbar container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link to="motivation" className="nav-link " >
                <i className="fab fa-angellist text-color">&nbsp;Need Motivation</i>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                <i className="fas fa-address-card text-color">&nbsp;About</i>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">
                <i className="fas fa-id-badge text-color">&nbsp;Contact</i>
              </Link>
            </li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a
                href="#"
                style={{
                  textDecoration: "none",
                  color: "white",
                  margin: "10px",
                }}
              >
                👨‍💻 <span>{named}</span>
              </a>
            </li>
            <li>
              <Link
                to="/"
                onClick={handleLogout}
                style={{
                  textDecoration: "none",
                  color: "white",
                  margin: "10px",
                }}
              >
                👨🏻‍💼 Logout
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
