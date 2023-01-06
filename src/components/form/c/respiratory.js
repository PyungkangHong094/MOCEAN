import { Typography } from "@mui/material";
import React, { useState } from "react";
import { theme } from "src/theme";
import { TextInputCell } from "../cell-types";
import InputForm from "./input-form";

const RespiratoryCirculation = ({ onInput, ogData }) => {
  return (
    <InputForm title={"Respiratory Circulation"}>
      <TextInputCell 
        defaultValue={ogData}
        type={"number"} 
        onChange={(v) => onInput(parseFloat(v))} 
      />
    </InputForm>
  );
};

export default RespiratoryCirculation;
