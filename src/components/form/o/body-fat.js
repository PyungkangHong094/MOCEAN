import { Box, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";
import Image from "next/image";
import { theme } from "src/theme";
import { BorderedCell, DropdownCell, TextInputCell } from "../cell-types";
import TextInput from "../textinput";
import { useOContext } from "./context";

const BodyFat = ({ onGenderInput, onAgeInput, onBodyFatInput }) => {
  const { data, setData } = useOContext();
  const { 
    gender,
    age,
    body_fat
  } = data.body_fat || {
    gender: 'male',
    age: 0,
    body_fat: 0
  };

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
            <DropdownCell
              id="gender"
              values={[
                { text: "Male", value: "male" },
                { text: "Female", value: "female" }
              ]}
              defaultValue={gender}
              renderItem={(v) => (
                <Typography variant="h6" color={"black"}>
                  {v.text}
                </Typography>
              )}
              onSelected={(v) => onGenderInput(v.value)}
            />
            <TextInputCell 
              defaultValue={age}
              hint={"Age"} 
              type="number" 
              onChange={(v) => onAgeInput(parseFloat(v))} 
            />
            <TextInputCell 
              defaultValue={body_fat}
              hint={"Percent"} 
              type="number" 
              onChange={(v) => onBodyFatInput(parseFloat(v))} 
            />
          </TableRow>
        </TableBody>
      </Table>
    </Box>
  );
};

export default BodyFat;
