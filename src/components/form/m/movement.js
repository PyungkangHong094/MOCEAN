import { Box, Table, TableRow, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { BorderedCell, DropdownCell, EmptyCell, TitleCell } from "../cell-types";
import TextInput from "../textinput";
import TableFrame from "./table-frame";
import { initData, useMContext } from './context';
import { useDialog } from "src/components/dialogs/context";
import { useMutation } from "react-query";
import { postMPartial, putMPartial } from "src/data/repository/m";

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

const Movement = () => {
  const { showAlertDialog } = useDialog();
  const { data, setData } = useMContext();
  const {
    hip_shift_in_squat,
    can_squat_below_ninety_degrees,
    feet_pronates_during_squat,
    can_hinge_hip_without_over_extension,
    deadlift_upper_back_rounding,
    finger_touch_ground,
    hip_shift_during_toe_touch,
    toe_touch_upper_back_rounding,
    flexion_left,
    flexion_right,
    lateral_flexion_left,
    lateral_flexion_right,
    assessment_maximum,
    assessment_score,
    patient_score
  } = data.movement || initData.movement;

  const body = { 
    customerId: data.id, 
    reqData: data.movement, 
    endpoint: 'movement'
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

  useEffect(() => {
    const score = hip_shift_in_squat
      + can_squat_below_ninety_degrees
      + feet_pronates_during_squat
      + can_hinge_hip_without_over_extension
      + deadlift_upper_back_rounding
      + finger_touch_ground
      + hip_shift_during_toe_touch
      + toe_touch_upper_back_rounding
      + flexion_left
      + flexion_right
      + lateral_flexion_left
      + lateral_flexion_right;

    setData('movement', 'assessment_score', score);
    setData('movement', 'patient_score', score / assessment_maximum);

  }, [
    hip_shift_in_squat,
    can_squat_below_ninety_degrees,
    feet_pronates_during_squat,
    can_hinge_hip_without_over_extension,
    deadlift_upper_back_rounding,
    finger_touch_ground,
    hip_shift_during_toe_touch,
    toe_touch_upper_back_rounding,
    flexion_left,
    flexion_right,
    lateral_flexion_left,
    lateral_flexion_right
  ]);

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
      onSave={() => putMData(body)}
    >
      <TableRow>
        <TitleCell title={"hip shift in squat? (y/n)"} />
        <DropdownCell
          id="movement-hip-shift"
          defaultValue={hip_shift_in_squat}
          values={yesOrNoValue}
          renderItem={(v) => (
            <Typography variant="h6" color={"black"}>
              {v.text}
            </Typography>
          )}
          onSelected={(v) => setData('movement', 'hip_shift_in_squat', v.value)}
        />
        <TitleCell title={hip_shift_in_squat} align={"center"} />
        <TitleCell title={1} align={"center"} />
      </TableRow>
      <TableRow>
        <TitleCell title={"can squat below 90 deg? (y/n)"} />
        <DropdownCell
          id="movement-squat-below"
          defaultValue={can_squat_below_ninety_degrees}
          values={yesOrNoPainValue}
          renderItem={(v) => (
            <Typography variant="h6" color={"black"}>
              {v.text}
            </Typography>
          )}
          onSelected={(v) => setData('movement', 'can_squat_below_ninety_degrees', v.value)}
        />
        <TitleCell title={can_squat_below_ninety_degrees} align={"center"} />
        <TitleCell title={1} align={"center"} />
      </TableRow>
      <TableRow>
        <TitleCell title={"feet pronates during squat? (y/n)"} />

        <DropdownCell
          id="movement-squat-below"
          defaultValue={feet_pronates_during_squat}
          values={yesOrNoValue}
          renderItem={(v) => (
            <Typography variant="h6" color={"black"}>
              {v.text}
            </Typography>
          )}
          onSelected={(v) => setData('movement', 'feet_pronates_during_squat', v.value)}
        />
        <TitleCell title={feet_pronates_during_squat} align={"center"} />
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
          defaultValue={can_hinge_hip_without_over_extension}
          values={yesOrNoValue}
          renderItem={(v) => (
            <Typography variant="h6" color={"black"}>
              {v.text}
            </Typography>
          )}
          onSelected={(v) => setData('movement', 'can_hinge_hip_without_over_extension', v.value)}
        />
        <TitleCell title={can_hinge_hip_without_over_extension} align={"center"} />
        <TitleCell title={1} align={"center"} />
      </TableRow>
      <TableRow>
        <TitleCell title={"A lot of rouding upper back?"} />
        <DropdownCell
          id="movement-upper-back"
          defaultValue={deadlift_upper_back_rounding}
          values={yesOrNoValue}
          renderItem={(v) => (
            <Typography variant="h6" color={"black"}>
              {v.text}
            </Typography>
          )}
          onSelected={(v) => setData('movement', 'deadlift_upper_back_rounding', v.value)}
        />
        <TitleCell title={deadlift_upper_back_rounding} align={"center"} />
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
          defaultValue={finger_touch_ground}
          values={yesOrNoPainValue}
          renderItem={(v) => (
            <Typography variant="h6" color={"black"}>
              {v.text}
            </Typography>
          )}
          onSelected={(v) => setData('movement', 'finger_touch_ground', v.value)}
        />
        <TitleCell title={finger_touch_ground} align={"center"} />
        <TitleCell title={1} align={"center"} />
      </TableRow>
      <TableRow>
        <TitleCell title={"hip shift during toe touch? (y/n)"} />
        <DropdownCell
          id="movement-hip-touch"
          defaultValue={hip_shift_during_toe_touch}
          values={yesOrNoValue}
          renderItem={(v) => (
            <Typography variant="h6" color={"black"}>
              {v.text}
            </Typography>
          )}
          onSelected={(v) => setData('movement', 'hip_shift_during_toe_touch', v.value)}
        />
        <TitleCell title={hip_shift_during_toe_touch} align={"center"} />
        <TitleCell title={1} align={"center"} />
      </TableRow>
      <TableRow>
        <TitleCell title={"A lot of rouding upper back?"} />
        <DropdownCell
          id="movement-upper-back"
          defaultValue={toe_touch_upper_back_rounding}
          values={yesOrNoValue}
          renderItem={(v) => (
            <Typography variant="h6" color={"black"}>
              {v.text}
            </Typography>
          )}
          onSelected={(v) => setData('movement', 'toe_touch_upper_back_rounding', v.value)}
        />
        <TitleCell title={toe_touch_upper_back_rounding} align={"center"} />
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
          defaultValue={flexion_left}
          values={nrpValues}
          renderItem={(v) => (
            <Typography variant="h6" color={"black"}>
              {v.text}
            </Typography>
          )}
          onSelected={(v) => setData('movement', 'flexion_left', v.value)}
        />
        <TitleCell title={flexion_left} align={"center"} />
        <TitleCell title={1} align={"center"} />
      </TableRow>
      <TableRow>
        <TitleCell title={"Right"} />
        <DropdownCell
          id="movement-flexion-right"
          defaultValue={flexion_right}
          values={nrpValues}
          renderItem={(v) => (
            <Typography variant="h6" color={"black"}>
              {v.text}
            </Typography>
          )}
          onSelected={(v) => setData('movement', 'flexion_right', v.value)}
        />
        <TitleCell title={flexion_right} align={"center"} />
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
          defaultValue={lateral_flexion_left}
          values={nrpValues}
          renderItem={(v) => (
            <Typography variant="h6" color={"black"}>
              {v.text}
            </Typography>
          )}
          onSelected={(v) => setData('movement', 'lateral_flexion_left', v.value)}
        />
        <TitleCell title={lateral_flexion_left} align={"center"} />
        <TitleCell title={1} align={"center"} />
      </TableRow>
      <TableRow>
        <TitleCell title={"Right"} />
        <DropdownCell
          id="movement-lateral-right"
          defaultValue={lateral_flexion_right}
          values={nrpValues}
          renderItem={(v) => (
            <Typography variant="h6" color={"black"}>
              {v.text}
            </Typography>
          )}
          onSelected={(v) => setData('movement', 'lateral_flexion_right', v.value)}
        />
        <TitleCell title={lateral_flexion_right} align={"center"} />
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
        <TitleCell title={assessment_score} align={"center"} />
        <TitleCell title={assessment_maximum} align={"center"} />
        <TitleCell title={patient_score} align={"center"} />
      </TableRow>
    </TableFrame>
  );
};

export default Movement;
