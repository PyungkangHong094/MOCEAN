import { Box, Divider, Typography } from "@mui/material";
import { theme } from "src/theme";

import Image from "next/image";
import RatingContainer from "../../rating/rating-container";
import { Program } from "../../result-menu";
import { useUserforM } from "src/data/repository/users";
import {
  HydrationArticle,
  InflammationArticle,
  MuscleArticle,
  PhaseArticle,
  TotalScoreArticle,
  VisceralArticle,
} from "./articles";
import {
  getCellularHealthScore, 
  getHydrationScore,
  getBodyFatScore,
  getVisceralFatScore,
  getInflammationScore,
  getCellIntegrityScore
} from "./logic";
import { useUserforO } from "src/data/repository/o";
import LoadingBar from "src/components/loading-bar";

const ratingData = [
  { items: [{ title: "Cellular Health", score: 0 }] },
  { items: [{ title: "Hydration", score: 0 }] },
  { items: [{ title: "Body Fat", score: 0 }] },
  { items: [{ title: "Visceral Fat", score: 0 }] },
  { items: [{ title: "Inflammation", score: 0 }] },
  { items: [{ title: "Upper Body (left)", score: 0 }] },
  { items: [{ title: "Upper Body (right)", score: 0 }] },
  { items: [{ title: "Lower Body (left)", score: 0 }] },
  { items: [{ title: "Lower Body (right)", score: 0 }] },
  { items: [{ title: "Trunk", score: 0 }] },
  { items: [{ title: "Cell integrity", score: 0 }] },
];

const initData = (data) => {
  if (!data) {
    return ratingData;
  }
  const {
    cellular_health_score,
    hydration,
    body_fat,
    visceral_fat,
    inflammation_reference,
    cell_integrity
  } = data;

  ratingData[0].items[0].score = getCellularHealthScore(cellular_health_score?.score);
  ratingData[1].items[0].score = getHydrationScore(hydration?.gender, hydration?.score);
  ratingData[2].items[0].score = getBodyFatScore(body_fat?.gender, body_fat?.age, body_fat?.body_fat);
  ratingData[3].items[0].score = getVisceralFatScore(visceral_fat?.visceral_fat_divide_10);
  ratingData[4].items[0].score = getInflammationScore(inflammation_reference?.inflammation);
  ratingData[5].items[0].score = getInflammationScore(inflammation_reference?.left_arm);
  ratingData[6].items[0].score = getInflammationScore(inflammation_reference?.right_arm);
  ratingData[7].items[0].score = getInflammationScore(inflammation_reference?.left_leg);
  ratingData[8].items[0].score = getInflammationScore(inflammation_reference?.right_leg);
  ratingData[9].items[0].score = getInflammationScore(inflammation_reference?.trunk);
  ratingData[10].items[0].score = getCellIntegrityScore(cell_integrity?.gender, cell_integrity?.age, cell_integrity?.whole_body_phase_angle);

  return ratingData;
}

const ResultOView = ({ id }) => {
  const { isLoading, data } = useUserforO(id);

  if (isLoading) {
    return <LoadingBar />;
  }

  if (!data) {
    return <Box />;
  }

  const {
    name, 
    body_fat,
    visceral_fat,
    inflammation_reference,
    cell_integrity
  } = data;
  const result = initData(data);
  console.log("O Data", data);
  console.log("O Result", result);

  return (
    <>
      <RatingContainer title={Program.O} data={result} />
      <Box>
        <TotalScoreArticle name={name} score={result[0].items[0].score} />
        <Divider variant="middle" sx={{ color: "black", borderBottom: 1.5 }} />
        <HydrationArticle name={name} score={result[1].items[0].score} />
        <Divider variant="middle" sx={{ color: "black", borderBottom: 1.5 }} />
        <MuscleArticle bodyFat={body_fat?.body_fat} score={result[2].items[0].score} />
        <Divider variant="middle" sx={{ color: "black", borderBottom: 1.5 }} />
        <VisceralArticle name={name} fat={visceral_fat?.visceral_fat} score={result[3].items[0].score} />
        <Divider variant="middle" sx={{ color: "black", borderBottom: 1.5 }} />
        <InflammationArticle name={name} inflammation={inflammation_reference?.inflammation} score={result[4].items[0].score} />
        <Divider variant="middle" sx={{ color: "black", borderBottom: 1.5 }} />
        <PhaseArticle angle={cell_integrity?.whole_body_phase_angle} score={2} />
        <Divider variant="middle" sx={{ color: "black", borderBottom: 1.5 }} />
      </Box>
    </>
  );
};

export default ResultOView;
