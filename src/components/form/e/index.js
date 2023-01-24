import { Box, CircularProgress, Table, TableBody, TableRow, Typography } from "@mui/material";
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
  const { initData, setData } = useEContext();
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

  const { emotion } = apiResult;
  
  return (
    <Box p={4}>
      <StressForm onInput={onInput("stress")} ogData = {emotion?.stress} />
      <SleepForm onInput={onInput("sleep")} ogData = {emotion?.sleep} />
      <DigestiveForm onInput={onInput("digestion")} ogData = {emotion?.digestion} />
      <EnergyForm onInput={onInput("energy")} ogData = {emotion?.energy} />
      <Box my={16}>
        <SNSYangForm onInput={onInput("sns_yang")} ogData = {emotion?.sns_yang} />
        <PNSYinForm onInput={onInput("pns_yin")} ogData = {emotion?.pns_yin} />
      </Box>
      <Table sx={{ maxWidth: 600, mb: 4 }}>
        <TableBody>
          <TableRow>
            <TitleCell title={"기준값"} align={"center"} />
            <TextInputCell
              type="number"
              defaultValue={emotion?.default}
              onChange={(v) => {
                v = parseFloat(v);
                setStandard(v);
                onInput("default")(v);
              }}
            />
          </TableRow>
        </TableBody>
      </Table>
      <DetoxForm standardValue={standard} onInput={onInput("detox_energy")} ogData = {emotion?.detox_energy} />
      <LifeForm standardValue={standard} onInput={onInput("life_energy")} ogData = {emotion?.life_energy} />
      <DigestiveEnergyForm standardValue={standard} onInput={onInput("digestive_energy")} ogData = {emotion?.digestive_energy} />
      <ImmuneForm standardValue={standard} onInput={onInput("immune_energy")} ogData = {emotion?.immune_energy} />
      <PurificationForm standardValue={standard} onInput={onInput("purification_energy")} ogData = {emotion?.purification_energy} />
    </Box>
  );
};

export default FormEView;