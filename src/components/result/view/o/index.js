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

const ResultOView = () => {
  const data = useUserforM();

  return (
    <>
      <RatingContainer title={Program.O} data={ratingData} />
      <Box>
        <TotalScoreArticle />
        <Divider variant="middle" sx={{ color: "black", borderBottom: 1.5 }} />
        <HydrationArticle />
        <Divider variant="middle" sx={{ color: "black", borderBottom: 1.5 }} />
        <MuscleArticle />
        <Divider variant="middle" sx={{ color: "black", borderBottom: 1.5 }} />
        <VisceralArticle />
        <Divider variant="middle" sx={{ color: "black", borderBottom: 1.5 }} />
        <InflammationArticle />
        <Divider variant="middle" sx={{ color: "black", borderBottom: 1.5 }} />
        <PhaseArticle />
        <Divider variant="middle" sx={{ color: "black", borderBottom: 1.5 }} />
      </Box>
    </>
  );
};

export default ResultOView;
