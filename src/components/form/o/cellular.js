import { Box, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";
import { green, orange, red, yellow } from "@mui/material/colors";
import { theme } from "src/theme";
import TextInput from "../textinput";

const Cellular = () => {
  return (
    <Box mt={4} mb={2}>
      <Typography mb={2} variant="h5">
        1. Cellular Health Score
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={{ border: 1 }} align="center" colSpan={4}>
              <Typography>
                score = (0.54987 * weight(kg)) + (0.01279 * SMM(kg)) - (1.85422 * fat(kg)) +
                75.67391
              </Typography>
            </TableCell>
          </TableRow>
          <TableRow sx={{ border: 1 }}>
            <TableCell align="center" colSpan={1}>
              <Typography color={theme.palette.score.poor}>70 or less (Poor)</Typography>
            </TableCell>
            <TableCell align="center" colSpan={1}>
              <Typography color={theme.palette.score.fair}>70-80 (Fair)</Typography>
            </TableCell>
            <TableCell align="center" colSpan={1}>
              <Typography color={theme.palette.score.good}>80-90 (Good)</Typography>
            </TableCell>
            <TableCell align="center" colSpan={1}>
              <Typography color={theme.palette.score.excellent}>{"> 90 (Excellent)"}</Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell sx={{ border: 1 }} align="center" colSpan={4}>
              <Typography>Lean Body Mass = Body Weight - (Body Weight * Body Fat%)</Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell align="center" sx={{ border: 1 }}>
              <Typography>pound (Weight)</Typography>
            </TableCell>
            <TableCell align="center" sx={{ border: 1 }}>
              <Typography>SMM (lbs)</Typography>
            </TableCell>
            <TableCell align="center" sx={{ border: 1 }}>
              <Typography>Fat (lbs)</Typography>
            </TableCell>
            <TableCell align="center" sx={{ border: 1 }}>
              <Typography>Score</Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell sx={{ border: 1 }}>
              <TextInput />
            </TableCell>
            <TableCell sx={{ border: 1 }}>
              <TextInput />
            </TableCell>
            <TableCell sx={{ border: 1 }}>
              <TextInput />
            </TableCell>
            <TableCell sx={{ border: 1 }}>
              <TextInput />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell sx={{ border: 1 }}>
              <Typography>pound input / 2.205</Typography>
            </TableCell>
            <TableCell sx={{ border: 1 }}>
              <Typography>SMM / 2.205</Typography>
            </TableCell>
            <TableCell sx={{ border: 1 }}>
              <Typography>Fat / 2.205</Typography>
            </TableCell>
            <TableCell sx={{ border: 1 }}>
              <Typography></Typography>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Box>
  );
};

export default Cellular;
