import { Box, CircularProgress, Table, TableBody, TableRow, Typography } from "@mui/material";
import NorthIcon from '@mui/icons-material/North';
import { useEffect, useState } from "react";
import LoadingBar from "src/components/loading-bar";
import { useUserforE } from "src/data/repository/e";
import { TextInputCell, TitleCell } from "../cell-types";
import { EProvider, useEContext } from "./context";
import DetoxForm from "./detox";
import DigestiveForm from "./digestive";
import DigestiveEnergyForm from "./digestive-energy";
import EnergyForm from "./energy";
import ImmuneForm from "./immune";
import InputForm from "./input-form";
import LifeForm from "./life";
import PNSYinForm from "./pns-yin";
import PurificationForm from "./purification";
import SleepForm from "./sleep";
import SNSYangForm from "./sns-yang";
import StressForm from "./stress";

const FormEView = ({ id }) => {
  const { data, initData, setData } = useEContext();
  const { isLoading, data: apiResult } = useUserforE(id);
  const [standard, setStandard] = useState(0);

  useEffect(() => {
    if (apiResult) {
      initData(apiResult.emotion);
    }
  }, [apiResult]);

  if (isLoading) {
    return <LoadingBar />;
  }

  const onInput = (key) => (value) =>
    setData({
      key,
      value,
    });
  
  return (
    <Box p={4}>
      <StressForm onInput={onInput("stress")} ogData = {data?.stress} />
      <SleepForm onInput={onInput("sleep")} ogData = {data?.sleep} />
      <DigestiveForm onInput={onInput("digestion")} ogData = {data?.digestion} />
      <EnergyForm onInput={onInput("energy")} ogData = {data?.energy} />
      <Box my={16}>
        <SNSYangForm onInput={onInput("sns_yang")} ogData = {data?.sns_yang} />
        <PNSYinForm onInput={onInput("pns_yin")} ogData = {data?.pns_yin} />
      </Box>
      <Table sx={{ maxWidth: 600, mb: 4 }}>
        <TableBody>
          <TableRow>
            <TitleCell title={"기준값"} align={"center"} />
            <TextInputCell
              type="number"
              defaultValue={data?.default}
              onChange={(v) => {
                v = parseFloat(v);
                setStandard(v);
                onInput("default")(v);
              }}
            />
          </TableRow>
        </TableBody>
      </Table>
      <DetoxForm standardValue={standard} onInput={onInput("detox_energy")} ogData = {data?.detox_energy} />
      <LifeForm standardValue={standard} onInput={onInput("life_energy")} ogData = {data?.life_energy} />
      <DigestiveEnergyForm standardValue={standard} onInput={onInput("digestive_energy")} ogData = {data?.digestive_energy} />
      <ImmuneForm standardValue={standard} onInput={onInput("immune_energy")} ogData = {data?.immune_energy} />
      <PurificationForm standardValue={standard} onInput={onInput("purification_energy")} ogData = {data?.purification_energy} />
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        paddingTop: 5,
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

export default FormEView;