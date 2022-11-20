import { Box, Typography } from "@mui/material";

import Image from "next/image";
import { useRouter } from "next/router";
import { useMMobility } from "src/data/repository/m";
import RatingContainer from "../../rating/rating-container";
import { Program } from "../../result-menu";
import ArticleBox from "./articles";

const ratingData = [
  { category: "Posture", items: [{ title: "Posture", score: 2 }] },
  {
    category: "Mobility & Balance",
    items: [
      { title: "Spine_Cervical", score: 1 },
      { title: "Spine_Thoraco-lumbar", score: 1 },
    ],
  },
  {
    category: "Upper Extremity",
    items: [
      { title: "Left", score: 1 },
      { title: "Right", score: 4 },
    ],
  },
  {
    category: "Lower Extremity",
    items: [
      { title: "Left", score: 2 },
      { title: "Right", score: 3 },
    ],
  },
  { category: "Movement", items: [{ title: "Movement", score: 3 }] },
  { category: "Cardio-respiratory strength", items: [{ title: "VO2 Max", score: 1 }] },

  {
    category: "Musculo skeletal strength",
    items: [
      { title: "Push-up test", score: 2 },
      { title: "Squat test", score: 3 },
      { title: "Plank test", score: 1 },
    ],
  },
];

const ResultMView = () => {
  const { query } = useRouter();
  // const { status, data } = useMMobility(query.cid);
  // console.log(status, data);

  return (
    <>
      <RatingContainer title={Program.M} data={ratingData} />
      <Box sx={{ mx: 4, flex: 1 }}>
        <Typography variant="h5">Posture Report</Typography>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Image src={"/static/images/body1.png"} width={500} height={500} objectFit="contain" />
        </Box>
        <ArticleBox score={0} />
      </Box>
    </>
  );
};

export default ResultMView;
