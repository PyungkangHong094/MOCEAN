import { Box, Table, TableCell, TableRow, Typography } from "@mui/material";
import TextInput from "../textinput";

const MobilityUpper = () => {
  return (
    <Box mt={4} mb={2}>
      <Typography variant="h5">Mobility&Balance_Upper_Extremity</Typography>
      <Table>
        <TableRow>
          {[
            "Upper Extremity Assessment",
            "Left",
            "Left Assessment",
            "Right",
            "Right Assessment",
          ].map((title) => (
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
          <TableCell>
            <TextInput fullWidth />
          </TableCell>
        </TableRow>
      </Table>
      <Typography variant="h6" ml={4} mt={4}>
        Result
      </Typography>
      <Table>
        <TableRow>
          {["", "Assessment Score", "Assessment Maximum", "Patient Score"].map((title) => (
            <TableCell align="center">
              <Typography variant="h6">{title}</Typography>
            </TableCell>
          ))}
        </TableRow>
        <TableRow>
          <TableCell align="center">
            <Typography>Left</Typography>
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
            <Typography>Right</Typography>
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

export default MobilityUpper;
