import { Box, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";
import Image from "next/image";
import { useState, useEffect } from "react";
import { theme } from "src/theme";
import { TextInputCell, TitleCell } from "../cell-types";
import TextInput from "../textinput";
import { useOContext } from "./context";

const Visceral = ({ onVisceralInput, onVisceralDivideInput }) => {
  const { data, setData } = useOContext();

  const { 
    visceral_fat, 
    visceral_fat_divide_10 
  } = data.visceral_fat || {
    visceral_fat: 0,
    visceral_fat_divide_10: 0
  };

  useEffect(() => {
    onVisceralDivideInput(visceral_fat/10);
  }, [visceral_fat]);

  return (
    <Box mt={4} mb={2}>
      <Typography mb={2} variant="h5">
        4. Visceral Fat
      </Typography>
      <Box sx={{ position: "relative", height: 240, mb: 2 }}>
        <Image src={"/static/images/inputs/o/o4.png"} layout="fill" objectFit="contain" />
      </Box>
      <Table>
        <TableBody>
          <TableRow>
            <TitleCell title={"should be below 100"} align="center" />
            <TextInputCell 
              defaultValue={visceral_fat}
              type={"number"}
              onChange={(v) => onVisceralInput(parseFloat(v))}
            />
            <TitleCell title={visceral_fat_divide_10} align={"center"} />
          </TableRow>
        </TableBody>
      </Table>
    </Box>
  );
};

export default Visceral;
