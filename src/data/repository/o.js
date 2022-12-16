import { useQuery } from "react-query";
import ApiClient from "../api-client";

export const useUserforO = (userId) => {
  const getUserO = async () => {
    const { data } = await ApiClient().get(`customers/${userId}/organ-system`);
    return data;
  };

  return useQuery("get-user-O", getUserO);
};

export const putO = async (customerId, dataO) => {
  const { data } = await ApiClient().put(`/customers/${customerId}/organ`, dataO);

  return data;
};
export const postO = async (customerId, dataO) => {
  const { data } = await ApiClient().post(`/customers/${customerId}/organ`, dataO);

  return data;
};
