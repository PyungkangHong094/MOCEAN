import { useMutation, useQuery } from "react-query";
import ApiClient from "../api-client";

const postSignIn = ({ username, password }) => {
  return ApiClient().post("/login", {
    username,
    password,
  });
};

export const useSignIn = () => useMutation(postSignIn);
