import { Link } from "react-router-dom";
import "./DropdownMenu.css";

const DropdownMenu = () => {
  return (
    <>
      <div className="dropdown">
        <button className="dropbtn">Manu</button>
        <div className="dropdown-content">
          <Link to={"/"}>Home</Link>
          <Link to={"/product"}>Add Product</Link>
          <Link to={"/favorites"}>Favorites</Link>
        </div>
      </div>
    </>
  );
};

export default DropdownMenu;
