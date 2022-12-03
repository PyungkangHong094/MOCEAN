import { Box, Table, TableBody, TableCell, TableRow, TextField, Typography } from "@mui/material";
import TextInput from "../textinput";
import TableFrame from "./table-frame";

const Posture = () => {
  return (
    <TableFrame title={"Posture"} maxWidth={600}>
      <TableRow>
        <TableCell sx={{ border: 1 }}>
          <Typography>Musuloskeletal Index</Typography>
        </TableCell>
        <TableCell sx={{ border: 1 }}>
          <TextInput fullWidth />
        </TableCell>
      </TableRow>
    </TableFrame>
  );
};

export default Posture;
