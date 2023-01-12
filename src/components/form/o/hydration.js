import { Box, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";
import { green, orange, red, yellow } from "@mui/material/colors";
import Image from "next/image";
import { useState, useEffect } from "react";
import { theme } from "src/theme";
import { DropdownCell, TextInputCell, TitleCell } from "../cell-types";
import TextInput from "../textinput";
import { useOContext } from "./context";

const Hydration = ({ onGenderInput, onBodyWaterInput, onWeightInput }) => {
  const { data, setData } = useOContext();
  const { 
    gender,
    total_body_water,
    weight,
    score 
  } = data.hydration || {
    gender: 'male',
    total_body_water: 0,
    weight: 0,
    score: 0
  };

  useEffect(() => {
    if (weight > 0) {
      setData({
        section: 'hydration',
        key: 'score',
        value: parseFloat(((total_body_water / weight) * 100).toFixed(1))
      });
    }
  }, [total_body_water, weight]);

  return (
    <Box mt={4} mb={2}>
      <Typography mb={2} variant="h5">
        2. Hydration% = Total Body Water (TBW) / Weight
      </Typography>
      <Box sx={{ position: "relative", height: 240, mb: 2 }}>
        <Image src={"/static/images/inputs/o/o1.png"} layout="fill" objectFit="contain" />
      </Box>
      <Table>
        <TableBody>
          <TableRow>
            <DropdownCell
              id="gender"
              values={[
                { text: "Male", value: "male" },
                { text: "Female", value: "female" }
              ]}
              defaultValue={gender}
              renderItem={(v) => (
                <Typography variant="h6" color={"black"}>
                  {v.text}
                </Typography>
              )}
              onSelected={(v) => onGenderInput(v.value)}
            />
            <TextInputCell 
              defaultValue={total_body_water} 
              hint={"Body water"} 
              onChange={(v) => onBodyWaterInput(parseFloat(v))} 
            />
            <TextInputCell 
              defaultValue={weight} 
              hint={"Weight"} 
              onChange={(v) => onWeightInput(parseFloat(v))} 
            />
            <TitleCell title={score} />
          </TableRow>
        </TableBody>
      </Table>
    </Box>
  );
};

export default Hydration;
