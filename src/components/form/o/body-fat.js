import { Box, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";
import Image from "next/image";
import { theme } from "src/theme";
import TextInput from "../textinput";

const BodyFat = () => {
  return (
    <Box mt={4} mb={2}>
      <Typography mb={2} variant="h5">
        3. Body Fat Data Input
      </Typography>
      <Typography variant="h6">Body Fat Percentage - Men</Typography>
      <Box sx={{ position: "relative", height: 400 }}>
        <Image src={"/static/images/inputs/o/o2.png"} layout="fill" objectFit="contain" />
      </Box>
      <Typography variant="h6">Body Fat Percentage - Women</Typography>
      <Box sx={{ position: "relative", height: 480, mb: 2 }}>
        <Image src={"/static/images/inputs/o/o3.png"} layout="fill" objectFit="contain" />
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

export default BodyFat;
