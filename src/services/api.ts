import axios from "axios";

const getPosts = axios.create({
  baseURL: "https://epsso.com.br/diretorio/?rest_route=/wp/v2",
  headers: {
    "Content-Type": "application/json",
  },
});

export default getPosts;
