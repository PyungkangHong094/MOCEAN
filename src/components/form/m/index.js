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
import NorthIcon from '@mui/icons-material/North';
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
      <Posture id={id} />
      <MobilityCervical id={id} />
      <MobilitySpine id={id} />
      <MobilityUpper id={id} />
      <MobilityLower id={id} />
      <Movement id={id} />
      <Cardio id={id} />
      <Health id={id} />
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
      <Box height={50} />
    </Box>
  );
};

export default FormMView;
