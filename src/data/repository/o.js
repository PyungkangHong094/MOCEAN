import { useQuery } from "react-query";
import ApiClient from "../api-client";

export const useUserforO = (userId) => {
  const getUserO = async () => {
    const { data } = await ApiClient().get(`customers/${userId}/organ-system`);
    return data;
  };

  return useQuery({
    queryKey: "get-user-O",
    queryFn: getUserO,
    enabled: !!userId,
  });
};

export const putO = async ({ id, dataO }) => {
  const { data } = await ApiClient().put(`/customers/${id}/organ`, dataO);

  return data;
};
export const postO = async ({ id, dataO }) => {
  const { data } = await ApiClient().post(`/customers/${id}/organ`, dataO);

  return data;
};
