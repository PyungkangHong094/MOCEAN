import { Box, Typography } from "@mui/material";
import React from "react";
import RatingBar from "./rating-bar";

function RatingContainer({ title, data }) {
  return (
    <Box sx={{ width: 400 }}>
      <Typography sx={{ mb: 2 }} variant="h5">
        {title}
      </Typography>
      {data.map((e, i) => {
        const ratingBars = e.items.map((item) => (
          <RatingBar key={item.title} title={item.title} rating={item.score} />
        ));
        return (
          <Box key={i} ml={1} my={4}>
            {e.category ? (
              <Typography variant="h6" ml={2}>
                {e.category}
              </Typography>
            ) : null}
            {ratingBars}
          </Box>
        );
      })}
    </Box>
  );
}

export default RatingContainer;
