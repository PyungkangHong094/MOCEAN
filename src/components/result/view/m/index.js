import { Box, Typography } from "@mui/material";

import Image from "next/image";
import RatingContainer from "../../rating/rating-container";
import { Program } from "../../result-menu";
import ArticleBox from "./articles";

const ratingData = [
  { title: "Cellular Health", score: 2 },
  { title: "Hydration", score: 2 },
  { title: "Body Fat", score: 3 },
  { title: "Visceral Fat", score: 4 },
  { title: "Inflammation", score: 2 },
  { title: "Upper Body (left)", score: 3 },
  { title: "Upper Body (right)", score: 3 },
  { title: "Lower Body (left)", score: 3 },
  { title: "Lower Body (right)", score: 3 },
  { title: "Trunk", score: 4 },
  { title: "Cell integrity", score: 2 },
];

const ResultMView = () => {
  // const data = useUserforM();

  return (
    <>
      <RatingContainer title={Program.M} data={ratingData} />
      <Box sx={{ mx: 4, flex: 1 }}>
        <Typography variant="h5">Posture Report</Typography>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Image src={"/static/images/body1.png"} width={500} height={500} objectFit="contain" />
        </Box>
        <ArticleBox />
      </Box>
    </>
  );
};

export default ResultMView;
