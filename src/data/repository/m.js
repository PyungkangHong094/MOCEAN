import { useQuery } from "react-query";
import ApiClient from "../api-client";

const getMMobilityPosture = async (customerId) => {
  const { data } = await ApiClient().get(
    `/customers/${customerId}/musculoskeletal/mobility-and-balance/posture-index`
  );

  return data;
};
const getMMobilityCervical = async (customerId) => {
  const { data } = await ApiClient().get(
    `/customers/${customerId}/musculoskeletal/mobility-and-balance/cervical`
  );

  return data;
};
const getMMobilitySpine = async (customerId) => {
  const { data } = await ApiClient().get(
    `/customers/${customerId}/musculoskeletal/mobility-and-balance/spine`
  );

  return data;
};
const getMMobilityUpper = async (customerId) => {
  const { data } = await ApiClient().get(
    `/customers/${customerId}/musculoskeletal/mobility-and-balance/upper-extremity`
  );

  return data;
};
const getMMobilityLower = async (customerId) => {
  const { data } = await ApiClient().get(
    `/customers/${customerId}/musculoskeletal/mobility-and-balance/lower-extremity`
  );

  return data;
};

const getMMobility = async (customerId) => {
  const responses = await Promise.all([
    getMMobilityPosture(customerId),
    getMMobilityCervical(customerId),
    getMMobilitySpine(customerId),
    getMMobilityUpper(customerId),
    getMMobilityLower(customerId),
  ]);

  return responses;
};

export const useMMobility = (customerId) =>
  useQuery("get-M-Mobility", () => getMMobility(customerId));
