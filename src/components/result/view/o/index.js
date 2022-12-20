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

const ResultOView = ({ id }) => {
  const { isLoading, data } = useUserforO(id);
  console.log("C data", data);

  if (isLoading) {
    return <LoadingBar />;
  }

  if (!data) {
    return <Box />;
  }

  return (
    <>
      <RatingContainer title={Program.O} data={ratingData} />
      <Box>
        <TotalScoreArticle score={2} />
        <Divider variant="middle" sx={{ color: "black", borderBottom: 1.5 }} />
        <HydrationArticle score={1} />
        <Divider variant="middle" sx={{ color: "black", borderBottom: 1.5 }} />
        <MuscleArticle score={2} />
        <Divider variant="middle" sx={{ color: "black", borderBottom: 1.5 }} />
        <VisceralArticle score={3} />
        <Divider variant="middle" sx={{ color: "black", borderBottom: 1.5 }} />
        <InflammationArticle score={0} />
        <Divider variant="middle" sx={{ color: "black", borderBottom: 1.5 }} />
        <PhaseArticle score={2} />
        <Divider variant="middle" sx={{ color: "black", borderBottom: 1.5 }} />
      </Box>
    </>
  );
};

export default ResultOView;
