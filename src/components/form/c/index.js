import { Box, Typography } from "@mui/material";
import BloodCirculation from "./blood";
import BloodGlucose from "./blood-glucose";
import BloodPressure from "./blood-pressure";
import LymphCirculation from "./lymph";
import NitricOxideLevel from "./nitric";
import OxygenLevel from "./oxygen";
import PurseRate from "./pulse";
import RedBloodCell from "./red-blood";
import ResparitoryCirculation from "./resparitory";
import ToxityLevel from "./toxity";
import VisceralFat from "./visceral";

const FormCView = () => {
  return (
    <Box p={4}>
      <BloodCirculation onInput={() => {}} />
      <LymphCirculation onInput={() => {}} />
      <ToxityLevel onInput={() => {}} />
      <VisceralFat />
      <BloodPressure onSysInput={() => {}} onDiasInput={() => {}} />
      <OxygenLevel onInput={() => {}} />
      <PurseRate onInput={() => {}} />
      <BloodGlucose onInput={() => {}} />
      <ResparitoryCirculation onInput={() => {}} />
      <NitricOxideLevel onInput={() => {}} />
      <RedBloodCell onInput={() => {}} />
    </Box>
  );
};

export default FormCView;
