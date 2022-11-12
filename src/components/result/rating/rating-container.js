import { Box, Typography } from "@mui/material";
import React from "react";
import RatingBar from "./rating-bar";

function RatingContainer({ title, data }) {
  console.log(data);
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
