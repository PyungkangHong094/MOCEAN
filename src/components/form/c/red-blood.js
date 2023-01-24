import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import { theme } from "src/theme";
import { DropdownCell, TextInputCell } from "../cell-types";
import { useCContext } from './context';
import ImageUpload from "./image-upload";
import InputForm from "./input-form";

const RedBloodCell = ({ onInput, onSelect, ogData }) => {
  // const { red_blood_cell_type, red_blood_cell_url } = ogData;

  const { data } = useCContext();

  return (
    <Box mb={10}>
      <InputForm title={"Red Blood Cell"}>
        {/* {status != null && (
        <Typography variant="h6" color={status.color}>
          {status.text}
        </Typography>
      )} */}
        <DropdownCell
          values={[
            { text: "Excellent", value: "excellent", color: theme.palette.score.excellent },
            { text: "Good", value: "good", color: theme.palette.score.good },
            { text: "Not Good", value: "not_good", color: theme.palette.score.fair },
            { text: "Bad", value: "bad", color: theme.palette.score.poor },
          ]}
          defaultValue={data?.red_blood_cell_type}
          renderItem={(v) => (
            <Typography variant="h6" color={v.color}>
              {v.text}
            </Typography>
          )}
          onSelected={(v) => onSelect(v.value)}
        />
      </InputForm>
      <ImageUpload 
        type={"red-blood-cell-image"}
        image={data?.red_blood_cell_url}
        onInput={onInput}
      />
    </Box>
  );
};

export default RedBloodCell;
