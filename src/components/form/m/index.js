import { Box, Grid, ImageList, ImageListItem, Typography } from "@mui/material";
import Image from "next/image";
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
      <Box>
        <ImageList sx={{ mx: 4 }} cols={2} gap={32} rowHeight={512}>
          <ImageListItem>
            <Image src={"/static/images/inputs/m/1.png"} objectFit="contain" layout="fill" />
          </ImageListItem>
          <ImageListItem>
            <Image src={"/static/images/inputs/m/2.png"} objectFit="contain" layout="fill" />
          </ImageListItem>
          <ImageListItem>
            <Image src={"/static/images/inputs/m/3.png"} objectFit="contain" layout="fill" />
          </ImageListItem>
          <ImageListItem>
            <Image src={"/static/images/inputs/m/4.png"} objectFit="contain" layout="fill" />
          </ImageListItem>
        </ImageList>
        {/* <Grid>
          <Grid item xs={6}>
            <Image src={"/static/images/inputs/m/1.png"} layout="fill" />
          </Grid>
          <Grid item xs={6}>
            <Image src={"/static/images/inputs/m/2.png"} objectFit="contain" layout="fill" />
          </Grid>
          <Grid item xs={6}>
            <Image src={"/static/images/inputs/m/3.png"} objectFit="contain" layout="fill" />
          </Grid>
          <Grid item xs={6}>
            <Image src={"/static/images/inputs/m/4.png"} objectFit="contain" layout="fill" />
          </Grid>
        </Grid> */}
      </Box>
    </Box>
  );
};

export default FormMView;
