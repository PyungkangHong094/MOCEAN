import { Box, Button, Table, TableBody, TableRow, Typography } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import { theme } from "src/theme";
import { DropdownCell, TextInputCell, TitleCell } from "../cell-types";
import ImageUpload from "./image-upload";
import InputForm from "./input-form";

const BloodGlucose = ({ onInput }) => {
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
    <Box mb={4}>
      <Typography variant="h5">Blood Glucose</Typography>
      <Box sx={{ position: "relative", height: 160 }}>
        <Image
          src={"/static/images/inputs/c/blood-glucose.png"}
          layout="fill"
          objectFit="contain"
        />
      </Box>
      <Table sx={{ maxWidth: 600, mt: 2 }}>
        <TableBody>
          <TableRow>
            <TitleCell title={"Figure"} align={"center"} />
            <TextInputCell type="number" onChange={onInput} />
          </TableRow>
        </TableBody>
      </Table>
    </Box>
  );
};

export default BloodGlucose;
