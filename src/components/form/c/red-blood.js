import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import { theme } from "src/theme";
import { DropdownCell, TextInputCell } from "../cell-types";
import ImageUpload from "./image-upload";
import InputForm from "./input-form";

const RedBloodCell = ({ onSelect }) => {
  return (
    <Box mb={10}>
      <InputForm title={"Red Blood Cell"}>
        {/* {status != null && (
        <Typography variant="h6" color={status.color}>
          {status.text}
        </Typography>
      )} */}
        <DropdownCell
          values={[
            { text: "Excellent", value: "excellent", color: theme.palette.score.excellent },
            { text: "Good", value: "good", color: theme.palette.score.good },
            { text: "Not Good", value: "fair", color: theme.palette.score.fair },
            { text: "Bad", value: "poor", color: theme.palette.score.poor },
          ]}
          renderItem={(v) => (
            <Typography variant="h6" color={v.color}>
              {v.text}
            </Typography>
          )}
          onSelected={(v) => onSelect(v.value)}
        />
      </InputForm>
      <ImageUpload id={"red-blood-cell"} />
    </Box>
  );
};

export default RedBloodCell;