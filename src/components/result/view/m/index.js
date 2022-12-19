import { Box, Typography } from "@mui/material";

import Image from "next/image";
import LoadingBar from "src/components/loading-bar";
import { useUserforM } from "src/data/repository/m";
import RatingContainer from "../../rating/rating-container";
import { Program } from "../../result-menu";
import ArticleBox from "./articles";

const ratingData = [
  { category: "Posture", items: [{ title: "Posture", score: 0 }] },
  {
    category: "Mobility & Balance",
    items: [
      { title: "Spine_Cervical", score: 0 },
      { title: "Spine_Thoraco-lumbar", score: 0 },
    ],
  },
  {
    category: "Upper Extremity",
    items: [
      { title: "Left", score: 0 },
      { title: "Right", score: 0 },
    ],
  },
  {
    category: "Lower Extremity",
    items: [
      { title: "Left", score: 0 },
      { title: "Right", score: 0 },
    ],
  },
  { category: "Movement", items: [{ title: "Movement", score: 0 }] },
  { category: "Cardio-respiratory strength", items: [{ title: "VO2 Max", score: 0 }] },

  {
    category: "Musculo skeletal strength",
    items: [
      { title: "Push-up test", score: 0 },
      { title: "Squat test", score: 0 },
      { title: "Plank test", score: 0 },
    ],
  },
];

const ResultMView = ({ id }) => {
  const { isLoading, data } = useUserforM(id);
  console.log("C data", data);

  if (isLoading) {
    return <LoadingBar />;
  }

  if (!data) {
    return <Box />;
  }

  return (
    <>
      <RatingContainer title={Program.M} data={ratingData} />
      <Box sx={{ mx: 4, flex: 1 }}>
        <Typography variant="h5">Posture Report</Typography>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Image
            src={"/static/images/inputs/m/1.png"}
            width={500}
            height={500}
            objectFit="contain"
          />
        </Box>
        <ArticleBox score={0} />
      </Box>
    </>
  );
};

export default ResultMView;
