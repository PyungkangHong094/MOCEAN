import { Box, Typography } from "@mui/material";
import BodyFat from "./body-fat";
import CellIntegrity from "./cell-integrity";
import Cellular from "./cellular";
import Hydration from "./hydration";
import Inflammation from "./inflammation";
import Visceral from "./visceral";

const FormOView = () => {
  return (
    <Box px={4} mb={4}>
      <Cellular />
      <Hydration />
      <BodyFat />
      <Visceral />
      <Inflammation />
      <CellIntegrity />
    </Box>
  );
};

export default FormOView;
