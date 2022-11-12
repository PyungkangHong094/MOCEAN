import { Box, Typography } from "@mui/material";
import Cardio from "./cardio";
import Health from "./health";
import MobilityCervical from "./mobility-cervical";
import MobilityLower from "./mobility-lower";
import MobilitySpine from "./mobility-spine";
import MobilityUpper from "./mobility-upper";
import Movement from "./movement";
import Posture from "./posture";

const FormMView = () => {
  return (
    <Box px={4}>
      <Posture />
      <MobilityCervical />
      <MobilitySpine />
      <MobilityUpper />
      <MobilityLower />
      <Movement />
      <Cardio />
      <Health />
    </Box>
  );
};

export default FormMView;
