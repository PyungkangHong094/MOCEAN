import { Box, Divider } from "@mui/material";
import LoadingBar from "src/components/loading-bar";
import { useUserforC } from "src/data/repository/c";

import RatingContainer from "../../rating/rating-container";
import { Program } from "../../result-menu";
import {
  BloodPressureArticle,
  CholesterolArticle,
  GlucoseArticle,
  LiveBloodArticle,
  NitricArticle,
  RespiratoryArticle,
} from "./articles";
import {
  getBloodCirculationScore, 
  getLymphCirculationScore, 
  getToxicityLevelScore, 
  getVisceralFatScore, 
  getSystolicPressureScore,
  getDiastolicPressureScore,
  getOxygenLevelScore,
  getPulseRateScore,
  getBloodGlucoseScore,
  getBloodCholesterolScore,
  getRespiratoryCirculationScore,
  getNitricOxideLevelScore,
  getRedBloodCellScore
} from "./logic";

const ratingData = [
  { items: [{ title: "Blood Circulation", score: 0 }] },
  { items: [{ title: "Lymph Circulation", score: 0 }] },
  { items: [{ title: "Toxicity Level", score: 0 }] },
  { items: [{ title: "Visceral Fat", score: 0 }] },
  { items: [{ title: "Blood Pressure", score: 0 }] },
  { items: [{ title: "Oxygen Level", score: 0 }] },
  { items: [{ title: "Pulse Rate", score: 0 }] },
  { items: [{ title: "Blood Glucose", score: 0 }] },
  { items: [{ title: "Blood Cholesterol", score: 0 }] },
  { items: [{ title: "Respiratory Circulation", score: 0 }] },
  { items: [{ title: "Nitric Oxide level", score: 0 }] },
  { items: [{ title: "Red Blood Cell", score: 0 }] },
];

const initData = (data) => {
  if (!data) {
    return ratingData;
  }
  const {
    blood_circulation,
    lymph_circulation,
    toxicity_level,
    visceral_fat_type,
    systolic_pressure,
    diastolic_pressure,
    oxygen_level,
    pulse_rate,
    blood_glucose,
    blood_cholesterol,
    respiratory_circulation,
    nitric_oxide_level,
    red_blood_cell_type
  } = data;
  ratingData[0].items[0].score = getBloodCirculationScore(blood_circulation);
  ratingData[1].items[0].score = getLymphCirculationScore(lymph_circulation);
  ratingData[2].items[0].score = getToxicityLevelScore(toxicity_level);
  ratingData[3].items[0].score = getVisceralFatScore(visceral_fat_type);
  ratingData[4].items[0].score = Math.floor((getSystolicPressureScore(systolic_pressure) + getDiastolicPressureScore(diastolic_pressure)) / 2);
  ratingData[5].items[0].score = getOxygenLevelScore(oxygen_level);
  ratingData[6].items[0].score = getPulseRateScore(pulse_rate);
  ratingData[7].items[0].score = getBloodGlucoseScore(blood_glucose);
  ratingData[8].items[0].score = getBloodCholesterolScore(blood_cholesterol);
  ratingData[9].items[0].score = getRespiratoryCirculationScore(respiratory_circulation);
  ratingData[10].items[0].score = getNitricOxideLevelScore(nitric_oxide_level);
  ratingData[11].items[0].score = getRedBloodCellScore(red_blood_cell_type);
  
  return ratingData;
}

const ResultCView = ({ id }) => {
  const { isLoading, data } = useUserforC(id);

  if (isLoading) {
    return <LoadingBar />;
  }

  if (!data) {
    return <Box />;
  }

  const { name } = data;
  const result = initData(data.circulatory);
  console.log("C data", data);
  console.log("C Result", result);

  return (
    <>
      <RatingContainer title={Program.C} data={result} />
      <Box>
        <BloodPressureArticle name={name} score={result[4].items[0].score} />
        <Divider variant="middle" sx={{ color: "black", borderBottom: 1.5 }} />
        <GlucoseArticle name={name} score={result[7].items[0].score} />
        <Divider variant="middle" sx={{ color: "black", borderBottom: 1.5 }} />
        <CholesterolArticle name={name} score={result[8].items[0].score} />
        <Divider variant="middle" sx={{ color: "black", borderBottom: 1.5 }} />
        <RespiratoryArticle name={name} score={result[9].items[0].score} />
        <Divider variant="middle" sx={{ color: "black", borderBottom: 1.5 }} />
        <NitricArticle name={name} score={result[10].items[0].score} />
        <Divider variant="middle" sx={{ color: "black", borderBottom: 1.5 }} />
        <LiveBloodArticle name={name} score={result[11].items[0].score} />
      </Box>
    </>
  );
};

export default ResultCView;
