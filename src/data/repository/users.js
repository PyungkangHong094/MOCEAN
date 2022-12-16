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
  return useQuery(async () => {
    const { data } = await ApiClient().get(`/customers/${customerId}`);
    return data;
  });
};

export const addUser = ({ name, email, password, phone, birth }) => {
  const postUser = async () => {
    const result = await ApiClient().post("/customers", {
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

export const updateUser = async (customerId) => {
  const updateRequest = async () => {
    const { data } = await ApiClient().put(`/customers/${customerId}/info`);
    return data;
  };

  return useMutation(updateRequest);
};

export const deleteUser = async (customerId) => {
  const deleteRequest = async () => {
    const { status, data } = await ApiClient().delete(`/customers/${customerId}`);
    return status == 200;
  };

  return useMutation(deleteRequest);
};
