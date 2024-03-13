import "./Home.css";
import products from "../data/Car.json";
import { Link } from "react-router-dom";
import Card from "../componat/Card";

const Home = () => {
  const productsArray = products.jdm_cars;

  return (
    <>
      <div className="cardContainer">
        {productsArray.map((product) => (
          <Card
            make={product.make}
            model={product.model}
            year={product.year}
            engine={product.engine}
            transmission={product.transmission}
            image={product.image}
            estimated_value_cad={product.estimated_value_cad}
            link={"/product/:id" + product.id}
          />
        ))}
      </div>
    </>
  );
};

export default Home;
