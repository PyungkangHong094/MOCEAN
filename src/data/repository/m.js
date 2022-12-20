import { useQuery } from "react-query";
import ApiClient from "../api-client";

export const useUserforM = (userId) => {
  const getUserM = async () => {
    const { data } = await ApiClient().get(`customers/${userId}/musculoskeletal-system`);
    return data;
  };

  return useQuery({
    queryKey: "get-user-M",
    queryFn: getUserM,
    enabled: !!userId,
  });
};

export const putMMobilityPosture = async (customerId, reqData) => {
  const { data } = await ApiClient().put(
    `/customers/${customerId}/musculoskeletal/mobility-and-balance/posture-index`,
    reqData
  );

  return data;
};
export const postMMobilityPosture = async (customerId, reqData) => {
  const { data } = await ApiClient().post(
    `/customers/${customerId}/musculoskeletal/mobility-and-balance/posture-index`,
    reqData
  );

  return data;
};

export const putMMobilityCervical = async (customerId, reqData) => {
  const { data } = await ApiClient().put(
    `/customers/${customerId}/musculoskeletal/mobility-and-balance/cervical`,
    reqData
  );

  return data;
};
export const postMMobilityCervical = async (customerId, reqData) => {
  const { data } = await ApiClient().post(
    `/customers/${customerId}/musculoskeletal/mobility-and-balance/cervical`,
    reqData
  );

  return data;
};

export const putMMobilitySpine = async (customerId, reqData) => {
  const { data } = await ApiClient().put(
    `/customers/${customerId}/musculoskeletal/mobility-and-balance/spine`,
    reqData
  );

  return data;
};
export const postMMobilitySpine = async (customerId, reqData) => {
  const { data } = await ApiClient().post(
    `/customers/${customerId}/musculoskeletal/mobility-and-balance/spine`,
    reqData
  );

  return data;
};

export const putMMobilityUpper = async (customerId, reqData) => {
  const { data } = await ApiClient().put(
    `/customers/${customerId}/musculoskeletal/mobility-and-balance/upper-extremity`,
    reqData
  );

  return data;
};
export const postMMobilityUpper = async (customerId, reqData) => {
  const { data } = await ApiClient().post(
    `/customers/${customerId}/musculoskeletal/mobility-and-balance/upper-extremity`,
    reqData
  );

  return data;
};

export const putMMobilityLower = async (customerId, reqData) => {
  const { data } = await ApiClient().put(
    `/customers/${customerId}/musculoskeletal/mobility-and-balance/lower-extremity`,
    reqData
  );

  return data;
};
export const postMMobilityLower = async (customerId, reqData) => {
  const { data } = await ApiClient().post(
    `/customers/${customerId}/musculoskeletal/mobility-and-balance/lower-extremity`,
    reqData
  );

  return data;
};

export const putMMovement = async (customerId, reqData) => {
  const { data } = await ApiClient().put(`/customers/${customerId}/movement`, reqData);

  return data;
};
export const postMMovement = async (customerId, reqData) => {
  const { data } = await ApiClient().post(`/customers/${customerId}/movement`, reqData);

  return data;
};

export const putMRespiratory = async (customerId, reqData) => {
  const { data } = await ApiClient().put(
    `/customers/${customerId}/cardio-respiratory-strength`,
    reqData
  );

  return data;
};
export const postMRespiratory = async (customerId, reqData) => {
  const { data } = await ApiClient().post(
    `/customers/${customerId}/cardio-respiratory-strength`,
    reqData
  );

  return data;
};

export const putMHealth = async (customerId, reqData) => {
  const { data } = await ApiClient().put(
    `/customers/${customerId}/musculoskeletal-health`,
    reqData
  );

  return data;
};
export const postMHealth = async (customerId, reqData) => {
  const { data } = await ApiClient().post(
    `/customers/${customerId}/musculoskeletal-health`,
    reqData
  );

  return data;
};
