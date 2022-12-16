import { Box, CircularProgress, Table, TableBody, Typography } from "@mui/material";
import { useState } from "react";
import LoadingBar from "src/components/loading-bar";
import { useUserforE } from "src/data/repository/e";
import { TextInputCell, TitleCell } from "../cell-types";
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
  const { isLoading, data } = useUserforE(id);
  console.log("E data", data);
  const [standard, setStandard] = useState(0);

  if (isLoading) {
    return <LoadingBar />;
  }

  return (
    <Box p={4}>
      <StressForm onInput={() => {}} />
      <SleepForm onInput={() => {}} />
      <DigestiveForm onInput={() => {}} />
      <EnergyForm onInput={() => {}} />
      <Box my={16}>
        <SNSYangForm onInput={() => {}} />
        <PNSYinForm onInput={() => {}} />
      </Box>
      <Table sx={{ maxWidth: 600, mb: 4 }}>
        <TableBody>
          <TitleCell title={"기준값"} align={"center"} />
          <TextInputCell type="number" defaultValue={standard} onChange={setStandard} />
        </TableBody>
      </Table>
      <DetoxForm standardValue={standard} onInput={() => {}} />
      <LifeForm standardValue={standard} onInput={() => {}} />
      <DigestiveEnergyForm standardValue={standard} onInput={() => {}} />
      <ImmuneForm standardValue={standard} onInput={() => {}} />
      <PurificationForm standardValue={standard} onInput={() => {}} />
    </Box>
  );
};

export default FormEView;
