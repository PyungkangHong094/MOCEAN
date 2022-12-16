import { Box, CircularProgress, Typography } from "@mui/material";
import LoadingBar from "src/components/loading-bar";
import { useUserforO } from "src/data/repository/o";
import BodyFat from "./body-fat";
import CellIntegrity from "./cell-integrity";
import Cellular from "./cellular";
import Hydration from "./hydration";
import Inflammation from "./inflammation";
import Visceral from "./visceral";

const FormOView = ({ id }) => {
  const { isLoading, data } = useUserforO(id);
  console.log("O data", data);

  if (isLoading) {
    return <LoadingBar />;
  }
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
