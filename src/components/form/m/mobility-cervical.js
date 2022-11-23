import { Box, Table, TableCell, TableRow, Typography } from "@mui/material";
import TextInput from "../textinput";

const MobilityCervical = () => {
  return (
    <Box mt={4} mb={2}>
      <Typography variant="h5">Mobility&Balance_Cervical</Typography>
      <Table>
        <TableRow>
          {["Cervical", "Assessment", "Assessment Maximum", "Patient Score"].map((title) => (
            <TableCell align="center">
              <Typography variant="h6">{title}</Typography>
            </TableCell>
          ))}
        </TableRow>
        <TableRow>
          <TableCell align="center">
            <Typography>Mandible Position</Typography>
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
        <TableRow>
          <TableCell align="center">
            <Typography>Cervical Extension</Typography>
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
        <TableRow>
          <TableCell align="center">
            <Typography>Cervical Flexion</Typography>
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
        <TableRow>
          <TableCell align="center">
            <Typography>Cervical Rotation</Typography>
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
        <TableRow>
          <TableCell align="center">
            <Typography>Cervical Side Bendering</Typography>
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
        <TableRow sx={{ borderTop: "1px solid black" }}>
          {["Result", "Assessment Sum", "Assessment Maximum Sum", "Patient Score Sum"].map(
            (title) => (
              <TableCell align="center">
                <Typography variant="h6">{title}</Typography>
              </TableCell>
            )
          )}
        </TableRow>
      </Table>
    </Box>
  );
};

export default MobilityCervical;
