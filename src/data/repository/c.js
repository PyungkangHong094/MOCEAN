import { useQuery } from "react-query";
import ApiClient from "../api-client";

export const useUserforC = (userId) => {
  const getUserC = async () => {
    const { data } = await ApiClient().get(`customers/${userId}/circulatory-system`);
    return data;
  };

  return useQuery({
    queryKey: "get-user-C",
    queryFn: getUserC,
    enabled: !!userId,
  });
};

export const putC = async ({ id, dataC }) => {
  const { data } = await ApiClient().put(`/customers/${id}/circulatory`, dataC);

  return data;
};
export const postC = async ({ id, dataC }) => {
  const { data } = await ApiClient().post(`/customers/${id}/circulatory`, dataC);

  return data;
};
