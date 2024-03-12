import "./Home.css";
import products from "../data/Car.json";
import { Link, Outlet } from "react-router-dom";

const Home = () => {
  const productsArray = products.jdm_cars;

  return (
    <>
      <div className="cardContainer">
        {productsArray.map((product) => (
          <div className="card">
            <Link to={"/product/:id" + product.id} className="imageContainer">
              <img className="image" src={product.image}></img>
            </Link>
            <div className="info">
              <h1 className="modelName">{product.model}</h1>
              <p className="makeName">
                {product.make} - {product.year}
              </p>
              <p className="value">
                {new Intl.NumberFormat("en-US", {
                  currency: "CAD",
                  style: "currency",
                }).format(product.estimated_value_cad)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
