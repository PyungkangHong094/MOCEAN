import { Box, Table, TableBody, TableHead, TableRow, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { BorderedCell, DropdownCell, EmptyCell, TitleCell } from "../cell-types";
import TextInput from "../textinput";
import TableFrame from "./table-frame";
import { initData, useMContext } from './context';
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

const MobilityLower = () => {
  const { showAlertDialog } = useDialog();
  const { data, setData } = useMContext();
  const {
    pelvic_torsion,
    single_leg_raise_left,
    single_leg_raise_right,
    adduction_drop_test_left,
    adduction_drop_test_right,
    hip_ir_left,
    hip_ir_right,
    thomas_test_left,
    thomas_test_right,
    first_mtp_flexion_left,
    first_mtp_flexion_right,
    left_feet,
    right_feet,
    pattern,
    assessment_maximum,
    assessment_score_left,
    assessment_score_right,
    patient_score_left,
    patient_score_right
  } = data.mobility_and_balance_lower_extremity || initData.mobility_and_balance_lower_extremity;

  const body = { 
    customerId: data.id, 
    reqData: data.mobility_and_balance_lower_extremity, 
    endpoint: 'musculoskeletal/mobility-and-balance/lower-extremity'
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
    const score = single_leg_raise_left + adduction_drop_test_left + hip_ir_left + thomas_test_left + first_mtp_flexion_left;

    setData('mobility_and_balance_lower_extremity', 'assessment_score_left', score);    
    setData('mobility_and_balance_lower_extremity', 'patient_score_left', score / assessment_maximum);
  
  }, [single_leg_raise_left, adduction_drop_test_left, hip_ir_left, thomas_test_left, first_mtp_flexion_left]);

  useEffect(() => {
    const score = single_leg_raise_right + adduction_drop_test_right + hip_ir_right + thomas_test_right + first_mtp_flexion_right;

    setData('mobility_and_balance_lower_extremity', 'assessment_score_right', score);    
    setData('mobility_and_balance_lower_extremity', 'patient_score_right', score / assessment_maximum);

  }, [single_leg_raise_right, adduction_drop_test_right, hip_ir_right, thomas_test_right, first_mtp_flexion_right]);

  return (
    <TableFrame
      title={"Mobility&Balance_Lower_Extremity"}
      head={
        <TableRow>
          {[
            "Lower Extremity Assessment",
            "Left",
            "Right",
            "Left Assessment",
            "Right Assessment",
            "Assessment Maximum",
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
        <TitleCell title={"Pelvic Torsion"} />
        <EmptyCell />
        <EmptyCell />
        <EmptyCell />
        <EmptyCell />
        <EmptyCell />
      </TableRow>
      <TableRow>
        <TitleCell title={"Single Leg Raise"} />
        <DropdownCell
          id="lower-single-left"
          defaultValue={single_leg_raise_left}
          values={dropdownValues}
          renderItem={(v) => (
            <Typography variant="h6" color={"black"}>
              {v.text}
            </Typography>
          )}
          onSelected={(v) => setData('mobility_and_balance_lower_extremity', 'single_leg_raise_left', v.value)}
        />
        <DropdownCell
          id="lower-single-right"
          defaultValue={single_leg_raise_right}
          values={dropdownValues}
          renderItem={(v) => (
            <Typography variant="h6" color={"black"}>
              {v.text}
            </Typography>
          )}
          onSelected={(v) => setData('mobility_and_balance_lower_extremity', 'single_leg_raise_right', v.value)}
        />
        <TitleCell title={single_leg_raise_left} />
        <TitleCell title={single_leg_raise_right} />
        <TitleCell title={2} />
      </TableRow>
      <TableRow>
        <TitleCell title={"Adduction Drop Test"} />
        <DropdownCell
          id="lower-adduction-left"
          defaultValue={adduction_drop_test_left}
          values={dropdownValues}
          renderItem={(v) => (
            <Typography variant="h6" color={"black"}>
              {v.text}
            </Typography>
          )}
          onSelected={(v) => setData('mobility_and_balance_lower_extremity', 'adduction_drop_test_left', v.value)}
        />
        <DropdownCell
          id="lower-adduction-right"
          defaultValue={adduction_drop_test_right}
          values={dropdownValues}
          renderItem={(v) => (
            <Typography variant="h6" color={"black"}>
              {v.text}
            </Typography>
          )}
          onSelected={(v) => setData('mobility_and_balance_lower_extremity', 'adduction_drop_test_right', v.value)}
        />
        <TitleCell title={adduction_drop_test_left} />
        <TitleCell title={adduction_drop_test_right} />
        <TitleCell title={2} />
      </TableRow>
      <TableRow>
        <TitleCell title={"Hip IR"} />
        <DropdownCell
          id="lower-hip-left"
          defaultValue={hip_ir_left}
          values={dropdownValues}
          renderItem={(v) => (
            <Typography variant="h6" color={"black"}>
              {v.text}
            </Typography>
          )}
          onSelected={(v) => setData('mobility_and_balance_lower_extremity', 'hip_ir_left', v.value)}
        />
        <DropdownCell
          id="lower-hip-right"
          defaultValue={hip_ir_right}
          values={dropdownValues}
          renderItem={(v) => (
            <Typography variant="h6" color={"black"}>
              {v.text}
            </Typography>
          )}
          onSelected={(v) => setData('mobility_and_balance_lower_extremity', 'hip_ir_right', v.value)}
        />
        <TitleCell title={hip_ir_left} />
        <TitleCell title={hip_ir_right} />
        <TitleCell title={2} />
      </TableRow>
      <TableRow>
        <TitleCell title={"Thomas Test"} />
        <DropdownCell
          id="lower-thomas-left"
          defaultValue={thomas_test_left}
          values={dropdownValues}
          renderItem={(v) => (
            <Typography variant="h6" color={"black"}>
              {v.text}
            </Typography>
          )}
          onSelected={(v) => setData('mobility_and_balance_lower_extremity', 'thomas_test_left', v.value)}
        />
        <DropdownCell
          id="lower-thomas-right"
          defaultValue={thomas_test_right}
          values={dropdownValues}
          renderItem={(v) => (
            <Typography variant="h6" color={"black"}>
              {v.text}
            </Typography>
          )}
          onSelected={(v) => setData('mobility_and_balance_lower_extremity', 'thomas_test_right', v.value)}
        />
        <TitleCell title={thomas_test_left} />
        <TitleCell title={thomas_test_right} />
        <TitleCell title={2} />
      </TableRow>
      <TableRow>
        <TitleCell title={"1st MTP flexion"} />
        <DropdownCell
          id="lower-mtp-left"
          defaultValue={first_mtp_flexion_left}
          values={dropdownValues}
          renderItem={(v) => (
            <Typography variant="h6" color={"black"}>
              {v.text}
            </Typography>
          )}
          onSelected={(v) => setData('mobility_and_balance_lower_extremity', 'first_mtp_flexion_left', v.value)}
        />
        <DropdownCell
          id="lower-mtp-right"
          defaultValue={first_mtp_flexion_right}
          values={dropdownValues}
          renderItem={(v) => (
            <Typography variant="h6" color={"black"}>
              {v.text}
            </Typography>
          )}
          onSelected={(v) => setData('mobility_and_balance_lower_extremity', 'first_mtp_flexion_right', v.value)}
        />
        <TitleCell title={first_mtp_flexion_left} />
        <TitleCell title={first_mtp_flexion_right} />
        <TitleCell title={2} />
      </TableRow>
      <TableRow>
        <TitleCell title={"Feet"} />
        <DropdownCell
          id="lower-feet-left"
          defaultValue={left_feet}
          values={[
            {
              text: "Supination",
              value: "supination",
            },
            {
              text: "Pronation",
              value: "pronation",
            },
          ]}
          renderItem={(v) => (
            <Typography variant="h6" color={"black"}>
              {v.text}
            </Typography>
          )}
          onSelected={(v) => setData('mobility_and_balance_upper_extremity', 'left_feet', v.value)}
        />
        <DropdownCell
          id="lower-feet-right"
          defaultValue={right_feet}
          values={[
            {
              text: "Supination",
              value: "supination",
            },
            {
              text: "Pronation",
              value: "pronation",
            },
          ]}
          renderItem={(v) => (
            <Typography variant="h6" color={"black"}>
              {v.text}
            </Typography>
          )}
          onSelected={(v) => setData('mobility_and_balance_upper_extremity', 'right_feet', v.value)}
        />
        <EmptyCell />
        <EmptyCell />
        <EmptyCell />
      </TableRow>
      <TableRow>
        <TitleCell title={"Pattern"} />
        <DropdownCell
          id="lower-pattern"
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
        <EmptyCell />
      </TableRow>
      <TableRow>
        <EmptyCell />
        <TitleCell title={"Accessment Score"} colSpan={2} align={"center"} />
        <TitleCell title={"Accessment Maximum"} align={"center"} />
        <TitleCell title={"Patient Score"} align={"center"} />
        <EmptyCell />
      </TableRow>
      <TableRow>
        <TitleCell title={"Lower Extremity_Left"} />
        <TitleCell title={assessment_score_left} colSpan={2} align={"center"} />
        <TitleCell title={assessment_maximum} align={"center"} />
        <TitleCell title={patient_score_left} align={"center"} />
        <EmptyCell />
      </TableRow>
      <TableRow>
        <TitleCell title={"Lower Extremity_Right"} />
        <TitleCell title={assessment_score_right} colSpan={2} align={"center"} />
        <TitleCell title={assessment_maximum} align={"center"} />
        <TitleCell title={patient_score_right} align={"center"} />
        <EmptyCell />
      </TableRow>
    </TableFrame>
  );
};

export default MobilityLower;
