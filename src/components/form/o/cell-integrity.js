import { Box, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";
import Image from "next/image";
import { theme } from "src/theme";
import TextInput from "../textinput";

const CellIntegrity = () => {
  return (
    <Box mt={4} mb={2}>
      <Typography mb={2} variant="h5">
        9. Cell Integrity
      </Typography>
      <Box sx={{ position: "relative", height: 700, mb: 2 }}>
        <Image
          src={"/static/images/inputs/o/O_PhaseAngle_Men.png"}
          layout="fill"
          objectFit="contain"
        />
      </Box>
      <Box sx={{ position: "relative", height: 700, mb: 2 }}>
        <Image
          src={"/static/images/inputs/o/O_PhasesAngel_women.png"}
          layout="fill"
          objectFit="contain"
        />
      </Box>
      <Table>
        <TableRow>
          <TableCell align="center" sx={{ border: 1 }}>
            <Typography>Gender</Typography>
          </TableCell>
          <TableCell align="center" sx={{ border: 1 }}>
            <Typography>Age</Typography>
          </TableCell>
          <TableCell align="center" sx={{ border: 1 }}>
            <TextInput fullWidth />
          </TableCell>
        </TableRow>
      </Table>
    </Box>
  );
};

export default CellIntegrity;
