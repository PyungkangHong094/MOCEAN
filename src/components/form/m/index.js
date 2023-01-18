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
import { useState, useEffect } from "react";
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
import { useMContext } from './context';

const FormMView = ({ id }) => {
  const { initData } = useMContext();
  const { isLoading, data: apiResult } = useUserforM(id);

  useEffect(() => {
    if (apiResult) {
      initData(apiResult);
    }
    // console.log('M Data: ' + apiResult);
  }, [apiResult]);

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
