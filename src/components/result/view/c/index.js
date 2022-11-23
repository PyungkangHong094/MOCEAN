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
  { items: [{ title: "Blood Circulation", score: 2 }] },
  { items: [{ title: "Lymph circulation", score: 2 }] },
  { items: [{ title: "Toxicity level", score: 3 }] },
  { items: [{ title: "Blood Pressure", score: 4 }] },
  { items: [{ title: "Oxygen Level", score: 2 }] },
  { items: [{ title: "Pulse Rate", score: 3 }] },
  { items: [{ title: "Blood Glucose", score: 3 }] },
  { items: [{ title: "Blood Uric Acid", score: 3 }] },
  { items: [{ title: "Blood Cholesterol", score: 3 }] },
  { items: [{ title: "Respiratory Circulation", score: 4 }] },
  { items: [{ title: "Nitric Oxide level", score: 2 }] },
  { items: [{ title: "Red Blood Cell", score: 2 }] },
];

const ResultCView = () => {
  // const data = useUserforM();

  return (
    <>
      <RatingContainer title={Program.C} data={ratingData} />
      <Box>
        <BloodPressureArticle score={0} />
        <Divider variant="middle" sx={{ color: "black", borderBottom: 1.5 }} />
        <GlucoseArticle score={1} />
        <Divider variant="middle" sx={{ color: "black", borderBottom: 1.5 }} />
        <CholesterolArticle score={2} />
        <Divider variant="middle" sx={{ color: "black", borderBottom: 1.5 }} />
        <RespiratoryArticle score={3} />
        <Divider variant="middle" sx={{ color: "black", borderBottom: 1.5 }} />
        <NitricArticle score={0} />
        <Divider variant="middle" sx={{ color: "black", borderBottom: 1.5 }} />
        <LiveBloodArticle />
      </Box>
    </>
  );
};

export default ResultCView;
