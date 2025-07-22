import axios from "axios";

const getPosts = axios.create({
  baseURL: import.meta.env.VITE_GET_POSTS_ENDPOINT,
  headers: {
    "Content-Type": "application/json",
  },
});

const getCategories = axios.create({
  baseURL: import.meta.env.VITE_GET_CATEGORIES_ENDPOINT,
  headers: {
    "Content-Type": "application/json",
  },
});

export { getPosts, getCategories };
