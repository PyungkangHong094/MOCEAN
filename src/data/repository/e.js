import { useQuery } from "react-query";
import ApiClient from "../api-client";

export const useUserforE = (userId) => {
  const getUserE = async () => {
    const { data } = await ApiClient().get(`customers/${userId}/emotion-system`);
    return data;
  };

  return useQuery({
    queryKey: "get-user-E",
    queryFn: getUserE,
    enabled: !!userId,
  });
};

export const putE = async ({ id, dataE }) => {
  const { data } = await ApiClient().put(`/customers/${id}/emotion`, dataE);

  return data;
};
export const postE = async ({ id, dataE }) => {
  console.log(dataE);
  const { data } = await ApiClient().post(`/customers/${id}/emotion`, dataE);

  return data;
};
