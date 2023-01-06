import { Box, Button, Table, TableBody, TableRow, Typography } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import { theme } from "src/theme";
import { DropdownCell, TextInputCell, TitleCell } from "../cell-types";
import ImageUpload from "./image-upload";
import InputForm from "./input-form";

const VisceralFat = ({ onInput, onSelect, ogData }) => {
  const { visceral_fat_type, visceral_fat_url } = ogData;

  return (
    <Box mb={4}>
      <Typography variant="h5">Visceral Fat</Typography>
      <Box sx={{ position: "relative", height: 200 }}>
        <Image src={"/static/images/inputs/c/viceral-fat.png"} layout="fill" objectFit="contain" />
      </Box>
      <ImageUpload id={"visceral-fat-image"} onInput={onInput} />
      <Box maxWidth={600} mx={"auto"} mt={2}>
        <Table sx={{ maxWidth: 600 }}>
          <TableBody>
            <TableRow>
              <TitleCell title={"Figure"} align={"center"} />
              <DropdownCell
                values={[
                  { text: "Poor", value: "poor", color: theme.palette.score.poor },
                  { text: "Fair", value: "fair", color: theme.palette.score.fair },
                  { text: "Good", value: "good", color: theme.palette.score.good },
                  { text: "Excellent", value: "excellent", color: theme.palette.score.excellent },
                ]}
                defaultValue={visceral_fat_type}
                renderItem={(v) => (
                  <Typography variant="h6" color={v.color}>
                    {v.text}
                  </Typography>
                )}
                onSelected={(v) => onSelect(v.value)}
              />
            </TableRow>
          </TableBody>
        </Table>
      </Box>
    </Box>
  );
};

export default VisceralFat;
