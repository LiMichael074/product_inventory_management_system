import { useParams } from "react-router-dom";
import products from "../data/Car.json";

const ProductDetails = () => {
  const { id } = useParams();
  const slicedId = id ? id.slice(3) : "";
  const productsArray = products.jdm_cars;
  const product = productsArray.find(
    (product) => product.id === parseInt(slicedId)
  );
  return <div>{product?.model}</div>;
};

export default ProductDetails;
