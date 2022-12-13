import { Box, Table, TableBody, TableCell, TableRow, TextField, Typography } from "@mui/material";
import { TextInputCell, TitleCell } from "../cell-types";
import TextInput from "../textinput";
import TableFrame from "./table-frame";

const Posture = () => {
  return (
    <TableFrame title={"Posture"} maxWidth={600}>
      <TableRow>
        <TitleCell title={"Musuloskeletal Index"} />
        <TextInputCell type={"number"} onChange={() => {}} />
      </TableRow>
    </TableFrame>
  );
};

export default Posture;
