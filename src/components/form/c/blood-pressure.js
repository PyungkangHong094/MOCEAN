import { Typography } from "@mui/material";
import React, { useState } from "react";
import { theme } from "src/theme";
import { TextInputCell } from "../cell-types";
import InputForm from "./input-form";

const BloodPressure = ({ onSysInput, onDiasInput }) => {
  return (
    <InputForm title={"Blood Pressure"} maxWidth={900}>
      {/* {status != null && (
        <Typography variant="h6" color={status.color}>
          {status.text}
        </Typography>
      )} */}
      <TextInputCell
        type={"number"}
        onChange={(v) => onSysInput(parseFloat(v))}
        hint={"systolic pressure"}
      />
      <TextInputCell
        type={"number"}
        onChange={(v) => onDiasInput(parseFloat(v))}
        hint={"diastolic pressure"}
      />
    </InputForm>
  );
};

export default BloodPressure;
