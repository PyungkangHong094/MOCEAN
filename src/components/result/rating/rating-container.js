import { Box, Typography } from "@mui/material";
import React from "react";
import RatingBar from "./rating-bar";

function RatingContainer({ title, data }) {
  const sampleData = [
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
  data = sampleData;
  return (
    <Box sx={{ width: 400 }}>
      <Typography sx={{ mb: 2 }} variant="h5">
        {title}
      </Typography>
      {data.map((e, i) => (
        <RatingBar key={i} title={e.title} rating={e.score} />
      ))}
    </Box>
  );
}

export default RatingContainer;
