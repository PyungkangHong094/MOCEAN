import { Typography } from "@mui/material";
import React, { useState } from "react";
import { theme } from "src/theme";
import InputForm from "./input-form";

const StressForm = ({ onInput }) => {
  const [status, setStatus] = useState(null);

  const onChange = (inputValue) => {
    onInput(inputValue);

    if (50 <= inputValue && inputValue <= 65) {
      setStatus({ text: "bad", color: theme.palette.score.poor });
    } else if (66 <= inputValue && inputValue <= 79) {
      setStatus({ text: "not good", color: theme.palette.score.fair });
    } else if (80 <= inputValue && inputValue <= 90) {
      setStatus({ text: "good", color: theme.palette.score.good });
    } else if (91 <= inputValue && inputValue <= 100) {
      setStatus({ text: "excellent", color: theme.palette.score.excellent });
    } else {
      setStatus(null);
    }
  };

  return (
    <InputForm title={"Stress Score"} defaultValue={0} onChange={onChange}>
      {status != null && (
        <Typography variant="h6" color={status.color}>
          {status.text}
        </Typography>
      )}
    </InputForm>
  );
};

export default StressForm;
