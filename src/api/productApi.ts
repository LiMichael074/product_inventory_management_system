import axios from "axios";

const PRODUCT_ENDPOINT =import.meta.env.VITE_BASE_URL;

//Get all products
export const getAllProducts = () => axios.get(PRODUCT_ENDPOINT);

//Create new product
interface CarsType {
    make: string;
    model: string;
    year?: number;
    engine: string;
    horsepower?: number;
    transmission: string;
    estimated_value_cad?: number;
    image: string;
}
export const createProduct = (carData: CarsType) => axios.post(PRODUCT_ENDPOINT, carData);

//Get one product
export const getProductByID = (id: string) => axios.get(`${PRODUCT_ENDPOINT}/${id}`);

// Delete a product
export const deleteProduct = (id: string) => axios.delete(`${PRODUCT_ENDPOINT}/${id}`);