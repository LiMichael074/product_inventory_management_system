import { useState, useEffect } from "react";
import { getAllProducts } from "../../api/productApi";
import Card from "../componat/Card2";
import { ProductType } from "../types/products";
import "./FakeHome.css";

const FakeHome = () => {
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getAllProducts();
        setProducts(response.data);
      } catch (err) {
        console.error("Error fetching products", err);
      }
    };
    fetchProducts();
  }, []);
  return (
    <div className="cardContainer">
      {products.map((product) => (
        <Card
          image={product.image}
          title={product.title}
          description={product.description}
          price={product.price}
          category={product.category}
          rating={product.rating}
          link={"/product2/" + product.id}
        />
      ))}
    </div>
  );
};

export default FakeHome;
