import { Typography } from "@mui/material";
import React, { useState } from "react";
import { theme } from "src/theme";
import InputForm from "./input-form";

const DetoxForm = ({ standardValue, onInput, ogData }) => {
  const [status, setStatus] = useState(null);

  const onChange = (inputValue) => {
    inputValue = parseFloat(inputValue);

    onInput(inputValue);

    const diff = Math.abs(inputValue - standardValue);
    if (diff >= 16) {
      setStatus({ text: "bad", color: theme.palette.score.poor });
    } else if (11 <= diff && diff <= 15) {
      setStatus({ text: "not good", color: theme.palette.score.fair });
    } else if (6 <= diff && diff <= 10) {
      setStatus({ text: "good", color: theme.palette.score.good });
    } else if (diff <= 5) {
      setStatus({ text: "excellent", color: theme.palette.score.excellent });
    } else {
      setStatus(null);
    }
  };

  return (
    <InputForm title={"Detox energy"} defaultValue={ogData} onChange={onChange}>
      {status != null && (
        <Typography variant="h6" color={status.color}>
          {status.text}
        </Typography>
      )}
    </InputForm>
  );
};

export default DetoxForm;
