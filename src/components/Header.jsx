import "../styles/Header.css";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <div className="headerContainer">
        <div className="headerLogo">LOGO HERE</div>
        <div className="headerOptions">
          <NavLink to="/" className="headerOption1">
            Home
          </NavLink>
          <NavLink to="/shop" className="headerOption2">
            Shop
          </NavLink>
          <NavLink to="/about" className="headerOption3">
            About Us
          </NavLink>
        </div>
        <NavLink to="/cart" className="headerCartBtn">
          🛒
        </NavLink>
      </div>
    </div>
  );
}
