import { Box, CircularProgress, Typography } from "@mui/material";
import { useEffect } from "react";
import LoadingBar from "src/components/loading-bar";
import { useUserforC } from "src/data/repository/c";
import BloodCirculation from "./blood";
import BloodCholesterol from "./blood-cholesterol";
import BloodGlucose from "./blood-glucose";
import BloodPressure from "./blood-pressure";
import { useCContext } from "./context";
import LymphCirculation from "./lymph";
import NitricOxideLevel from "./nitric";
import OxygenLevel from "./oxygen";
import PulseRate from "./pulse";
import RedBloodCell from "./red-blood";
import ResparitoryCirculation from "./resparitory";
import ToxityLevel from "./toxity";
import VisceralFat from "./visceral";

const FormCView = ({ id }) => {
  const { initData, setData } = useCContext();
  const { isLoading, data: apiResult } = useUserforC(id);

  useEffect(() => {
    if (apiResult) {
      initData(apiResult.circulatory);
    }
  }, [apiResult]);

  if (isLoading) {
    return <LoadingBar />;
  }
  console.log("C data", apiResult.circulatory);

  const onInput = (key) => (value) =>
    setData({
      key,
      value,
    });

  return (
    <Box p={4}>
      <BloodCirculation onInput={onInput("blood_circulation")} />
      <LymphCirculation onInput={onInput("lymph_circulation")} />
      <ToxityLevel onInput={onInput("toxicity_level")} />
      <VisceralFat onSelect={onInput("visceral_fat_type")} />
      <BloodPressure
        onSysInput={onInput("systolic_pressure")}
        onDiasInput={onInput("diastolic_pressure")}
      />
      <OxygenLevel onInput={onInput("oxygen_level")} />
      <PulseRate onInput={onInput("pulse_rate")} />
      <BloodGlucose onInput={onInput("blood_glucose")} />
      <BloodCholesterol onInput={onInput("blood_cholesterol")} />
      <ResparitoryCirculation onInput={onInput("respiratory_circulation")} />
      <NitricOxideLevel onSelect={onInput("nitric_oxide_level")} />
      <RedBloodCell onSelect={onInput("red_blood_cell_type")} />
    </Box>
  );
};

export default FormCView;
