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
import { initData, useMContext } from './context';
import { useDialog } from "src/components/dialogs/context";
import { useMutation } from "react-query";
import { postMPartial, putMPartial } from "src/data/repository/m";

const Health = () => {
  const { showAlertDialog } = useDialog();
  const { data, setData } = useMContext();
  const {
    gender,
    pushup_test,
    squat_test,
    plank_test,
    lower_extremity_assessment,
    upper_extremity_assessment,
    condition
  } = data.musculo_skeletal_health || initData.musculo_skeletal_health;

  const imageList = {
    1: {
      upper: 'rdp',
      lower: 'rdp',
    }, 
    2: {
      upper: 'rdp',
      lower: 'bilateral',
    },
    3: {
      upper: 'bilateral',
      lower: 'rdp',
    },
    4: {
      upper: 'bilateral',
      lower: 'bilateral',
    }
  };

  const conditionList = {
    'danger': {
      text: 'Danger',
      color: theme.palette.score.poor
    },
    'fair': {
      text: 'Fair',
      color: theme.palette.score.fair
    },
    'good': {
      text: 'Good',
      color: theme.palette.score.good
    },
    'excellent': {
      text: 'Excellent',
      color: theme.palette.score.excellent
    }
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const isStatusOpen = Boolean(anchorEl);

  const openStatus = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const closeStatus = () => {
    setAnchorEl(null);
  };

  const body = {
    customerId: data.id,
    reqData: data.musculo_skeletal_health,
    endpoint: 'musculoskeletal-health'
  };
  const onSaveSuccess = () => {
    showAlertDialog({ title: "Success", message: "Save completed" });
  };
  const onSaveFailed = () => {
    showAlertDialog({ title: "Failed", message: "Save failed" });
  };

  const { mutate: postMData } = useMutation(postMPartial, {
    onSuccess: onSaveSuccess,
    onError: onSaveFailed
  });
  const { mutate: putMData } = useMutation(putMPartial, {
    onSuccess: onSaveSuccess,
    onError: () => postMData(body)
  });

  return (
    <TableFrame title={"Musuloskeletal Health"} onSave={() => putMData(body)}>
      <Table sx={{ maxWidth: 600, mt: 2, mb: 6 }}>
        <TableRow>
          <TitleCell title={"Pushup Test"} />
          <DropdownCell
            values={[
              { text: "Male", value: "male" },
              { text: "Female", value: "female" }
            ]}
            defaultValue={gender}
            renderItem={(v) => (
              <Typography variant="h6" color={"black"}>
                {v.text}
              </Typography>
            )}
            onSelected={(v) => setData('musculo_skeletal_health', 'gender', v.value)}
          />
          <TextInputCell 
            type={"number"}
            defaultValue={pushup_test}
            onChange={v => setData('musculo_skeletal_health', 'pushup_test', v)}
          />
        </TableRow>
        <TableRow>
          <TitleCell title={"Squat Test"} />
          {/* <DropdownCell
            values={[
              { text: "Male", value: "male" },
              { text: "Female", value: "female" }
            ]}
            defaultValue={gender}
            renderItem={(v) => (
              <Typography variant="h6" color={"black"}>
                {v.text}
              </Typography>
            )}
            onSelected={(v) => setData('musculo_skeletal_health', 'gender', v.value)}
          /> */}
          <TitleCell title={gender} />
          <TextInputCell 
            type={"number"}
            defaultValue={squat_test}
            onChange={v => setData('musculo_skeletal_health', 'squat_test', v)}
          />
        </TableRow>
        <TableRow>
          <TitleCell title={"Plank Test"} />
          {/* <DropdownCell
            values={[
              { text: "Male", value: "male" },
              { text: "Female", value: "female" }
            ]}
            defaultValue={gender}
            renderItem={(v) => (
              <Typography variant="h6" color={"black"}>
                {v.text}
              </Typography>
            )}
            onSelected={(v) => setData('musculo_skeletal_health', 'gender', v.value)}
          /> */}
          <TitleCell title={gender} />
          <TextInputCell 
            type={"number"}
            defaultValue={plank_test}
            onChange={v => setData('musculo_skeletal_health', 'plank_test', v)}
          />
        </TableRow>
      </Table>
      <Box>
        <ImageList cols={2} gap={32} rowHeight={512}>
          {Object.keys(imageList).map((id) => (
            <ImageListItem key={id}>
              <Box>
                <Image
                  src={`/static/images/inputs/m/${id}.png`}
                  objectFit="contain"
                  layout="fill"
                />
                <Checkbox
                  sx={{ "& .MuiSvgIcon-root": { fontSize: 30 } }}
                  checked={imageList[id]?.upper === upper_extremity_assessment && imageList[id]?.lower === lower_extremity_assessment}
                  onChange={(event) => {
                    setData('musculo_skeletal_health', 'upper_extremity_assessment', event.target.checked ? imageList[id]?.upper : '');
                    setData('musculo_skeletal_health', 'lower_extremity_assessment', event.target.checked ? imageList[id]?.lower : '');
                  }}
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
          <Typography variant="h6" color={conditionList[condition]?.color}>
            {conditionList[condition]?.text}
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
          {Object.keys(conditionList).map(key => (
            <MenuItem key={key} onClick={() => { 
              setData('musculo_skeletal_health', 'condition', key); 
              closeStatus(); 
            }}>
              {conditionList[key]?.text}
            </MenuItem>
          ))}
        </Menu>
        <Typography variant="h5">condition</Typography>
      </Box>
    </TableFrame>
  );
};

export default Health;
