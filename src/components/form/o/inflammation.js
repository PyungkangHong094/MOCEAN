import { useEffect } from 'react';
import { Box, Table, TableBody, TableCell, TableRow, Typography } from "@mui/material";
import { green, orange, red, yellow } from "@mui/material/colors";
import Image from "next/image";
import { theme } from "src/theme";
import { TextInputCell, TitleCell } from "../cell-types";
import TextInput from "../textinput";
import { useOContext } from "./context";

const Inflammation = ({
  onRightArmInput,
  onLeftArmInput,
  onRightLegInput,
  onLeftLegInput,
  onTrunkInput,
  onInflammationInput
}) => {
  const { data, setData } = useOContext();

  const { 
    inflammation, 
    right_arm, 
    left_arm,
    right_leg,
    left_leg,
    trunk
  } = data.inflammation_reference || {
    right_arm: 0,
    left_arm: 0,
    right_leg: 0,
    left_leg: 0,
    trunk: 0,
    inflammation: 0
  };

  return (
    <Box mt={4} mb={2}>
      <Typography mb={2} variant="h5">
        5,6,7,8. Inflammation Reference (ECW/TBW)
      </Typography>
      <Box sx={{ position: "relative", height: 160, mb: 2 }}>
        <Image src={"/static/images/inputs/o/o5.png"} layout="fill" objectFit="contain" />
      </Box>
      <Table sx={{ width: 600 }}>
        <TableBody>
          <TableRow>
            <TitleCell title={"Inflammation (ECW/TBW)"} align="center" />
            <TextInputCell 
              defaultValue={inflammation}
              type={"number"} 
              onChange={(v) => onInflammationInput(parseFloat(v))}
            />
          </TableRow>
          <TableRow>
            <TitleCell title={"Upper Body-Right Arm"} align="center" />
            <TextInputCell 
              defaultValue={right_arm}
              type={"number"}
              onChange={(v) => onRightArmInput(parseFloat(v))}
            />
          </TableRow>
          <TableRow>
            <TitleCell title={"Upper Body-Left Arm"} align="center" />
            <TextInputCell 
              defaultValue={left_arm}
              type={"number"}
              onChange={(v) => onLeftArmInput(parseFloat(v))}
            />
          </TableRow>
          <TableRow>
            <TitleCell title={"Lower Body-Right Leg"} align="center" />
            <TextInputCell 
              defaultValue={right_leg}
              type={"number"}
              onChange={(v) => onRightLegInput(parseFloat(v))}
            />
          </TableRow>
          <TableRow>
            <TitleCell title={"Lower Body-Left Leg"} align="center" />
            <TextInputCell 
              defaultValue={left_leg}
              type={"number"}
              onChange={(v) => onLeftLegInput(parseFloat(v))}
            />
          </TableRow>
          <TableRow>
            <TitleCell title={"Trunk"} align="center" />
            <TextInputCell 
              defaultValue={trunk}
              type={"number"}
              onChange={(v) => onTrunkInput(parseFloat(v))}
            />
          </TableRow>
        </TableBody>
      </Table>
    </Box>
  );
};

export default Inflammation;
