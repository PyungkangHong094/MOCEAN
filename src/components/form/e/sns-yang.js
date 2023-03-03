import { Typography } from "@mui/material";
import React, { useState } from "react";
import { theme } from "src/theme";
import InputForm from "./input-form";

const SNSYangForm = ({ onInput, ogData }) => {
  const [status, setStatus] = useState(null);

  const onChange = (inputValue) => {
    inputValue = parseFloat(inputValue);

    onInput(inputValue);

    if (inputValue <= 59 || 70 <= inputValue) {
      setStatus({ text: "good", color: theme.palette.score.good });
    } else if (60 <= inputValue && inputValue <= 69) {
      setStatus({ text: "excellent", color: theme.palette.score.excellent });
    } else {
      setStatus(null);
    }
  };

  return (
    <InputForm title={"SNS-Yang"} defaultValue={ogData} onChange={onChange}>
      {status != null && (
        <Typography variant="h6" color={status.color}>
          {status.text}
        </Typography>
      )}
    </InputForm>
  );
};

export default SNSYangForm;
