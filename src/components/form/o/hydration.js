import { Box, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";
import { green, orange, red, yellow } from "@mui/material/colors";
import Image from "next/image";
import { useState } from "react";
import { theme } from "src/theme";
import { DropdownCell, TextInputCell, TitleCell } from "../cell-types";
import TextInput from "../textinput";

const initData = {
  gender: 0,
  bodyWater: 0,
  weight: 0,
};

const Hydration = ({ initialData = initData }) => {
  const [data, setData] = useState(initialData);
  const { bodyWater, weight } = data;

  const setGender = (value) => {
    const newData = {
      ...data,
      gender: value,
    };
    setData(newData);
  };
  const setBodyWater = (value) => {
    const newData = {
      ...data,
      bodyWater: value,
    };
    setData(newData);
  };
  const setWeight = (value) => {
    const newData = {
      ...data,
      weight: value,
    };
    setData(newData);
  };

  const score = weight == 0 ? 0 : ((bodyWater / weight) * 100).toFixed(1);

  return (
    <Box mt={4} mb={2}>
      <Typography mb={2} variant="h5">
        2. Hydration% = Total Body Water (TBW) / Weigth
      </Typography>
      <Box sx={{ position: "relative", height: 240, mb: 2 }}>
        <Image src={"/static/images/inputs/o/o1.png"} layout="fill" objectFit="contain" />
      </Box>
      <Table>
        <TableBody>
          <TableRow>
            <DropdownCell
              id="gender"
              values={["Male", "Female"]}
              renderItem={(v) => (
                <Typography variant="h6" color={"black"}>
                  {v}
                </Typography>
              )}
            />
            <TextInputCell defaultValue={bodyWater} hint={"Body water"} onChange={setBodyWater} />
            <TextInputCell defaultValue={weight} hint={"Weight"} onChange={setWeight} />
            <TitleCell title={score} />
          </TableRow>
        </TableBody>
      </Table>
    </Box>
  );
};

export default Hydration;
