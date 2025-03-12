// import NavBar from "./reusableComponents/NavBar.styled";
import "../styles/Footer.css";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footerContainer">
        <div className="footerLogo">LOGO HERE</div>
        <div className="footerNavBar">
          <NavLink to="/" className="footerOption1">
            Home
          </NavLink>
          <NavLink to="/shop" className="footerOption2">
            Shop
          </NavLink>
          <NavLink to="/about" className="footerOption3">
            About Us
          </NavLink>
        </div>
        <div className="footerDesc">
          <p>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ex
            sem, pretium in ligula id, viverra imperdiet sem. In euismod neque
            ac mi congue suscipit. Donec et efficitur nisl. Integer eu odio
            lacus. Curabitur gravida nunc eu dictum vestibulum. In sodales quam
            nunc, sit amet laoreet mi pretium nec.
          </p>
          <br />
          <p>Ztnix© 2025</p>
        </div>
      </div>
    </div>
  );
}
