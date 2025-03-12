import BlueNavLink from "../reusableComponents/BlueNavLink.styled";
import { NavLink } from "react-router-dom";
import hoodie from "../../assets/hoodie.jpg";
import sneakers from "../../assets/sneakers2.png";
import hat from "../../assets/hat.jpg";

export default function Showcase() {
  return (
    <div className="showcaseSection">
      <div className="showcaseContainer">
        <div className="showcase1">
          <div className="showcase1ImgContainer">
            <img src={hoodie} alt="" className="showcase1Img" />
          </div>
          <div className="showcase1Text">
            <h2 className="showcase1Title">Tacky Hoodie</h2>
            <p className="showcase1Desc">
              ¿Dont you love buying something to make you stand out in the worst
              possible way?
            </p>
            <BlueNavLink as={NavLink} to="/shop">
              See Products
            </BlueNavLink>
          </div>
        </div>
        <div className="showcase2">
          <div className="showcase2Text">
            <h2 className="showcase2Title">Clone Sneakers</h2>
            <BlueNavLink as={NavLink} to="/shop">
              See Products
            </BlueNavLink>
          </div>
          <div className="showcase2ImgContainer">
            <img src={sneakers} alt="" className="showcase2Img" />
          </div>
        </div>
        <div className="showcase3">
          <div className="showcase3ImgContainer">
            <img src={hat} alt="" className="showcase3Img" />
          </div>
          <div className="showcase3Text">
            <h2 className="showcase3Title">Cheap Hat</h2>
            <BlueNavLink as={NavLink} to="/shop">
              See Products
            </BlueNavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
