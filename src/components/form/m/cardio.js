import { Box, Table, TableCell, TableRow, TextField, Typography } from "@mui/material";
import TextInput from "../textinput";

const Cardio = () => {
  return (
    <Box mt={4} mb={2}>
      <Typography variant="h5">Cardio-respiraotory strength</Typography>
      <Table sx={{ maxWidth: 600 }}>
        <TableRow>
          <TableCell>
            <Typography>Gender</Typography>
          </TableCell>
          <TableCell>
            <TextInput fullWidth />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Typography>Age</Typography>
          </TableCell>
          <TableCell>
            <TextInput fullWidth />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Typography>Time on bruce protocol</Typography>
          </TableCell>
          <TableCell>
            <TextInput fullWidth />
          </TableCell>
        </TableRow>
      </Table>
    </Box>
  );
};

export default Cardio;
