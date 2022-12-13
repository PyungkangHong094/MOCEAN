import { Typography } from "@mui/material";
import React, { useState } from "react";
import { theme } from "src/theme";
import { TextInputCell } from "../cell-types";
import InputForm from "./input-form";

const BloodPressure = ({ onSysInput, onDiasInput }) => {
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
    <InputForm title={"Blood Pressure"} maxWidth={900}>
      {/* {status != null && (
        <Typography variant="h6" color={status.color}>
          {status.text}
        </Typography>
      )} */}
      <TextInputCell type={"number"} onChange={onSysInput} />
      <TextInputCell type={"number"} onChange={onDiasInput} />
    </InputForm>
  );
};

export default BloodPressure;
