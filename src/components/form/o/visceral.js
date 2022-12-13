import { Box, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import { theme } from "src/theme";
import { TextInputCell, TitleCell } from "../cell-types";
import TextInput from "../textinput";

const Visceral = () => {
  const [data, setData] = useState(0);

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
            <TitleCell title={"should be below 100"} align="center" />
            <TextInputCell onChange={setData} />
            <TitleCell title={data / 10} align={"center"} />
          </TableRow>
        </TableBody>
      </Table>
    </Box>
  );
};

export default Visceral;
