import { Box, Typography } from "@mui/material";
import BodyFat from "./body-fat";
import Cellular from "./cellular";
import Hydration from "./hydration";

const FormOView = () => {
  return (
    <Box px={4}>
      <Cellular />
      <Hydration />
      <BodyFat />
    </Box>
  );
};

export default FormOView;
