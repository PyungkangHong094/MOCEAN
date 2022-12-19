import { useMutation, useQuery } from "react-query";
import ApiClient from "../api-client";

export const getAllUsers = async (page = 1, pageSize = 20, filterName) => {
  let url = `/customers?page=${page}&items_per_page=${pageSize}`;
  if (filterName) {
    url += `&name=${filterName}`;
  }
  const { data } = await ApiClient().get(url);
  return data;
};

export const useUser = (customerId) => {
  return useQuery({
    queryKey: "get-user",
    queryFn: async () => {
      const { data } = await ApiClient().get(`/customers/${customerId}`);
      return data;
    },
    enabled: !!customerId,
  });
};

export const addUser = async (profile) => {
  const result = await ApiClient().post("/customers", profile);

  return result.status == 200;
};

export const updateUser = async ({ customerId, data }) => {
  const result = await ApiClient().put(`/customers/${customerId}/info`, data);
  return result.status == 200;
};

export const deleteUser = async (customerId) => {
  const deleteRequest = async () => {
    const { status, data } = await ApiClient().delete(`/customers/${customerId}`);
    return status == 200;
  };

  return useMutation(deleteRequest);
};
