import { Box, TableRow, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { BorderedCell, DropdownCell, EmptyCell, TitleCell } from "../cell-types";
import TextInput from "../textinput";
import TableFrame from "./table-frame";
import { useMContext } from './context';
import { useDialog } from "src/components/dialogs/context";
import { useMutation } from "react-query";
import { postMPartial, putMPartial } from "src/data/repository/m";

const dropdownValues = [
  {
    text: "Normal",
    value: 2,
  },
  {
    text: "Restricted",
    value: 1,
  },
  {
    text: "Pain/Hypermobile",
    value: 0,
  },
];

const MobilityUpper = ({ id }) => {
  const { showAlertDialog } = useDialog();
  const { data, setData } = useMContext();
  const {
    flexion_left,
    flexion_right,
    internal_rotation_left,
    internal_rotation_right,
    external_rotationipsum_left,
    external_rotationipsum_right,
    horizontal_abduction_left,
    horizontal_abduction_right,
    atypical_expansion,
    infrasternal_angle,
    pattern,
    assessment_maximum,
    assessment_score_left,
    assessment_score_right,
    patient_score_left,
    patient_score_right
  } = data?.mobility_and_balance_upper_extremity;

  const body = { 
    customerId: id, 
    reqData: data.mobility_and_balance_upper_extremity, 
    endpoint: 'musculoskeletal/mobility-and-balance/upper-extremity'
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
    const score = flexion_left + internal_rotation_left + external_rotationipsum_left + horizontal_abduction_left;

    setData('mobility_and_balance_upper_extremity', 'assessment_score_left', score);    
    setData('mobility_and_balance_upper_extremity', 'patient_score_left', score / assessment_maximum);
  
  }, [flexion_left, internal_rotation_left, external_rotationipsum_left, horizontal_abduction_left]);

  useEffect(() => {
    const score = flexion_right + internal_rotation_right + external_rotationipsum_right + horizontal_abduction_right;

    setData('mobility_and_balance_upper_extremity', 'assessment_score_right', score);    
    setData('mobility_and_balance_upper_extremity', 'patient_score_right', score / assessment_maximum);

  }, [flexion_right, internal_rotation_right, external_rotationipsum_right, horizontal_abduction_right]);

  return (
    <TableFrame
      title={"Mobility&Balance_Upper_Extremity"}
      head={
        <TableRow>
          {[
            "Upper Extremity Assessment",
            "Left",
            "Right",
            "Left Assessment",
            "Right Assessment",
          ].map((title) => (
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
        <TitleCell title={"Flexion"} />
        <DropdownCell
          id="upper-flexion-left"
          defaultValue={flexion_left}
          values={dropdownValues}
          renderItem={(v) => (
            <Typography variant="h6" color={"black"}>
              {v.text}
            </Typography>
          )}
          onSelected={(v) => setData('mobility_and_balance_upper_extremity', 'flexion_left', v.value)}
        />
        <DropdownCell
          id="upper-flexion-right"
          defaultValue={flexion_right}
          values={dropdownValues}
          renderItem={(v) => (
            <Typography variant="h6" color={"black"}>
              {v.text}
            </Typography>
          )}
          onSelected={(v) => setData('mobility_and_balance_upper_extremity', 'flexion_right', v.value)}
        />
        <TitleCell title={flexion_left} />
        <TitleCell title={flexion_right} />
      </TableRow>
      <TableRow>
        <TitleCell title={"Internal Rotation"} />
        <DropdownCell
          id="upper-internal-left"
          defaultValue={internal_rotation_left}
          values={dropdownValues}
          renderItem={(v) => (
            <Typography variant="h6" color={"black"}>
              {v.text}
            </Typography>
          )}
          onSelected={(v) => setData('mobility_and_balance_upper_extremity', 'internal_rotation_left', v.value)}
        />
        <DropdownCell
          id="upper-internal-right"
          defaultValue={internal_rotation_right}
          values={dropdownValues}
          renderItem={(v) => (
            <Typography variant="h6" color={"black"}>
              {v.text}
            </Typography>
          )}
          onSelected={(v) => setData('mobility_and_balance_upper_extremity', 'internal_rotation_right', v.value)}
        />
        <TitleCell title={internal_rotation_left} />
        <TitleCell title={internal_rotation_right} />
      </TableRow>
      <TableRow>
        <TitleCell title={"External Rotation"} />
        <DropdownCell
          id="upper-external-left"
          defaultValue={external_rotationipsum_left}
          values={dropdownValues}
          renderItem={(v) => (
            <Typography variant="h6" color={"black"}>
              {v.text}
            </Typography>
          )}
          onSelected={(v) => setData('mobility_and_balance_upper_extremity', 'external_rotationipsum_left', v.value)}
        />
        <DropdownCell
          id="upper-external-right"
          defaultValue={external_rotationipsum_right}
          values={dropdownValues}
          renderItem={(v) => (
            <Typography variant="h6" color={"black"}>
              {v.text}
            </Typography>
          )}
          onSelected={(v) => setData('mobility_and_balance_upper_extremity', 'external_rotationipsum_right', v.value)}
        />
        <TitleCell title={external_rotationipsum_left} />
        <TitleCell title={external_rotationipsum_right} />
      </TableRow>
      <TableRow>
        <TitleCell title={"Horizontal Abduction"} />
        <DropdownCell
          id="upper-horizontal-left"
          defaultValue={horizontal_abduction_left}
          values={dropdownValues}
          renderItem={(v) => (
            <Typography variant="h6" color={"black"}>
              {v.text}
            </Typography>
          )}
          onSelected={(v) => setData('mobility_and_balance_upper_extremity', 'horizontal_abduction_left', v.value)}
        />
        <DropdownCell
          id="upper-horizontal-right"
          defaultValue={horizontal_abduction_right}
          values={dropdownValues}
          renderItem={(v) => (
            <Typography variant="h6" color={"black"}>
              {v.text}
            </Typography>
          )}
          onSelected={(v) => setData('mobility_and_balance_upper_extremity', 'horizontal_abduction_right', v.value)}
        />
        <TitleCell title={horizontal_abduction_left} />
        <TitleCell title={horizontal_abduction_right} />
      </TableRow>
      <TableRow>
        <TitleCell title={"Apical expansion\n(which lung is restricted with breathing?)"} />
        <EmptyCell />
        <EmptyCell />
        <EmptyCell />
        <EmptyCell />
      </TableRow>
      <TableRow>
        <TitleCell title={"Infrasternal Angle\n(wide or narrow)"} />
        <DropdownCell
          id="upper-infrasternal"
          colSpan={2}
          defaultValue={infrasternal_angle}
          values={[
            {
              text: "Wide",
              value: "wide",
            },
            {
              text: "Narrow",
              value: "narrow",
            },
          ]}
          renderItem={(v) => (
            <Typography variant="h6" color={"black"}>
              {v.text}
            </Typography>
          )}
          onSelected={(v) => setData('mobility_and_balance_upper_extremity', 'infrasternal_angle', v.value)}
        />
        <EmptyCell />
        <EmptyCell />
      </TableRow>
      <TableRow>
        <TitleCell title={"Pattern"} />
        <DropdownCell
          id="upper-pattern"
          colSpan={2}
          defaultValue={pattern}
          values={[
            {
              text: "RDP",
              value: "rdp",
            },
            {
              text: "Bilateral",
              value: "bilateral",
            },
            {
              text: "Patho",
              value: "patho",
            },
          ]}
          renderItem={(v) => (
            <Typography variant="h6" color={"black"}>
              {v.text}
            </Typography>
          )}
          onSelected={(v) => setData('mobility_and_balance_upper_extremity', 'pattern', v.value)}
        />
        <EmptyCell />
        <EmptyCell />
      </TableRow>
      <TableRow>
        <EmptyCell />
        <TitleCell title={"Accessment Score"} colSpan={2} align={"center"} />
        <TitleCell title={"Accessment Maximum"} align={"center"} />
        <TitleCell title={"Patient Score"} align={"center"} />
      </TableRow>
      <TableRow>
        <TitleCell title={"Upper Extremity_Left"} />
        <TitleCell title={assessment_score_left} colSpan={2} align={"center"} />
        <TitleCell title={assessment_maximum} align={"center"} />
        <TitleCell title={patient_score_left} align={"center"} />
      </TableRow>
      <TableRow>
        <TitleCell title={"Upper Extremity_Right"} />
        <TitleCell title={assessment_score_right} colSpan={2} align={"center"} />
        <TitleCell title={assessment_maximum} align={"center"} />
        <TitleCell title={patient_score_right} align={"center"} />
      </TableRow>
    </TableFrame>
  );
};

export default MobilityUpper;
