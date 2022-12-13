import { Box, Table, TableBody, TableHead, TableRow, Typography } from "@mui/material";
import { green, orange, red, yellow } from "@mui/material/colors";
import { useState } from "react";
import { theme } from "src/theme";
import { BorderedCell, TextInputCell, TitleCell } from "../cell-types";
import TextInput from "../textinput";

const initData = {
  pound: 0,
  smm: 0,
  fat: 0,
};

const Cellular = ({ initialData = initData }) => {
  const [data, setData] = useState(initialData);
  const { pound, smm, fat } = data;

  const setPound = (value) => {
    const newData = {
      ...data,
      pound: value,
    };
    setData(newData);
  };
  const setSMM = (value) => {
    const newData = {
      ...data,
      smm: value,
    };
    setData(newData);
  };
  const setFat = (value) => {
    const newData = {
      ...data,
      fat: value,
    };
    setData(newData);
  };

  const score =
    0.54987 * (pound / 2.205) + 0.01279 * (smm / 2.205) - 1.85422 * (fat / 2.205) + 75.67391;

  return (
    <Box mt={4} mb={2}>
      <Typography mb={2} variant="h5">
        1. Cellular Health Score
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TitleCell
              align="center"
              colSpan={4}
              title={
                "score = (0.54987 * weight(kg)) + (0.01279 * SMM(kg)) - (1.85422 * fat(kg)) +75.67391"
              }
            />
          </TableRow>
          <TableRow>
            <BorderedCell align="center">
              <Typography color={theme.palette.score.poor}>70 or less (Poor)</Typography>
            </BorderedCell>
            <BorderedCell align="center">
              <Typography color={theme.palette.score.fair}>70-80 (Fair)</Typography>
            </BorderedCell>
            <BorderedCell align="center">
              <Typography color={theme.palette.score.good}>80-90 (Good)</Typography>
            </BorderedCell>
            <BorderedCell align="center">
              <Typography color={theme.palette.score.excellent}>{"> 90 (Excellent)"}</Typography>
            </BorderedCell>
          </TableRow>
          <TableRow>
            <TitleCell
              align="center"
              colSpan={4}
              title={"Lean Body Mass = Body Weight - (Body Weight * Body Fat%)"}
            />
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TitleCell align="center" title={"pound (Weight)"} />
            <TitleCell align="center" title={"SMM (lbs)"} />
            <TitleCell align="center" title={"Fat (lbs)"} />
            <TitleCell align="center" title={"Score"} />
          </TableRow>
          <TableRow>
            <TextInputCell type={"number"} defaultValue={pound} onChange={setPound} />
            <TextInputCell type={"number"} defaultValue={smm} onChange={setSMM} />
            <TextInputCell type={"number"} defaultValue={fat} onChange={setFat} />
            <BorderedCell align={"center"}>
              <Typography>{score}</Typography>
            </BorderedCell>
          </TableRow>
          <TableRow>
            <TitleCell title={"Convert pound to kg"} />
            <BorderedCell />
            <BorderedCell />
            <BorderedCell />
          </TableRow>
          <TableRow>
            <BorderedCell align={"center"}>
              <Typography>{pound / 2.205}</Typography>
            </BorderedCell>
            <BorderedCell align={"center"}>
              <Typography>{smm / 2.205}</Typography>
            </BorderedCell>
            <BorderedCell align={"center"}>
              <Typography>{fat / 2.205}</Typography>
            </BorderedCell>
            <BorderedCell align={"center"}></BorderedCell>
          </TableRow>
        </TableBody>
      </Table>
    </Box>
  );
};

export default Cellular;
