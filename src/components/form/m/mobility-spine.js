import { Box, Table, TableCell, TableRow, Typography } from "@mui/material";
import TextInput from "../textinput";

const MobilitySpine = () => {
  return (
    <Box mt={4} mb={2}>
      <Typography variant="h5">Mobility&Balance_Spine_Thoraco_lumbar</Typography>
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
            <Typography>Forward Head Posture</Typography>
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
            <Typography>Flat Back</Typography>
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
            <Typography>Scapular Wining</Typography>
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
            <Typography>Toe Touch</Typography>
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

export default MobilitySpine;
