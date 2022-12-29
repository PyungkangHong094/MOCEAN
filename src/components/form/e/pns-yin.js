import { Typography } from "@mui/material";
import React, { useState } from "react";
import { theme } from "src/theme";
import InputForm from "./input-form";

const PNSYinForm = ({ onInput, ogData }) => {
  const [status, setStatus] = useState(null);

  const onChange = (inputValue) => {
    inputValue = parseFloat(inputValue);

    onInput(inputValue);

    if (inputValue <= 30 || 41 <= inputValue) {
      setStatus({ text: "good", color: theme.palette.score.good });
    } else if (31 <= inputValue && inputValue <= 40) {
      setStatus({ text: "excellent", color: theme.palette.score.excellent });
    } else {
      setStatus(null);
    }
  };

  return (
    <InputForm title={"안정도 (PNS-Yin)"} defaultValue={ogData} onChange={onChange}>
      {status != null && (
        <Typography variant="h6" color={status.color}>
          {status.text}
        </Typography>
      )}
    </InputForm>
  );
};

export default PNSYinForm;
