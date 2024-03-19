import axios from "axios";

const PRODUCT_ENDPOINT =import.meta.env.VITE_BASE_URL;

//Get all products
export const getAllProducts = () => axios.get(PRODUCT_ENDPOINT);

//Create new product
interface ProductType {
    make: string;
    model: string;
    year?: number;
    engine: string;
    transmission: string;
    price?: number;
    link: string;
}
export const createProduct = (productData: ProductType) => axios.post(PRODUCT_ENDPOINT, productData);

//Get one product
export const getProductByID = (id: string) => axios.get(`${PRODUCT_ENDPOINT}/${id}`);

// Delete a product
export const deleteProduct = (id: string) => axios.delete(`${PRODUCT_ENDPOINT}/${id}`);