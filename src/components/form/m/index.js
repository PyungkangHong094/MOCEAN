import {
  Box,
  Button,
  Checkbox,
  Grid,
  ImageList,
  ImageListItem,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import ScoreText from "src/components/score";
import Cardio from "./cardio";
import Health from "./health";
import MobilityCervical from "./mobility-cervical";
import MobilityLower from "./mobility-lower";
import MobilitySpine from "./mobility-spine";
import MobilityUpper from "./mobility-upper";
import Movement from "./movement";
import Posture from "./posture";

const FormMView = () => {
  const [selectedImageId, selectImage] = useState(1);
  const [anchorEl, setAnchorEl] = useState(null);

  const isStatusOpen = Boolean(anchorEl);
  const [status, setStatus] = useState(0);
  const openStatus = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const selectStatus = (status) => {
    setStatus(status);
    closeStatus();
  };
  const closeStatus = () => {
    setAnchorEl(null);
  };
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
          {[1, 2, 3, 4].map((id) => (
            <ImageListItem key={id}>
              <Box>
                <Image
                  src={`/static/images/inputs/m/${id}.png`}
                  objectFit="contain"
                  layout="fill"
                />
                <Checkbox
                  sx={{ "& .MuiSvgIcon-root": { fontSize: 30 } }}
                  checked={id == selectedImageId}
                  onChange={(event) => selectImage(event.target.checked ? id : 0)}
                />
              </Box>
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", my: 4 }}>
        <Typography variant="h5">This patient is in</Typography>
        <Button
          id="basic-button"
          aria-controls={isStatusOpen ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={isStatusOpen ? "true" : undefined}
          onClick={openStatus}
        >
          <ScoreText score={status} />
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={isStatusOpen}
          onClose={closeStatus}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={() => selectStatus(0)}>Poor</MenuItem>
          <MenuItem onClick={() => selectStatus(1)}>Fair</MenuItem>
          <MenuItem onClick={() => selectStatus(2)}>Good</MenuItem>
          <MenuItem onClick={() => selectStatus(3)}>Excellent</MenuItem>
        </Menu>
        <Typography variant="h5">condition</Typography>
      </Box>
      <Box height={100} />
    </Box>
  );
};

export default FormMView;
