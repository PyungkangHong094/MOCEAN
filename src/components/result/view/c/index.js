import { Box, Divider } from "@mui/material";

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

const ratingData = [
  { title: "Blood Circulation", score: 1 },
  { title: "Lymph circulation", score: 2 },
  { title: "Toxicity level", score: 4 },
  { title: "Blood Pressure", score: 2 },
  { title: "Red Blood Cell", score: 3 },
  { title: "Oxygen level", score: 1 },
  { title: "Carbon Dioxide level", score: 1 },
  { title: "Nitric Oxide level", score: 2 },
];

const ResultCView = () => {
  // const data = useUserforM();

  return (
    <>
      <RatingContainer title={Program.C} data={ratingData} />
      <Box>
        <BloodPressureArticle />
        <Divider variant="middle" sx={{ color: "black", borderBottom: 1.5 }} />
        <GlucoseArticle />
        <Divider variant="middle" sx={{ color: "black", borderBottom: 1.5 }} />
        <CholesterolArticle score={4} />
        <Divider variant="middle" sx={{ color: "black", borderBottom: 1.5 }} />
        <RespiratoryArticle />
        <Divider variant="middle" sx={{ color: "black", borderBottom: 1.5 }} />
        <NitricArticle />
        <Divider variant="middle" sx={{ color: "black", borderBottom: 1.5 }} />
        <LiveBloodArticle />
      </Box>
    </>
  );
};

export default ResultCView;
