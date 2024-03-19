import { Link } from "react-router-dom";
import "./Card.css";

interface CarCardProps {
  make: string;
  model: string;
  year: number;
  engine: string;
  transmission: string;
  image: string;
  estimated_value_cad: number;
  link: string;
}

export default function Card({
  link,
  make,
  model,
  year,
  engine,
  transmission,
  image,
  estimated_value_cad,
}: CarCardProps) {
  return (
    <div className="card">
      <Link to={link} className="imageContainer">
        <img className="image" src={image}></img>
      </Link>
      <div className="info">
        <h1 className="modelName">{model}</h1>
        <p className="makeName">
          {make} - {year}
        </p>
        <p className="value">
          {new Intl.NumberFormat("en-US", {
            currency: "CAD",
            style: "currency",
          }).format(estimated_value_cad)}
        </p>
      </div>
    </div>
  );
}
