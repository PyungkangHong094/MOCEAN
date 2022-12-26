import { Box, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";
import { green, orange, red, yellow } from "@mui/material/colors";
import Image from "next/image";
import { useState } from "react";
import { theme } from "src/theme";
import { DropdownCell, TextInputCell, TitleCell } from "../cell-types";
import TextInput from "../textinput";
import { useOContext } from "./context";

const initData = {
  gender: 0,
  bodyWater: 0,
  weight: 0,
};

const Hydration = () => {
  const [gender, setGender] = useState(initData.gender);
  const [weight, setWeight] = useState(initData.weight);
  const { data, setData } = useOContext();
  const { total_body_water } = data || {};

  const setBodyWater = (value) => {
    setData({
      key: 'total_body_water',
      value,
    });
  };

  const score = weight == 0 ? 0 : (((total_body_water || 0) / weight) * 100).toFixed(1);

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
              values={["Male", "Female"]}
              renderItem={(v) => (
                <Typography variant="h6" color={"black"}>
                  {v}
                </Typography>
              )}
            />
            <TextInputCell defaultValue={total_body_water || 0} hint={"Body water"} onChange={setBodyWater} />
            <TextInputCell defaultValue={weight} hint={"Weight"} onChange={setWeight} />
            <TitleCell title={score} />
          </TableRow>
        </TableBody>
      </Table>
    </Box>
  );
};

export default Hydration;
