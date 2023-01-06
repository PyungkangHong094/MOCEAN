import { Box, Button, Table, TableBody, TableRow, Typography } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import { theme } from "src/theme";
import { DropdownCell, TextInputCell, TitleCell } from "../cell-types";
import ImageUpload from "./image-upload";
import InputForm from "./input-form";

const BloodGlucose = ({ onInput, ogData }) => {
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
            <TextInputCell 
              defaultValue={ogData}
              type="number" 
              onChange={(v) => onInput(parseFloat(v))} 
            />
          </TableRow>
        </TableBody>
      </Table>
    </Box>
  );
};

export default BloodGlucose;
