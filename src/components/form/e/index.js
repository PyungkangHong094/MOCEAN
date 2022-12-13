import { Box, Table, TableBody, Typography } from "@mui/material";
import { useState } from "react";
import { TextInputCell, TitleCell } from "../cell-types";
import DetoxForm from "./detox";
import DigestiveForm from "./digestive";
import DigestiveEnergyForm from "./digestive-energy";
import EnergyForm from "./energy";
import ImmuneForm from "./immune";
import InputForm from "./input-form";
import LifeForm from "./life";
import PNSYinForm from "./pns-Yin";
import PurificationForm from "./purification";
import SleepForm from "./sleep";
import SNSYangForm from "./sns-yang";
import StressForm from "./stress";

const FormEView = () => {
  const [standard, setStandard] = useState(0);
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
