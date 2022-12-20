import { Typography } from "@mui/material";
import React, { useState } from "react";
import { theme } from "src/theme";
import { DropdownCell, TextInputCell } from "../cell-types";
import InputForm from "./input-form";

const NitricOxideLevel = ({ onSelect }) => {
  return (
    <InputForm title={"Nitric Oxide Level"}>
      {/* {status != null && (
        <Typography variant="h6" color={status.color}>
          {status.text}
        </Typography>
      )} */}
      <DropdownCell
        values={[
          { text: "Optimal", value: "optimal", color: theme.palette.score.excellent },
          { text: "Low", value: "low", color: theme.palette.score.fair },
          { text: "Depleted", value: "depleted", color: theme.palette.score.poor },
        ]}
        renderItem={(v) => (
          <Typography variant="h6" color={v.color}>
            {v.text}
          </Typography>
        )}
        onSelected={(v) => onSelect(v.value)}
      />
    </InputForm>
  );
};

export default NitricOxideLevel;
