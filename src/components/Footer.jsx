import Kasa from "../assets/kasa.png";
import LogoWhite from "../assets/LOGO_white.png";

function Footer() {
  return (
    <div className="footer">
      <img src={LogoWhite} alt="Logo blanc" className="footer_logo" />
      <img src={Kasa} alt="Kasa entreprise" />
    </div>
  );
}

export default Footer;
