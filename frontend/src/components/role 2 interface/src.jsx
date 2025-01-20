import axios from "axios";


const API = axios.create({
  baseURL: "http://localhost:5000/backend", 
});


export const Products = () => API.get("/product");
export const Cart = () => API.get("/cart");
export const Category = () => API.get("/category");
export const Fav = () => API.get("/fav");
export const login = () => API.post("/login");

export default API;
