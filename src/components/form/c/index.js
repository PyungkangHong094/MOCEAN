import { Box, CircularProgress, Typography } from "@mui/material";
import LoadingBar from "src/components/loading-bar";
import { useUserforC } from "src/data/repository/c";
import BloodCirculation from "./blood";
import BloodCholesterol from "./blood-cholesterol";
import BloodGlucose from "./blood-glucose";
import BloodPressure from "./blood-pressure";
import LymphCirculation from "./lymph";
import NitricOxideLevel from "./nitric";
import OxygenLevel from "./oxygen";
import PulseRate from "./pulse";
import RedBloodCell from "./red-blood";
import ResparitoryCirculation from "./resparitory";
import ToxityLevel from "./toxity";
import VisceralFat from "./visceral";

const FormCView = ({ id }) => {
  const { isLoading, data } = useUserforC(id);
  console.log("C data", data);

  if (isLoading) {
    return <LoadingBar />;
  }
  return (
    <Box p={4}>
      <BloodCirculation onInput={() => {}} />
      <LymphCirculation onInput={() => {}} />
      <ToxityLevel onInput={() => {}} />
      <VisceralFat />
      <BloodPressure onSysInput={() => {}} onDiasInput={() => {}} />
      <OxygenLevel onInput={() => {}} />
      <PulseRate onInput={() => {}} />
      <BloodGlucose onInput={() => {}} />
      <BloodCholesterol onInput={() => {}} />
      <ResparitoryCirculation onInput={() => {}} />
      <NitricOxideLevel onInput={() => {}} />
      <RedBloodCell onInput={() => {}} />
    </Box>
  );
};

export default FormCView;
