import { Box, CircularProgress, Typography } from "@mui/material";
import LoadingBar from "src/components/loading-bar";
import { useUserforO } from "src/data/repository/o";
import BodyFat from "./body-fat";
import CellIntegrity from "./cell-integrity";
import Cellular from "./cellular";
import Hydration from "./hydration";
import Inflammation from "./inflammation";
import Visceral from "./visceral";
import { useOContext } from "./context";
import { useEffect } from "react";

const FormOView = ({ id }) => {
  const { initData, setData } = useOContext();
  const { isLoading, data: apiResult } = useUserforO(id);

  useEffect(() => {
    if (apiResult) {
      initData(apiResult.organ);
    }
  }, [apiResult]);

  if (isLoading) {
    return <LoadingBar />;
  }

  console.log("O data", apiResult);

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
