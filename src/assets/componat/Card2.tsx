import { Link } from "react-router-dom";
import { RatingType } from "../types/products";
import "./Card.css";

interface ProductCardProps {
  image: string;
  title: string;
  description: string;
  price: number;
  category: string;
  rating: RatingType;
  link: string;
}

export default function Card2({
  image,
  title,
  price,
  category,
  rating,
  link,
}: ProductCardProps) {
  return (
    <div className="card">
      <Link to={link} className="imageContainer">
        <img className="image" src={image} alt={title} />
      </Link>
      <div className="info">
        <div className="box">
          <h1 className="modelName">{title}</h1>
        </div>
        <p className="value">
          {new Intl.NumberFormat("en-US", {
            currency: "CAD",
            style: "currency",
          }).format(price)}
        </p>
        <p>
          Ratings: {rating.count} {rating.rate}
        </p>
      </div>
    </div>
  );
}
