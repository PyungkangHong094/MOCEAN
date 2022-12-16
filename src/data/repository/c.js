import { useQuery } from "react-query";
import ApiClient from "../api-client";

export const useUserforC = (userId) => {
  const getUserC = async () => {
    const { data } = await ApiClient().get(`customers/${userId}/circulatory-system`);
    return data;
  };

  return useQuery("get-user-C", getUserC);
};

export const putC = async (customerId, dataC) => {
  const { data } = await ApiClient().put(`/customers/${customerId}/circulatory`, dataC);

  return data;
};
export const postC = async (customerId, dataC) => {
  const { data } = await ApiClient().post(`/customers/${customerId}/circulatory`, dataC);

  return data;
};
