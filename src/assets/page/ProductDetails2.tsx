import { Navigate, useNavigate, useParams } from "react-router-dom";
import "./ProductDerails.css";
import { useEffect, useState } from "react";
import { ProductType } from "../types/products";
import { deleteProduct, getProductByID } from "../../api/productApi";

const ProductDetails = () => {
  const { id = "" } = useParams();
  const [product, setProduct] = useState<ProductType>();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await getProductByID(id);
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [id]);

  const handleDelete = async () => {
    try {
      await deleteProduct(id);
      navigate("/");
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <>
      <div className="container">
        <img src={product?.image} className="image"></img>
        <div className="informationContiner">
          <h1>{product?.title}</h1>
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
