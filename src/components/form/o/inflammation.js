import { Box, Table, TableBody, TableCell, TableRow, Typography } from "@mui/material";
import { green, orange, red, yellow } from "@mui/material/colors";
import Image from "next/image";
import { theme } from "src/theme";
import TextInput from "../textinput";

const Inflammation = () => {
  return (
    <Box mt={4} mb={2}>
      <Typography mb={2} variant="h5">
        5,6,7,8. Inflammation Reference (ECW/TBW)
      </Typography>
      <Box sx={{ position: "relative", height: 200 }}>
        <Image src={"/static/images/inputs/o/O_part5_8.png"} layout="fill" objectFit="contain" />
      </Box>
      <Table sx={{ width: 600 }}>
        <TableBody>
          <TableRow>
            <TableCell align="center" sx={{ border: 1 }}>
              <Typography>Inflammation (ECW/TBW)</Typography>
            </TableCell>
            <TableCell align="center" sx={{ border: 1 }}>
              <TextInput fullWidth />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="center" sx={{ border: 1 }}>
              <Typography>Upper Body-Right Arm</Typography>
            </TableCell>
            <TableCell align="center" sx={{ border: 1 }}>
              <TextInput fullWidth />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="center" sx={{ border: 1 }}>
              <Typography>Upper Body-Left Arm</Typography>
            </TableCell>
            <TableCell align="center" sx={{ border: 1 }}>
              <TextInput fullWidth />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="center" sx={{ border: 1 }}>
              <Typography>Lower Body-Right Arm</Typography>
            </TableCell>
            <TableCell align="center" sx={{ border: 1 }}>
              <TextInput fullWidth />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="center" sx={{ border: 1 }}>
              <Typography>Lower Body-Left Arm</Typography>
            </TableCell>
            <TableCell align="center" sx={{ border: 1 }}>
              <TextInput fullWidth />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="center" sx={{ border: 1 }}>
              <Typography>Trunk</Typography>
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

export default Inflammation;
