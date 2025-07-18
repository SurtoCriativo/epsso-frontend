import axios from "axios";

const getPosts = axios.create({
  baseURL: "https://epsso.com.br/diretorio/?rest_route=/wp/v2",
  headers: {
    "Content-Type": "application/json",
  },
});

const getCategories = axios.create({
  baseURL: "https://epsso.com.br/diretorio/wp-json/wp/v2/categories/",
  headers: {
    "Content-Type": "application/json",
  },
});

export { getPosts, getCategories };
