import { Box, Table, TableCell, TableRow, TextField, Typography } from "@mui/material";
import TextInput from "../textinput";

const Posture = () => {
  return (
    <Box mt={4} mb={2}>
      <Typography variant="h5">Posture</Typography>
      <Table sx={{ maxWidth: 600 }}>
        <TableRow>
          <TableCell>
            <Typography>Musuloskeletal Index</Typography>
          </TableCell>
          <TableCell>
            <TextInput fullWidth />
          </TableCell>
        </TableRow>
      </Table>
    </Box>
  );
};

export default Posture;
