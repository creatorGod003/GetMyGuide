import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="flex flex-row items-center justify-between px-8 py-2">
      <ul className="flex flex-row items-center justify-evenly basis-1/4">
        <li>
          <Link to={"/"}>Brand</Link>
        </li>
      </ul>
      <ul className="flex flex-row items-center justify-evenly basis-3/4">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/about"}>About</Link>
        </li>
        <li>
          <Link to={"/contact"}>Contact Us</Link>
        </li>
        <li>
          <Link to={"/find"}>Find Buddy</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
