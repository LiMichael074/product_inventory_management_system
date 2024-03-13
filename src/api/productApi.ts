import axios from "axios";

const ProductAPIEndPoint = "https://fakestoreapi.com/products";

//Get all products
export const getAllProducts = () => axios.get("https://fakestoreapi.com/products");

//Create new product
interface ProductType {
    name: string;
}
export const createProduct = (productData: ProductType) => axios.post("https://fakestoreapi.com/products", productData);