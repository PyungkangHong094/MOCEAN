import { Typography } from "@mui/material";
import React, { useState } from "react";
import { theme } from "src/theme";
import { TextInputCell } from "../cell-types";
import InputForm from "./input-form";

const BloodCholesterol = ({ onInput }) => {
  return (
    <InputForm title={"Blood Cholesterol"}>
      <TextInputCell type={"number"} onChange={(v) => onInput(parseFloat(v))} />
    </InputForm>
  );
};

export default BloodCholesterol;
