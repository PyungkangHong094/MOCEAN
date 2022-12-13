import {
  Box,
  Button,
  Checkbox,
  ImageList,
  ImageListItem,
  Menu,
  MenuItem,
  Table,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import ScoreText from "src/components/score";
import { theme } from "src/theme";
import { BorderedCell, DropdownCell, TextInputCell, TitleCell } from "../cell-types";
import TextInput from "../textinput";
import TableFrame from "./table-frame";

const initData = {
  pushup_test: 0,
  squat_test: 0,
  plank_test: 0,
  lower_extremity_assessment: "rdp",
  upper_extremity_assessment: "rdp",
  condition: "danger",
};

const Health = ({ initialData = initData }) => {
  const [data, setData] = useState(initialData);

  const setPushup = (v) => {
    const newData = {
      ...data,
      pushup_test: v,
    };
    setData(newData);
  };
  const setSquat = (v) => {
    const newData = {
      ...data,
      squat_test: v,
    };
    setData(newData);
  };
  const setPlank = (v) => {
    const newData = {
      ...data,
      plank_test: v,
    };
    setData(newData);
  };

  const imageData = [
    {
      lower_extremity_assessment: "rdp",
      upper_extremity_assessment: "rdp",
    },
    {
      lower_extremity_assessment: "rdp",
      upper_extremity_assessment: "bilateral",
    },
    {
      lower_extremity_assessment: "bilateral",
      upper_extremity_assessment: "rdp",
    },
    {
      lower_extremity_assessment: "bilateral",
      upper_extremity_assessment: "bilateral",
    },
  ];
  const [selectedImageId, selectImage] = useState(1);
  const [anchorEl, setAnchorEl] = useState(null);

  const isStatusOpen = Boolean(anchorEl);
  const statusList = [
    {
      text: "Danger",
      color: theme.palette.score.poor,
    },
    {
      text: "Fair",
      color: theme.palette.score.fair,
    },
    {
      text: "Good",
      color: theme.palette.score.good,
    },
    {
      text: "Excellent",
      color: theme.palette.score.excellent,
    },
  ];
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
    <>
      <TableFrame title={"Musuloskeletal Health"} maxWidth={600}>
        <TableRow>
          <TitleCell title={"Pushup Test"} />
          <DropdownCell
            values={["Male", "Female"]}
            renderItem={(v) => <Typography color="black">{v}</Typography>}
          />
          <TextInputCell type={"number"} onChange={setPushup} />
        </TableRow>
        <TableRow>
          <TitleCell title={"Squat Test"} />
          <DropdownCell
            values={["Male", "Female"]}
            renderItem={(v) => <Typography color="black">{v}</Typography>}
          />
          <TextInputCell type={"number"} onChange={setSquat} />
        </TableRow>
        <TableRow>
          <TitleCell title={"Plank Test"} />
          <DropdownCell
            values={["Male", "Female"]}
            renderItem={(v) => <Typography color="black">{v}</Typography>}
          />
          <TextInputCell type={"number"} onChange={setPlank} />
        </TableRow>
      </TableFrame>
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
          <Typography variant="h6" color={statusList[status].color}>
            {statusList[status].text}
          </Typography>
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
          {statusList.map((stat, i) => (
            <MenuItem key={i} onClick={() => selectStatus(i)}>
              {stat.text}
            </MenuItem>
          ))}
        </Menu>
        <Typography variant="h5">condition</Typography>
      </Box>
    </>
  );
};

export default Health;
