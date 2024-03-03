import { Link } from "react-router-dom";
import LOGO from "../assets/LOGO.png";

function Header() {
  return (
    <nav>
      <div className="header">
        <img src={LOGO} alt="logo Kasa" />
        <span className="header_nav">
          <Link to="/">Accueil</Link>
          <Link to="/a-propos">À propos</Link>
        </span>
      </div>
    </nav>
  );
}

export default Header;
