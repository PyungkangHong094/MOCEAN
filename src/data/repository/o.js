import { useQuery } from "react-query";
import ApiClient from "../api-client";

export const useUserforO = (userId) => {
  const getUserO = async () => {
    let { data } = await ApiClient().get(`customers/${userId}/organ-system`);

    data['inflammation_reference'] = data['inflammation_refererence'];

    return data;
  }

  return useQuery({
    queryKey: "get-user-O",
    queryFn: getUserO,
    enabled: !!userId,
  });
};

export const putO = async ({ id, dataO }) => {
  const cellularData = await ApiClient().put(`customers/${id}/organ/cellular-health-score`, dataO.cellular_health_score);
  const hydrationData = await ApiClient().put(`customers/${id}/organ/hydration`, dataO.hydration);
  const bodyFatData = await ApiClient().put(`customers/${id}/organ/body-fat`, dataO.body_fat);
  const visceralData = await ApiClient().put(`customers/${id}/organ/visceral-fat`, dataO.visceral_fat);
  const inflammationData = await ApiClient().put(`customers/${id}/organ/inflammation-reference`, dataO.inflammation_reference);
  const cellIntegrityData = await ApiClient().put(`customers/${id}/organ/cell-integrity`, dataO.cell_integrity);

  return {
    cellular_health_score: cellularData,
    hydration: hydrationData,
    body_fat: bodyFatData,
    visceral_fat: visceralData,
    inflammation_reference: inflammationData,
    cell_integrity: cellIntegrityData
  };
};

export const postO = async ({ id, dataO }) => {
  const cellularData = await ApiClient().post(`customers/${id}/organ/cellular-health-score`, dataO.cellular_health_score);
  const hydrationData = await ApiClient().post(`customers/${id}/organ/hydration`, dataO.hydration);
  const bodyFatData = await ApiClient().post(`customers/${id}/organ/body-fat`, dataO.body_fat);
  const visceralData = await ApiClient().post(`customers/${id}/organ/visceral-fat`, dataO.visceral_fat);
  const inflammationData = await ApiClient().post(`customers/${id}/organ/inflammation-reference`, dataO.inflammation_reference);
  const cellIntegrityData = await ApiClient().post(`customers/${id}/organ/cell-integrity`, dataO.cell_integrity);

  return {
    cellular_health_score: cellularData,
    hydration: hydrationData,
    body_fat: bodyFatData,
    visceral_fat: visceralData,
    inflammation_reference: inflammationData,
    cell_integrity: cellIntegrityData
  };
};
