import { NavLink } from "react-router-dom";
import BlueNavLink from "../reusableComponents/BlueNavLink.styled";

export default function Welcome() {
  return (
    <div className="welcomeSection">
      <div className="welcomeContainer">
        <h1 className="welcomeTitle">Generic Wish Reseller Store</h1>
        <p className="welcomeDesc">
          We have everything wish does but <br></br>at even worse prices and
          quality somehow!
        </p>
        {/* <NavLink to className="goToStore">See products</NavLink> */}
        <BlueNavLink as={NavLink} to="/shop">
          See Products
        </BlueNavLink>
      </div>
    </div>
  );
}
