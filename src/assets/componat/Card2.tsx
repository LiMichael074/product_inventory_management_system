import { RatingType } from "../types/products";
import "./Card2.css";

interface ProductCardProps {
  image: string;
  title: string;
  description: string;
  price: number;
  category: string;
  rating: RatingType;
}

export default function Card2({
  image,
  title,
  price,
  category,
  rating,
}: ProductCardProps) {
  return (
    <div className="card">
      <div className="imageContainer">
        <img className="image" src={image} alt={title} />
      </div>
      <div className="info">
        <div className="box">
          <h1 className="modelName">{title}</h1>
        </div>
        <p>{category}</p>
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
