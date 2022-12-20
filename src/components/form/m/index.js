import {
  Box,
  Button,
  Checkbox,
  CircularProgress,
  Grid,
  ImageList,
  ImageListItem,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import LoadingBar from "src/components/loading-bar";
import ScoreText from "src/components/score";
import { useUserforM } from "src/data/repository/m";
import Cardio from "./cardio";
import Health from "./health";
import MobilityCervical from "./mobility-cervical";
import MobilityLower from "./mobility-lower";
import MobilitySpine from "./mobility-spine";
import MobilityUpper from "./mobility-upper";
import Movement from "./movement";
import Posture from "./posture";

const FormMView = ({ id }) => {
  const { isLoading, data } = useUserforM(id);
  console.log("M data", data);

  if (isLoading) {
    return <LoadingBar />;
  }

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

      <Box height={100} />
    </Box>
  );
};

export default FormMView;
