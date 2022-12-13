import { Box, Table, TableRow, Typography } from "@mui/material";
import { useState } from "react";
import { BorderedCell, DropdownCell, EmptyCell, TitleCell } from "../cell-types";
import TextInput from "../textinput";
import TableFrame from "./table-frame";

const yesOrNoValue = [
  {
    text: "Yes",
    value: 1,
  },
  {
    text: "No",
    value: 0,
  },
];

const yesOrNoPainValue = [
  {
    text: "Yes",
    value: 1,
  },
  {
    text: "No or Pain",
    value: 0,
  },
];

const nrpValues = [
  {
    text: "Normal",
    value: 1,
  },
  {
    text: "Restricted",
    value: 0,
  },
  {
    text: "Pain/Hypermobile",
    value: 0,
  },
];

const initData = {
  hip_shift_in_squat: 1,
  can_squat_below_ninety_degrees: 1,
  feet_pronates_during_squat: 1,
  can_hinge_hip_without_over_extension: 1,
  deadlift_upper_back_rounding: 1,
  finger_touch_ground: 1,
  hip_shift_during_toe_touch: 1,
  toe_touch_upper_back_rounding: 1,
  flexion_left: 1,
  flexion_right: 1,
  lateral_flexion_left: 1,
  lateral_flexion_right: 1,
};

const Movement = ({ initialData = initData }) => {
  const [data, setData] = useState(initialData);

  const setDropdownData = (key, v) => {
    const newData = {
      ...data,
      [key]: v.value,
    };
    setData(newData);
  };

  const sum = Object.values(data).reduce((prev, curr) => prev + curr);

  return (
    <TableFrame
      title={"Movement"}
      head={
        <TableRow>
          {["Deep Squat", "Assessment", "Assessment Score", "Assessment Maximum"].map((title) => (
            <BorderedCell key={title} align="center">
              <Typography variant="h6" textTransform={"capitalize"}>
                {title}
              </Typography>
            </BorderedCell>
          ))}
        </TableRow>
      }
    >
      <TableRow>
        <TitleCell title={"hip shift in squat? (y/n)"} />
        <DropdownCell
          id="movement-hip-shift"
          values={yesOrNoValue}
          renderItem={(v) => (
            <Typography variant="h6" color={"black"}>
              {v.text}
            </Typography>
          )}
          onSelected={(v) => setDropdownData("hip_shift_in_squat", v)}
        />
        <TitleCell title={data["hip_shift_in_squat"]} align={"center"} />
        <TitleCell title={1} align={"center"} />
      </TableRow>
      <TableRow>
        <TitleCell title={"can squat below 90 deg? (y/n)"} />
        <DropdownCell
          id="movement-squat-below"
          values={yesOrNoPainValue}
          renderItem={(v) => (
            <Typography variant="h6" color={"black"}>
              {v.text}
            </Typography>
          )}
          onSelected={(v) => setDropdownData("can_squat_below_ninety_degrees", v)}
        />
        <TitleCell title={data["can_squat_below_ninety_degrees"]} align={"center"} />
        <TitleCell title={1} align={"center"} />
      </TableRow>
      <TableRow>
        <TitleCell title={"feet pronates during squat? (y/n)"} />

        <DropdownCell
          id="movement-squat-below"
          values={yesOrNoValue}
          renderItem={(v) => (
            <Typography variant="h6" color={"black"}>
              {v.text}
            </Typography>
          )}
          onSelected={(v) => setDropdownData("feet_pronates_during_squat", v)}
        />
        <TitleCell title={data["feet_pronates_during_squat"]} align={"center"} />
        <TitleCell title={1} align={"center"} />
      </TableRow>
      <TableRow>
        <TitleCell title={"Dead Lift (hip hinge)"} align={"center"} />
        <EmptyCell />
        <EmptyCell />
        <EmptyCell />
      </TableRow>
      <TableRow>
        <TitleCell title={"can hinge hip without over extenion at L-s?"} />
        <DropdownCell
          id="movement-hinge-extenion"
          values={yesOrNoValue}
          renderItem={(v) => (
            <Typography variant="h6" color={"black"}>
              {v.text}
            </Typography>
          )}
          onSelected={(v) => setDropdownData("can_hinge_hip_without_over_extension", v)}
        />
        <TitleCell title={data["can_hinge_hip_without_over_extension"]} align={"center"} />
        <TitleCell title={1} align={"center"} />
      </TableRow>
      <TableRow>
        <TitleCell title={"A lot of rouding upper back?"} />
        <DropdownCell
          id="movement-upper-back"
          values={yesOrNoValue}
          renderItem={(v) => (
            <Typography variant="h6" color={"black"}>
              {v.text}
            </Typography>
          )}
          onSelected={(v) => setDropdownData("deadlift_upper_back_rounding", v)}
        />
        <TitleCell title={data["deadlift_upper_back_rounding"]} align={"center"} />
        <TitleCell title={1} align={"center"} />
      </TableRow>
      <TableRow>
        <TitleCell title={"Toe touch"} align={"center"} />
        <EmptyCell />
        <EmptyCell />
        <EmptyCell />
      </TableRow>
      <TableRow>
        <TitleCell title={"can finger tip touch the ground? (y/n)"} />
        <DropdownCell
          id="movement-finger-ground"
          values={yesOrNoPainValue}
          renderItem={(v) => (
            <Typography variant="h6" color={"black"}>
              {v.text}
            </Typography>
          )}
          onSelected={(v) => setDropdownData("finger_touch_ground", v)}
        />
        <TitleCell title={data["finger_touch_ground"]} align={"center"} />
        <TitleCell title={1} align={"center"} />
      </TableRow>
      <TableRow>
        <TitleCell title={"hip shift during toe touch? (y/n)"} />
        <DropdownCell
          id="movement-hip-touch"
          values={yesOrNoValue}
          renderItem={(v) => (
            <Typography variant="h6" color={"black"}>
              {v.text}
            </Typography>
          )}
          onSelected={(v) => setDropdownData("hip_shift_during_toe_touch", v)}
        />
        <TitleCell title={data["hip_shift_during_toe_touch"]} align={"center"} />
        <TitleCell title={1} align={"center"} />
      </TableRow>
      <TableRow>
        <TitleCell title={"A lot of rouding upper back?"} />
        <DropdownCell
          id="movement-upper-back"
          values={yesOrNoValue}
          renderItem={(v) => (
            <Typography variant="h6" color={"black"}>
              {v.text}
            </Typography>
          )}
          onSelected={(v) => setDropdownData("toe_touch_upper_back_rounding", v)}
        />
        <TitleCell title={data["toe_touch_upper_back_rounding"]} align={"center"} />
        <TitleCell title={1} align={"center"} />
      </TableRow>
      <TableRow>
        <TitleCell title={"Shoulder Flexion (N/R/P)"} align={"center"} />
        <EmptyCell />
        <EmptyCell />
        <EmptyCell />
      </TableRow>
      <TableRow>
        <TitleCell title={"Left"} />
        <DropdownCell
          id="movement-flexion-left"
          values={nrpValues}
          renderItem={(v) => (
            <Typography variant="h6" color={"black"}>
              {v.text}
            </Typography>
          )}
          onSelected={(v) => setDropdownData("flexion_left", v)}
        />
        <TitleCell title={data["flexion_left"]} align={"center"} />
        <TitleCell title={1} align={"center"} />
      </TableRow>
      <TableRow>
        <TitleCell title={"Right"} />
        <DropdownCell
          id="movement-flexion-right"
          values={nrpValues}
          renderItem={(v) => (
            <Typography variant="h6" color={"black"}>
              {v.text}
            </Typography>
          )}
          onSelected={(v) => setDropdownData("flexion_right", v)}
        />
        <TitleCell title={data["flexion_right"]} align={"center"} />
        <TitleCell title={1} align={"center"} />
      </TableRow>

      <TableRow>
        <TitleCell title={"Shoulder Lateral Flexion (N/R/P)"} align={"center"} />

        <EmptyCell />
        <EmptyCell />
        <EmptyCell />
      </TableRow>
      <TableRow>
        <TitleCell title={"Left"} />
        <DropdownCell
          id="movement-lateral-left"
          values={nrpValues}
          renderItem={(v) => (
            <Typography variant="h6" color={"black"}>
              {v.text}
            </Typography>
          )}
          onSelected={(v) => setDropdownData("lateral_flexion_left", v)}
        />
        <TitleCell title={data["lateral_flexion_left"]} align={"center"} />
        <TitleCell title={1} align={"center"} />
      </TableRow>
      <TableRow>
        <TitleCell title={"Right"} />
        <DropdownCell
          id="movement-lateral-right"
          values={nrpValues}
          renderItem={(v) => (
            <Typography variant="h6" color={"black"}>
              {v.text}
            </Typography>
          )}
          onSelected={(v) => setDropdownData("lateral_flexion_right", v)}
        />
        <TitleCell title={data["lateral_flexion_right"]} align={"center"} />
        <TitleCell title={1} align={"center"} />
      </TableRow>

      <TableRow>
        <EmptyCell />
        <TitleCell title={"Accessment Score"} align={"center"} />
        <TitleCell title={"Accessment Maximum"} align={"center"} />
        <TitleCell title={"Patient Score"} align={"center"} />
      </TableRow>
      <TableRow>
        <TitleCell title={"Mobility Score"} />
        <TitleCell title={sum} align={"center"} />
        <TitleCell title={12} align={"center"} />
        <TitleCell title={sum / 12} align={"center"} />
      </TableRow>
    </TableFrame>
  );
};

export default Movement;
