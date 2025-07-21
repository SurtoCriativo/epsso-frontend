/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

const getPosts = axios.create({
  baseURL: "https://epsso.com.br/diretorio/?rest_route=/wp/v2",
  headers: {
    "Content-Type": "application/json",
    "X-API-Key": import.meta.env.VITE_EPSSO_API_KEY,
  },
});

const getCategories = axios.create({
  baseURL: "https://epsso.com.br/diretorio/wp-json/wp/v2/categories/",
  headers: {
    "Content-Type": "application/json",
    "X-API-Key": import.meta.env.VITE_EPSSO_API_KEY,
  },
});

// Add response interceptor to handle rate limiting
const handleRateLimit = (error: any) => {
  if (error.response?.status === 429) {
    const retryAfter = error.response.headers["retry-after"] || 60;
    console.error(`Rate limit exceeded. Retry after ${retryAfter} seconds`);
    // You could implement a retry mechanism here
  }
  return Promise.reject(error);
};

getPosts.interceptors.response.use((response) => response, handleRateLimit);

getCategories.interceptors.response.use(
  (response) => response,
  handleRateLimit
);

// Add request interceptor to log rate limit info
const logRateLimit = (response: any) => {
  if (response.headers["x-ratelimit-limit"]) {
    console.log("Rate Limit Info:", {
      limit: response.headers["x-ratelimit-limit"],
      remaining: response.headers["x-ratelimit-remaining"],
      reset: new Date(response.headers["x-ratelimit-reset"] * 1000),
    });
  }
  return response;
};

getPosts.interceptors.response.use(logRateLimit);
getCategories.interceptors.response.use(logRateLimit);

export { getPosts, getCategories };
