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
import RespiratoryCirculation from "./respiratory";
import ToxityLevel from "./toxity";
import VisceralFat from "./visceral";

const FormCView = ({ id }) => {
  const { initData, setData } = useCContext();
  const { isLoading, data: apiResult } = useUserforC(id);

  useEffect(() => {
    if (apiResult) {
      initData(apiResult.circulatory);
    }
    // console.log('C Data: ' + apiResult);
  }, [apiResult]);

  if (isLoading) {
    return <LoadingBar />;
  }
  // console.log("C data", apiResult.circulatory);

  const onInput = (key) => (value) =>
    setData({
      key,
      value,
    });

  const { circulatory } = apiResult;

  return (
    <Box p={4}>
      <BloodCirculation onInput={onInput("blood_circulation")} ogData={circulatory?.blood_circulation} />
      <LymphCirculation onInput={onInput("lymph_circulation")} ogData={circulatory?.lymph_circulation} />
      <ToxityLevel onInput={onInput("toxicity_level")} ogData={circulatory?.toxicity_level} />
      <VisceralFat 
        onInput={onInput("visceral_fat_url")}
        onSelect={onInput("visceral_fat_type")} 
        ogData={{
          visceral_fat_type: circulatory?.visceral_fat_type,
          visceral_fat_url: circulatory?.visceral_fat_url
        }}
      />
      <BloodPressure
        onSysInput={onInput("systolic_pressure")}
        onDiasInput={onInput("diastolic_pressure")}
        ogData={{
          systolic_pressure: circulatory?.systolic_pressure,
          diastolic_pressure: circulatory?.diastolic_pressure
        }}
      />
      <OxygenLevel onInput={onInput("oxygen_level")} ogData={circulatory?.oxygen_level} />
      <PulseRate onInput={onInput("pulse_rate")} ogData={circulatory?.pulse_rate} />
      <BloodGlucose onInput={onInput("blood_glucose")} ogData={circulatory?.blood_glucose} />
      <BloodCholesterol onInput={onInput("blood_cholesterol")} ogData={circulatory?.blood_cholesterol} />
      <RespiratoryCirculation onInput={onInput("respiratory_circulation")} ogData={circulatory?.respiratory_circulation} />
      <NitricOxideLevel onSelect={onInput("nitric_oxide_level")} ogData={circulatory?.nitric_oxide_level} />
      <RedBloodCell
        onInput={onInput("red_blood_cell_url")}
        onSelect={onInput("red_blood_cell_type")} 
        ogData={{
          red_blood_cell_type: circulatory?.red_blood_cell_type,
          red_blood_cell_url: circulatory?.red_blood_cell_url
        }}
      />
    </Box>
  );
};

export default FormCView;
