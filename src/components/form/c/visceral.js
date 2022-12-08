import { Box, Button, Table, TableBody, TableRow, Typography } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import { theme } from "src/theme";
import { DropdownCell, TextInputCell, TitleCell } from "../cell-types";
import ImageUpload from "./image-upload";
import InputForm from "./input-form";

const VisceralFat = ({ onInput }) => {
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
      <Typography variant="h5">Visceral Fat</Typography>
      <Box sx={{ position: "relative", height: 200 }}>
        <Image src={"/static/images/inputs/c/viceral-fat.png"} layout="fill" objectFit="contain" />
      </Box>
      <ImageUpload id={"visceral-fat-image"} />
      <Box maxWidth={600} mx={"auto"} mt={2}>
        <Table sx={{ maxWidth: 600 }}>
          <TableBody>
            <TableRow>
              <TitleCell title={"Figure"} align={"center"} />
              <DropdownCell
                values={[
                  { text: "Poor", color: theme.palette.score.poor },
                  { text: "Fair", color: theme.palette.score.fair },
                  { text: "Good", color: theme.palette.score.good },
                  { text: "Excellent", color: theme.palette.score.excellent },
                ]}
                renderItem={(v) => (
                  <Typography variant="h6" color={v.color}>
                    {v.text}
                  </Typography>
                )}
              />
            </TableRow>
          </TableBody>
        </Table>
      </Box>
    </Box>
  );
};

export default VisceralFat;
