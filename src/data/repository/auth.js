import { useMutation, useQuery } from "react-query";
import ApiClient from "../api-client";

// 로그인 API

const postSignIn = ({ username, password }) => {
  return ApiClient({ needAuth: false }).post("/login", {
    username,
    password,
  });
};

const postRefresh = async () => {
  const { status, data } = await ApiClient({ needAuth: false }).post("/refresh-token", {
    token: sessionStorage.getItem("MOCEAN-TOKEN"),
  });

  if (status != 200) {
    return false;
  }

  sessionStorage.setItem("MOCEAN-TOKEN", data.token);

  return true;
};

export const useSignIn = () => useMutation(postSignIn);
export const useRefreshToken = () => useMutation(postRefresh);
