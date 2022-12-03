import { Box, Table, TableRow, TextField, Typography } from "@mui/material";
import { BorderedCell, TitleCell } from "../cell-types";
import TextInput from "../textinput";
import TableFrame from "./table-frame";

const Health = () => {
  return (
    <TableFrame title={"Musuloskeletal Health"} maxWidth={600}>
      <TableRow>
        <TitleCell title={"Pushup Test"} />
        <TitleCell title={"Gender (M/F)"} />
        <BorderedCell>
          <TextInput fullWidth />
        </BorderedCell>
      </TableRow>
      <TableRow>
        <TitleCell title={"Squat Test"} />
        <TitleCell title={"Gender (M/F)"} />
        <BorderedCell>
          <TextInput fullWidth />
        </BorderedCell>
      </TableRow>
      <TableRow>
        <TitleCell title={"Plank Test"} />
        <TitleCell title={"Gender (M/F)"} />
        <BorderedCell>
          <TextInput fullWidth />
        </BorderedCell>
      </TableRow>
    </TableFrame>
  );
};

export default Health;
