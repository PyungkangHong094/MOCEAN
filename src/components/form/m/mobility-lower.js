import { Box, Table, TableCell, TableRow, Typography } from "@mui/material";
import TextInput from "../textinput";

const MobilityLower = () => {
  return (
    <Box mt={4} mb={2}>
      <Typography variant="h5">Mobility&Balance_Lower_Extremity</Typography>
      <Table>
        <TableRow>
          {[
            "Lower Extremity Assessment",
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
            <Typography>Pelvic Torsion</Typography>
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
            <Typography>Single Leg Raise</Typography>
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
            <Typography>Adduction Drop Test</Typography>
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
            <Typography>Hip IR</Typography>
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
            <Typography>Thomas Test</Typography>
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
            <Typography>1st MTP flexion</Typography>
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
            <Typography>Feet</Typography>
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
            <Typography>Pattern</Typography>
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

export default MobilityLower;
