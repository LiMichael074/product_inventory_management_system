import { useState, useEffect } from "react";
import { getAllProducts } from "../../api/productApi";
import { CarsType } from "../types/Cars";
import Card from "../componat/Card";
import "./Home.css";

const Home = () => {
  const [Cars, setCars] = useState<CarsType[]>([]);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await getAllProducts();
        console.log(response.data.data);
        setCars(response.data.data);
      } catch (err) {
        console.error("Error fetching products", err);
      }
    };
    fetchCars();
  }, []);

  return (
    <>
      <div className="cardContainer">
        {Cars.map((car) => (
          <Card
            make={car.make}
            model={car.model}
            year={car.year}
            engine={car.engine}
            horsepower={car.horsepower}
            transmission={car.transmission}
            image={car.image}
            estimated_value_cad={car.estimated_value_cad}
            link={"/product/" + car._id}
          />
        ))}
      </div>
    </>
  );
};

export default Home;
