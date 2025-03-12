import Welcome from "../components/homeComponents/Welcome";
import Testimony from "../components/homeComponents/Testimony";
import Showcase from "../components/homeComponents/Showcase";
import "../styles/Home.css";
// import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <div className="homeContainer">
      <Welcome></Welcome>
      <Showcase></Showcase>
      <Testimony></Testimony>
    </div>
  );
}
