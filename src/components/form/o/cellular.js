import { Box, Table, TableBody, TableHead, TableRow, Typography } from "@mui/material";
import { green, orange, red, yellow } from "@mui/material/colors";
import { useEffect } from "react";
import { theme } from "src/theme";
import { BorderedCell, TextInputCell, TitleCell } from "../cell-types";
import TextInput from "../textinput";
import { useOContext } from "./context";

const Cellular = ({ onWeightInput, onSMMInput, onBodyFatInput }) => {
  const { data, setData } = useOContext();
  const { 
    weight, 
    smm, 
    body_fat, 
    score
  } = data.cellular_health_score || {
    weight: 0,
    smm: 0,
    body_fat: 0,
    score: 0
  };

  useEffect(() => {
    const score =
      0.54987 * ((weight || 0) / 2.205) +
      0.01279 * ((smm || 0) / 2.205) -
      1.85422 * ((body_fat || 0) / 2.205) +
      75.67391;
    setData({
      section: "cellular_health_score",
      key: "score",
      value: score,
    });
  }, [weight, smm, body_fat]);

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
            <TextInputCell 
              type={"number"} 
              defaultValue={weight} 
              onChange={(v) => onWeightInput(parseFloat(v))} 
            />
            <TextInputCell 
              type={"number"} 
              defaultValue={smm} 
              onChange={(v) => onSMMInput(parseFloat(v))} 
            />
            <TextInputCell 
              type={"number"} 
              defaultValue={body_fat} 
              onChange={(v) => onBodyFatInput(parseFloat(v))} 
            />
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
              <Typography>{(weight || 0) / 2.205}</Typography>
            </BorderedCell>
            <BorderedCell align={"center"}>
              <Typography>{(smm || 0) / 2.205}</Typography>
            </BorderedCell>
            <BorderedCell align={"center"}>
              <Typography>{(body_fat || 0) / 2.205}</Typography>
            </BorderedCell>
            <BorderedCell align={"center"}></BorderedCell>
          </TableRow>
        </TableBody>
      </Table>
    </Box>
  );
};

export default Cellular;
