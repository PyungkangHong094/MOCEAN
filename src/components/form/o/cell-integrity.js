import { Box, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";
import Image from "next/image";
import { theme } from "src/theme";
import { DropdownCell, TextInputCell } from "../cell-types";
import TextInput from "../textinput";
import { useOContext } from "./context";


const CellIntegrity = () => {
  const { data, setData } = useOContext();

  const {whole_body_phase_angle} = data || {};


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
            <DropdownCell
              id="gender"
              values={["Male", "Female"]}
              renderItem={(v) => (
                <Typography variant="h6" color={"black"}>
                  {v}
                </Typography>
              )}
            />
            <TextInputCell hint={"Age"} type="number" onChange={() => {}} />
            <TextInputCell hint={"Angle"} type="number" onChange={(v) => {
              setData({
                key: 'whole_body_phase_angle',
                value: parseFloat(v)
              })
            }} />
          </TableRow>
        </TableBody>
      </Table>
    </Box>
  );
};

export default CellIntegrity;
