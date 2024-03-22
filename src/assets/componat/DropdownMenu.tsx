import { Link } from "react-router-dom";
import "./DropdownMenu.css";
import MenuIcon from "./MenuIcon";

const DropdownMenu = () => {
  return (
    <>
      <div className="dropdown">
        <button className="dropbtn">
          <MenuIcon />
        </button>
        <div className="dropdown-content">
          <Link to={"/"}>Home</Link>
          <Link to={"/product"}>Add Product</Link>
          {/* <Link to={"/favorites"}>Favorites</Link> */}
        </div>
      </div>
    </>
  );
};

export default DropdownMenu;
