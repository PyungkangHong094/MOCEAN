import { useQuery } from "react-query";
import ApiClient from "../api-client";

export const useAllUsers = (page = 0, pageSize = 20, filterName) => {
  const getAllUsers = async () => {
    const { data } = await ApiClient().get(
      `/customers?page=${page}&items_per_page=${pageSize}&name=${filterName}`
    );
    return data;
  };

  return useQuery("get-all-users", getAllUsers);
};

export const useCreateUser = ({ name, email, password, phone, birth }) => {
  const postUser = async () => {
    const result = await ApiClient().post("users", {
      name,
      email,
      password,
      phone_number: phone,
      birthday: birth,
    });

    return result.status == 200;
  };

  return useQuery("post-user", postUser);
};

export const useUserforM = (userId) => {
  const getUserM = async () => {
    const { data } = await ApiClient().get(`users/${userId}/musculoskeletal`);
    return data;
  };

  return useQuery("get-user-M", getUserM);
};
export const useUserforO = (userId) => {
  const getUserO = async () => {
    const { data } = await ApiClient().get(`users/${userId}/musculoskeletal`);
    return data;
  };

  return useQuery("get-user-O", getUserO);
};
export const useUserforC = (userId) => {
  const getUserC = async () => {
    const { data } = await ApiClient().get(`users/${userId}/musculoskeletal`);
    return data;
  };

  return useQuery("get-user-C", getUserC);
};
export const useUserforE = (userId) => {
  const getUserE = async () => {
    const { data } = await ApiClient().get(`users/${userId}/musculoskeletal`);
    return data;
  };

  return useQuery("get-user-E", getUserE);
};
