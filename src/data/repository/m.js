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

export const putM = async ({ id, dataM }) => {
  const postureData = await ApiClient().put(`/customers/${id}/musculoskeletal/mobility-and-balance/posture-index`, dataM.posture);
  const cervicalData = await ApiClient().put(`/customers/${id}/musculoskeletal/mobility-and-balance/cervical`, dataM.mobility_and_balance_cervical);
  const spineData = await ApiClient().put(`/customers/${id}/musculoskeletal/mobility-and-balance/spine`, dataM.mobility_and_balance_spine);
  const upperExtremityData = await ApiClient().put(`/customers/${id}/musculoskeletal/mobility-and-balance/upper-extremity`, dataM.mobility_and_balance_upper_extremity);
  const lowerExtremityData = await ApiClient().put(`/customers/${id}/musculoskeletal/mobility-and-balance/lower-extremity`, dataM.mobility_and_balance_lower_extremity);
  const movementData = await ApiClient().put(`/customers/${id}/movement`, dataM.movement);
  const cardioRespiratoryData = await ApiClient().put(`/customers/${id}/cardio-respiratory-strength`, dataM.cardio_respiratory_strength);
  const musculoskeletalHealthData = await ApiClient().put(`/customers/${id}/musculoskeletal-health`, dataM.musculo_skeletal_health);

  return {
    posture: postureData,
    mobility_and_balance_cervical: cervicalData,
    mobility_and_balance_spine: spineData,
    mobility_and_balance_upper_extremity: upperExtremityData,
    mobility_and_balance_lower_extremity: lowerExtremityData,
    movement: movementData,
    cardio_respiratory_strength: cardioRespiratoryData,
    musculo_skeletal_health: musculoskeletalHealthData
  };
}

export const postM = async ({ id, dataM }) => {
  const postureData = await ApiClient().post(`/customers/${id}/musculoskeletal/mobility-and-balance/posture-index`, dataM.posture);
  const cervicalData = await ApiClient().post(`/customers/${id}/musculoskeletal/mobility-and-balance/cervical`, dataM.mobility_and_balance_cervical);
  const spineData = await ApiClient().post(`/customers/${id}/musculoskeletal/mobility-and-balance/spine`, dataM.mobility_and_balance_spine);
  const upperExtremityData = await ApiClient().post(`/customers/${id}/musculoskeletal/mobility-and-balance/upper-extremity`, dataM.mobility_and_balance_upper_extremity);
  const lowerExtremityData = await ApiClient().post(`/customers/${id}/musculoskeletal/mobility-and-balance/lower-extremity`, dataM.mobility_and_balance_lower_extremity);
  const movementData = await ApiClient().post(`/customers/${id}/movement`, dataM.movement);
  const cardioRespiratoryData = await ApiClient().post(`/customers/${id}/cardio-respiratory-strength`, dataM.cardio_respiratory_strength);
  const musculoskeletalHealthData = await ApiClient().post(`/customers/${id}/musculoskeletal-health`, dataM.musculo_skeletal_health);

  return {
    posture: postureData,
    mobility_and_balance_cervical: cervicalData,
    mobility_and_balance_spine: spineData,
    mobility_and_balance_upper_extremity: upperExtremityData,
    mobility_and_balance_lower_extremity: lowerExtremityData,
    movement: movementData,
    cardio_respiratory_strength: cardioRespiratoryData,
    musculo_skeletal_health: musculoskeletalHealthData
  };
}

export const putMPartial = async ({ customerId, reqData, endpoint }) => { 
  if (endpoint === 'musculoskeletal-health') {
    reqData = {
      gender: reqData.gender, 
      pushup_test: reqData.pushup_test,
      squat_test: reqData.squat_test,
      plank_test: reqData.plank_test,
      lower_extremity_assessment: reqData.lower_extremity_assessment,
      upper_extremity_assessment: reqData.upper_extremity_assessment,
      condition: reqData.condition
    };
  }
  
  const { data } = await ApiClient().put(`/customers/${customerId}/${endpoint}`, reqData);

  return data;
}

export const postMPartial = async ({ customerId, reqData, endpoint }) => {
  if (endpoint === 'musculoskeletal-health') {
    reqData = {
      gender: reqData.gender, 
      pushup_test: reqData.pushup_test,
      squat_test: reqData.squat_test,
      plank_test: reqData.plank_test,
      lower_extremity_assessment: reqData.lower_extremity_assessment,
      upper_extremity_assessment: reqData.upper_extremity_assessment,
      condition: reqData.condition
    };
  }

  const { data } = await ApiClient().post(`/customers/${customerId}/${endpoint}`, reqData);

  return data;
}

// export const putMMobilityPosture = async (customerId, reqData) => {
//   const { data } = await ApiClient().put(
//     `/customers/${customerId}/musculoskeletal/mobility-and-balance/posture-index`,
//     reqData
//   );

//   return data;
// };
// export const postMMobilityPosture = async (customerId, reqData) => {
//   const { data } = await ApiClient().post(
//     `/customers/${customerId}/musculoskeletal/mobility-and-balance/posture-index`,
//     reqData
//   );

//   return data;
// };

// export const putMMobilityCervical = async (customerId, reqData) => {
//   const { data } = await ApiClient().put(
//     `/customers/${customerId}/musculoskeletal/mobility-and-balance/cervical`,
//     reqData
//   );

//   return data;
// };
// export const postMMobilityCervical = async (customerId, reqData) => {
//   const { data } = await ApiClient().post(
//     `/customers/${customerId}/musculoskeletal/mobility-and-balance/cervical`,
//     reqData
//   );

//   return data;
// };

// export const putMMobilitySpine = async (customerId, reqData) => {
//   const { data } = await ApiClient().put(
//     `/customers/${customerId}/musculoskeletal/mobility-and-balance/spine`,
//     reqData
//   );

//   return data;
// };
// export const postMMobilitySpine = async (customerId, reqData) => {
//   const { data } = await ApiClient().post(
//     `/customers/${customerId}/musculoskeletal/mobility-and-balance/spine`,
//     reqData
//   );

//   return data;
// };

// export const putMMobilityUpper = async (customerId, reqData) => {
//   const { data } = await ApiClient().put(
//     `/customers/${customerId}/musculoskeletal/mobility-and-balance/upper-extremity`,
//     reqData
//   );

//   return data;
// };
// export const postMMobilityUpper = async (customerId, reqData) => {
//   const { data } = await ApiClient().post(
//     `/customers/${customerId}/musculoskeletal/mobility-and-balance/upper-extremity`,
//     reqData
//   );

//   return data;
// };

// export const putMMobilityLower = async (customerId, reqData) => {
//   const { data } = await ApiClient().put(
//     `/customers/${customerId}/musculoskeletal/mobility-and-balance/lower-extremity`,
//     reqData
//   );

//   return data;
// };
// export const postMMobilityLower = async (customerId, reqData) => {
//   const { data } = await ApiClient().post(
//     `/customers/${customerId}/musculoskeletal/mobility-and-balance/lower-extremity`,
//     reqData
//   );

//   return data;
// };

// export const putMMovement = async (customerId, reqData) => {
//   const { data } = await ApiClient().put(`/customers/${customerId}/movement`, reqData);

//   return data;
// };
// export const postMMovement = async (customerId, reqData) => {
//   const { data } = await ApiClient().post(`/customers/${customerId}/movement`, reqData);

//   return data;
// };

// export const putMRespiratory = async (customerId, reqData) => {
//   const { data } = await ApiClient().put(
//     `/customers/${customerId}/cardio-respiratory-strength`,
//     reqData
//   );

//   return data;
// };
// export const postMRespiratory = async (customerId, reqData) => {
//   const { data } = await ApiClient().post(
//     `/customers/${customerId}/cardio-respiratory-strength`,
//     reqData
//   );

//   return data;
// };

// export const putMHealth = async (customerId, reqData) => {
//   const { data } = await ApiClient().put(
//     `/customers/${customerId}/musculoskeletal-health`,
//     reqData
//   );

//   return data;
// };
// export const postMHealth = async (customerId, reqData) => {
//   const { data } = await ApiClient().post(
//     `/customers/${customerId}/musculoskeletal-health`,
//     reqData
//   );

//   return data;
// };
