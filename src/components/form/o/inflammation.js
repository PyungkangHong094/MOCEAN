import { Box, Table, TableBody, TableCell, TableRow, Typography } from "@mui/material";
import { green, orange, red, yellow } from "@mui/material/colors";
import Image from "next/image";
import { theme } from "src/theme";
import { TextInputCell, TitleCell } from "../cell-types";
import TextInput from "../textinput";
import { useOContext } from "./context";


const Inflammation = () => {
  const { data, setData } = useOContext();

  const { 
    inflamation, 
    right_arm, 
    left_arm,
  right_leg,
  left_leg,
  trunk, } = data || {};

  const onInput = (key) => (value) =>
    setData({
      key,
      value,
    });

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
            <TextInputCell type={"number"} onChange={(v) => {
              onInput("inflamation")(parseFloat(v))
            }}/>
          </TableRow>
          <TableRow>
            <TitleCell title={"Upper Body-Right Arm"} align="center" />
            <TextInputCell type={"number"}  onChange={(v) => {
              onInput("right_arm")(parseFloat(v))
            }}/>
          </TableRow>
          <TableRow>
            <TitleCell title={"Upper Body-Left Arm"} align="center" />
            <TextInputCell type={"number"}  onChange={(v) => {
              onInput("left_arm")(parseFloat(v))
            }}/>
          </TableRow>
          <TableRow>
            <TitleCell title={"Lower Body-Right Leg"} align="center" />
            <TextInputCell type={"number"}  onChange={(v) => {
              onInput("right_leg")(parseFloat(v))
            }}/>
          </TableRow>
          <TableRow>
            <TitleCell title={"Lower Body-Left Leg"} align="center" />
            <TextInputCell type={"number"}  onChange={(v) => {
              onInput("left_leg")(parseFloat(v))
            }}/>
          </TableRow>
          <TableRow>
            <TitleCell title={"Trunk"} align="center" />
            <TextInputCell type={"number"}  onChange={(v) => {
              onInput("trunk")(parseFloat(v))
            }}/>
          </TableRow>
        </TableBody>
      </Table>
    </Box>
  );
};

export default Inflammation;
