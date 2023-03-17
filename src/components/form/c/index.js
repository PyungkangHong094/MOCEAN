import { Box, CircularProgress, Typography } from "@mui/material";
import NorthIcon from '@mui/icons-material/North';
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
  const { data, initData, setData } = useCContext();
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

  return (
    <Box p={4}>
      <BloodCirculation onInput={onInput("blood_circulation")} ogData={data?.blood_circulation} />
      <LymphCirculation onInput={onInput("lymph_circulation")} ogData={data?.lymph_circulation} />
      <ToxityLevel onInput={onInput("toxicity_level")} ogData={data?.toxicity_level} />
      <VisceralFat 
        onInput={onInput("visceral_fat_url")}
        onSelect={onInput("visceral_fat_type")} 
        ogData={{
          visceral_fat_type: data?.visceral_fat_type,
          visceral_fat_url: data?.visceral_fat_url
        }}
      />
      <BloodPressure
        onSysInput={onInput("systolic_pressure")}
        onDiasInput={onInput("diastolic_pressure")}
        ogData={{
          systolic_pressure: data?.systolic_pressure,
          diastolic_pressure: data?.diastolic_pressure
        }}
      />
      <OxygenLevel onInput={onInput("oxygen_level")} ogData={data?.oxygen_level} />
      <PulseRate onInput={onInput("pulse_rate")} ogData={data?.pulse_rate} />
      <BloodGlucose onInput={onInput("blood_glucose")} ogData={data?.blood_glucose} />
      <BloodCholesterol onInput={onInput("blood_cholesterol")} ogData={data?.blood_cholesterol} />
      <RespiratoryCirculation onInput={onInput("respiratory_circulation")} ogData={data?.respiratory_circulation} />
      <NitricOxideLevel onSelect={onInput("nitric_oxide_level")} ogData={data?.nitric_oxide_level} />
      <RedBloodCell
        onInput={onInput("red_blood_cell_url")}
        onSelect={onInput("red_blood_cell_type")} 
        ogData={{
          red_blood_cell_type: data?.red_blood_cell_type,
          red_blood_cell_url: data?.red_blood_cell_url
        }}
      />
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        marginLeft: 'auto',
        marginRight: 0,
        width: 'fit-content',
        color: '#55B6C9',
        cursor: 'pointer'
      }} onClick={() => window.scrollTo(0, 0)}>
        <NorthIcon style={{ marginRight: 5, fontSize: 40 }} />
        <Typography>back to top</Typography>
      </Box>
    </Box>
  );
};

export default FormCView;
