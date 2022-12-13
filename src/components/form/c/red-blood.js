import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import { theme } from "src/theme";
import { DropdownCell, TextInputCell } from "../cell-types";
import ImageUpload from "./image-upload";
import InputForm from "./input-form";

const RedBloodCell = ({ onInput }) => {
  const [status, setStatus] = useState(null);

  const onChange = (inputValue) => {
    onInput(inputValue);

    const rate = Math.floor((inputValue / 21) * 100);
    if (90 <= rate && rate <= 100) {
      setStatus({ text: "excellent", color: theme.palette.score.excellent });
    } else if (80 <= rate && rate <= 89) {
      setStatus({ text: "good", color: theme.palette.score.good });
    } else if (65 <= rate && rate <= 79) {
      setStatus({ text: "fair", color: theme.palette.score.fair });
    } else if (rate <= 64) {
      setStatus({ text: "poor", color: theme.palette.score.poor });
    } else {
      setStatus(null);
    }
  };
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
            { text: "Excellent", color: theme.palette.score.excellent },
            { text: "Good", color: theme.palette.score.good },
            { text: "Not Good", color: theme.palette.score.fair },
            { text: "Bad", color: theme.palette.score.poor },
          ]}
          renderItem={(v) => (
            <Typography variant="h6" color={v.color}>
              {v.text}
            </Typography>
          )}
        />
      </InputForm>
      <ImageUpload id={"red-blood-cell"} />
    </Box>
  );
};

export default RedBloodCell;
