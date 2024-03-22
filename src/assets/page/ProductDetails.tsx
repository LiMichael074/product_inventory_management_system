import { useNavigate, useParams } from "react-router-dom";
import "./ProductDerails.css";
import { useEffect, useState } from "react";
import { CarsType } from "../types/Cars";
import { deleteProduct, getProductByID } from "../../api/productApi";

const ProductDetails = () => {
  const { id = "" } = useParams();
  const [car, setCar] = useState<CarsType>();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCar = async () => {
      try {
        const response = await getProductByID(id);
        setCar(response.data.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };
    fetchCar();
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
        <div className="image_container">
          <img src={car?.image} className="image_detail"></img>
        </div>

        <div className="information_container">
          <h1 className="detail_text model bottom_border">{car?.model}</h1>
          <h2 className="detail_text bottom_border">
            {new Intl.NumberFormat("en-US", {
              currency: "CAD",
              style: "currency",
            }).format(car?.estimated_value_cad || 0)}
          </h2>

          <div className="bottom_border same_line_container">
            <p className="detail_text">Make</p>
            <p className="detail_text text_right">{car?.make}</p>
          </div>

          <div className="bottom_border same_line_container">
            <p className="detail_text">Year</p>
            <p className="detail_text text_right">{car?.year}</p>
          </div>

          <div className="bottom_border same_line_container">
            <p className="detail_text">Engine</p>
            <p className="detail_text text_right">{car?.engine}</p>
          </div>

          <div className="bottom_border same_line_container">
            <p className="detail_text">Horsepower</p>
            <p className="detail_text text_right">{car?.horsepower}</p>
          </div>

          <div className="bottom_border same_line_container">
            <p className="detail_text">Transmission</p>
            <p className="detail_text text_right">{car?.transmission}</p>
          </div>

          <div className="same_line_container delet">
            <p className="detail_text delet_text">Deltet form Inventory</p>
            <button onClick={handleDelete} className="delet_button">
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
