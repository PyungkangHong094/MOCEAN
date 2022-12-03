import { Box, Table, TableRow, TextField, Typography } from "@mui/material";
import { BorderedCell, TitleCell } from "../cell-types";
import TextInput from "../textinput";
import TableFrame from "./table-frame";

const Cardio = () => {
  return (
    <TableFrame title={"Cardio-respiraotory strength"} maxWidth={600}>
      <TableRow>
        <TitleCell title={"Gender (M/F)"} />
        <BorderedCell>
          <TextInput fullWidth />
        </BorderedCell>
      </TableRow>
      <TableRow>
        <TitleCell title={"Age"} />
        <BorderedCell>
          <TextInput fullWidth />
        </BorderedCell>
      </TableRow>
      <TableRow>
        <TitleCell title={"Maximum HR"} />
        <BorderedCell>
          <TextInput fullWidth />
        </BorderedCell>
      </TableRow>
      <TableRow>
        <TitleCell title={"Time on bruce protocol"} />
        <BorderedCell>
          <TextInput fullWidth />
        </BorderedCell>
      </TableRow>
    </TableFrame>
  );
};

export default Cardio;
