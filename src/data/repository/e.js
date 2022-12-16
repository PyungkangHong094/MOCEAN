import { useQuery } from "react-query";
import ApiClient from "../api-client";

export const useUserforE = (userId) => {
  const getUserE = async () => {
    const { data } = await ApiClient().get(`customers/${userId}/emotion-system`);
    return data;
  };

  return useQuery("get-user-E", getUserE);
};

export const putE = async (customerId, dataE) => {
  const { data } = await ApiClient().put(`/customers/${customerId}/emotion`, dataE);

  return data;
};
export const postE = async (customerId, dataE) => {
  const { data } = await ApiClient().post(`/customers/${customerId}/emotion`, dataE);

  return data;
};
