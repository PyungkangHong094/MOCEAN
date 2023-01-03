import { Typography } from "@mui/material";
import React, { useState } from "react";
import { theme } from "src/theme";
import InputForm from "./input-form";

const EnergyForm = ({ onInput, ogData }) => {
  const [status, setStatus] = useState(null);

  const onChange = (inputValue) => {
    inputValue = parseFloat(inputValue);

    onInput(inputValue);

    if (inputValue <= 350 || 601 <= inputValue) {
      setStatus({ text: "bad", color: theme.palette.score.poor });
    } else if (351 <= inputValue && inputValue <= 399) {
      setStatus({ text: "not good", color: theme.palette.score.fair });
    } else if (400 <= inputValue && inputValue <= 549) {
      setStatus({ text: "good", color: theme.palette.score.good });
    } else if (550 <= inputValue && inputValue <= 600) {
      setStatus({ text: "excellent", color: theme.palette.score.excellent });
    } else {
      setStatus(null);
    }
  };

  return (
    <InputForm title={"Energy Score"} defaultValue={ogData} onChange={onChange}>
      {status != null && (
        <Typography variant="h6" color={status.color}>
          {status.text}
        </Typography>
      )}
    </InputForm>
  );
};

export default EnergyForm;
