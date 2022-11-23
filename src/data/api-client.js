import axios from "axios";

const ApiClient = ({ needAuth = true, contentType = "application/json" } = {}) => {
  const headers = {
    "Content-Type": contentType,
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH",
    "Access-Control-Allow-Headers":
      "Origin,Accept,X-Requested-With,Content-Type,Access-Control-Requeset-Origin, Access-Control-Request-Method,Access-Control-Request-Headers,Authorization",
  };

  if (needAuth) {
    const token = sessionStorage.getItem("MOCEAN-TOKEN");
    headers.Authorization = `Bearer ${token}`;
  }

  return axios.create({
    // baseURL: `${process.env.NEXT_PUBLIC_MOCEAN_BASE_URL}/moc`,
    baseURL: `https://www.moceanbackend.com/moc`,
    headers,
  });
};

export default ApiClient;
