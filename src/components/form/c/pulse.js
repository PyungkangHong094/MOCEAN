import { Typography } from "@mui/material";
import React, { useState } from "react";
import { theme } from "src/theme";
import { TextInputCell } from "../cell-types";
import InputForm from "./input-form";

const PulseRate = ({ onInput }) => {
  return (
    <InputForm title={"Pulse Rate"}>
      <TextInputCell type={"number"} onChange={(v) => onInput(parseFloat(v))} />
    </InputForm>
  );
};

export default PulseRate;
