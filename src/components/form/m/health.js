import { Box, Table, TableCell, TableRow, TextField, Typography } from "@mui/material";
import TextInput from "../textinput";

const Health = () => {
  return (
    <Box mt={4} mb={2}>
      <Typography variant="h5">Musuloskeletal Health</Typography>
      <Table sx={{ maxWidth: 600 }}>
        <TableRow>
          <TableCell>
            <Typography></Typography>
          </TableCell>
          <TableCell>
            <Typography variant="h6">Pushup Test</Typography>
          </TableCell>
          <TableCell>
            <Typography variant="h6">Squat Test</Typography>
          </TableCell>
          <TableCell>
            <Typography variant="h6">Plank Test</Typography>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Typography>Gender</Typography>
          </TableCell>
          <TableCell>
            <TextInput fullWidth />
          </TableCell>
          <TableCell>
            <TextInput fullWidth />
          </TableCell>
          <TableCell>
            <TextInput fullWidth />
          </TableCell>
        </TableRow>
      </Table>
    </Box>
  );
};

export default Health;
