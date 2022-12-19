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

const ResultCView = ({ id }) => {
  const { isLoading, data } = useUserforC(id);
  console.log("C data", data);

  if (isLoading) {
    return <LoadingBar />;
  }

  if (!data) {
    return <Box />;
  }

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
