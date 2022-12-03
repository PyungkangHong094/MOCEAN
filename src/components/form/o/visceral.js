import { Box, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";
import Image from "next/image";
import { theme } from "src/theme";
import TextInput from "../textinput";

const Visceral = () => {
  return (
    <Box mt={4} mb={2}>
      <Typography mb={2} variant="h5">
        4. Visceral Fat
      </Typography>
      <Box sx={{ position: "relative", height: 240, mb: 2 }}>
        <Image src={"/static/images/inputs/o/o4.png"} layout="fill" objectFit="contain" />
      </Box>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell align="center" sx={{ border: 1 }}>
              <Typography>should be below 100</Typography>
            </TableCell>
            <TableCell align="center" sx={{ border: 1 }}>
              <TextInput fullWidth />
            </TableCell>
            <TableCell align="center" sx={{ border: 1 }}>
              <Typography>visceral / 10</Typography>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Box>
  );
};

export default Visceral;
