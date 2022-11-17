import axios from "axios";

const ApiClient = (contentType = "application/json") => {
  return axios.create({
    baseURL: process.env.NEXT_PUBLIC_MOCEAN_BASE_URL,
    headers: {
      "Content-Type": contentType,
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH",
      "Access-Control-Allow-Headers":
        "Origin,Accept,X-Requested-With,Content-Type,Access-Control-Request-Method,Access-Control-Request-Headers,Authorization",
    },
  });
};

export default ApiClient;
