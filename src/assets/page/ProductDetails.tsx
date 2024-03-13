import { useParams } from "react-router-dom";
import "./ProductDerails.css";
import products from "../data/Car.json";

const ProductDetails = () => {
  const { id } = useParams();
  const slicedId = id ? id.slice(3) : "";
  const productsArray = products.jdm_cars;
  const product = productsArray.find(
    (product) => product.id === parseInt(slicedId)
  );
  return (
    <>
      <div className="container">
        <img src={product?.image} className="image"></img>
        <h1>{product?.model}</h1>
      </div>
    </>
  );
};

export default ProductDetails;
