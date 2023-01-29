import { Box, Table, TableRow, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { BorderedCell, DropdownCell, EmptyCell, TitleCell } from "../cell-types";
import TextInput from "../textinput";
import TableFrame from "./table-frame";
import { useMContext } from './context';
import { useDialog } from "src/components/dialogs/context";
import { useMutation } from "react-query";
import { postMPartial, putMPartial } from "src/data/repository/m";

const dropdownValues = [
  {
    text: "Yes",
    value: 0,
  },
  {
    text: "No",
    value: 2,
  },
];

const MobilitySpine = ({ id }) => {
  const { showAlertDialog } = useDialog();
  const { data, setData } = useMContext();
  const {
    forward_head_posture,
    flat_back,
    scapular_winging,
    toe_touch,
    assessment_maximum,
    assessment_score
  } = data?.mobility_and_balance_spine;

  const body = { 
    customerId: id, 
    reqData: data.mobility_and_balance_spine, 
    endpoint: 'musculoskeletal/mobility-and-balance/spine'
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
    const score = forward_head_posture + flat_back + scapular_winging + toe_touch;
    
    setData('mobility_and_balance_spine', 'assessment_score', score);
  
  }, [forward_head_posture, flat_back, scapular_winging, toe_touch]);

  return (
    <TableFrame
      title={"Mobility&Balance_Spine_Thoraco_lumbar"}
      head={
        <TableRow>
          {["Cervical", "Assessment", "Patient Score", "Assessment Maximum", ""].map((title) => (
            <BorderedCell key={title} align={"center"}>
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
        <TitleCell title={"Forward Head Posture"} />
        <DropdownCell
          id="spine-forward"
          defaultValue={forward_head_posture}
          values={dropdownValues}
          renderItem={(v) => (
            <Typography variant="h6" color={"black"}>
              {v.text}
            </Typography>
          )}
          onSelected={v => setData('mobility_and_balance_spine', 'forward_head_posture', v.value)}
        />
        <TitleCell title={forward_head_posture} />
        <TitleCell title={2} />
        <EmptyCell />
      </TableRow>
      <TableRow>
        <TitleCell title={"Flat Back"} />
        <DropdownCell
          id="spine-flat"
          defaultValue={flat_back}
          values={dropdownValues}
          renderItem={(v) => (
            <Typography variant="h6" color={"black"}>
              {v.text}
            </Typography>
          )}
          onSelected={v => setData('mobility_and_balance_spine', 'flat_back', v.value)}
        />
        <TitleCell title={flat_back} />
        <TitleCell title={2} />
        <EmptyCell />
      </TableRow>
      <TableRow>
        <TitleCell title={"Scapular Wining"} />
        <DropdownCell
          id="spine-scapular"
          defaultValue={scapular_winging}
          values={dropdownValues}
          renderItem={(v) => (
            <Typography variant="h6" color={"black"}>
              {v.text}
            </Typography>
          )}
          onSelected={v => setData('mobility_and_balance_spine', 'scapular_winging', v.value)}
        />
        <TitleCell title={scapular_winging} />
        <TitleCell title={2} />
        <EmptyCell />
      </TableRow>
      <TableRow>
        <TitleCell title={"Toe Touch"} />
        <DropdownCell
          id="spine-toe"
          defaultValue={toe_touch}
          values={[
            {
              text: "If palm the floor (Hypermobile)",
              value: 0,
            },
            {
              text: "Pain",
              value: 0,
            },
            { text: "No or Hip shift", value: 1 },
            { text: "Yes with no compensation", value: 2 },
          ]}
          renderItem={(v) => (
            <Typography variant="h6" color={"black"}>
              {v.text}
            </Typography>
          )}
          onSelected={v => setData('mobility_and_balance_spine', 'toe_touch', v.value)}
        />
        <TitleCell title={toe_touch} />
        <TitleCell title={2} />
        <EmptyCell />
      </TableRow>
      <TableRow>
        <EmptyCell colSpan={2} />
        <EmptyCell />
        <EmptyCell />
        <EmptyCell />
      </TableRow>
      <TableRow>
        <TitleCell title={"Thoraco-lumbar Assessment Result"} colSpan={2} align={"center"} />

        <TitleCell title={"Accessment Score"} align={"center"} />
        <TitleCell title={"Accessment Maximum"} align={"center"} />
        <TitleCell title={"Patient Score"} align={"center"} />
      </TableRow>
      <TableRow>
        <EmptyCell colSpan={2} />
        <TitleCell align={"center"} title={assessment_score} />
        <TitleCell align={"center"} title={assessment_maximum} />
        <TitleCell align={"center"} title={assessment_score / assessment_maximum} />
      </TableRow>
    </TableFrame>
  );
};

export default MobilitySpine;
