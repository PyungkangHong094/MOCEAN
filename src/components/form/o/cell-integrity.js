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
      <Typography variant="h6">Phase Angle - Men</Typography>
      <Box sx={{ position: "relative", height: 540, my: 2 }}>
        <Image src={"/static/images/inputs/o/o6.png"} layout="fill" objectFit="contain" />
      </Box>
      <Typography variant="h6">Phase Angle - Women</Typography>
      <Box sx={{ position: "relative", height: 540, my: 2 }}>
        <Image src={"/static/images/inputs/o/o7.png"} layout="fill" objectFit="contain" />
      </Box>
      <Table>
        <TableBody>
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
        </TableBody>
      </Table>
    </Box>
  );
};

export default CellIntegrity;
