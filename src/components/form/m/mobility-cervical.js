import { Box, Table, TableBody, TableHead, TableRow, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { BorderedCell, DropdownCell, EmptyCell, TextInputCell, TitleCell } from "../cell-types";
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

const MobilityCervical = () => {
  const { showAlertDialog } = useDialog();
  const { data, setData } = useMContext();
  const {
    cervical_extension,
    cervical_flexion,
    cervical_rotation,
    cervical_side_bending,
    assessment_maximum,
    assessment_score
  } = data.mobility_and_balance_cervical || initData.mobility_and_balance_cervical;

  const body = { 
    customerId: data.id, 
    reqData: data.mobility_and_balance_cervical, 
    endpoint: 'musculoskeletal/mobility-and-balance/cervical'
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
    const score = cervical_extension + cervical_flexion + cervical_rotation + cervical_side_bending;
    
    setData('mobility_and_balance_cervical', 'assessment_score', score);
  
  }, [cervical_extension, cervical_flexion, cervical_rotation, cervical_side_bending]);


  return (
    <TableFrame
      title={"Mobility&Balance_Cervical"}
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
        <TitleCell title={"Mandible Position"} />
        <EmptyCell />
        <EmptyCell />
        <EmptyCell />
        <EmptyCell />
      </TableRow>
      <TableRow>
        <TitleCell title={"Cervical Extension"} />
        <DropdownCell
          id="cervical-extension"
          defaultValue={cervical_extension}
          values={dropdownValues}
          renderItem={(v) => (
            <Typography variant="h6" color={"black"}>
              {v.text}
            </Typography>
          )}
          onSelected={v => setData('mobility_and_balance_cervical', 'cervical_extension', v.value)}
        />
        <TitleCell title={cervical_extension} />
        <TitleCell title={2} />
        <EmptyCell />
      </TableRow>
      <TableRow>
        <TitleCell title={"Cervical Flexion"} />
        <DropdownCell
          id="cervical-flexion"
          defaultValue={cervical_flexion}
          values={dropdownValues}
          renderItem={(v) => (
            <Typography variant="h6" color={"black"}>
              {v.text}
            </Typography>
          )}
          onSelected={v => setData('mobility_and_balance_cervical', 'cervical_flexion', v.value)}
        />
        <TitleCell title={cervical_flexion} />
        <TitleCell title={2} />
        <EmptyCell />
      </TableRow>
      <TableRow>
        <TitleCell title={"Cervical Rotation"} />
        <DropdownCell
          id="cervical-rotation"
          defaultValue={cervical_rotation}
          values={dropdownValues}
          renderItem={(v) => (
            <Typography variant="h6" color={"black"}>
              {v.text}
            </Typography>
          )}
          onSelected={v => setData('mobility_and_balance_cervical', 'cervical_rotation', v.value)}
        />
        <TitleCell title={cervical_rotation} />
        <TitleCell title={2} />
        <EmptyCell />
      </TableRow>
      <TableRow>
        <TitleCell title={"Cervical Side Bendering"} />
        <DropdownCell
          id="cervical-side"
          defaultValue={cervical_side_bending}
          values={dropdownValues}
          renderItem={(v) => (
            <Typography variant="h6" color={"black"}>
              {v.text}
            </Typography>
          )}
          onSelected={v => setData('mobility_and_balance_cervical', 'cervical_side_bending', v.value)}
        />
        <TitleCell title={cervical_side_bending} />
        <TitleCell title={2} />
        <EmptyCell />
      </TableRow>
      <TableRow>
        <EmptyCell />
        <EmptyCell />
        <TitleCell title={"Accessment Score"} align={"center"} />
        <TitleCell title={"Accessment Maximum"} align={"center"} />
        <TitleCell title={"Patient Score"} align={"center"} />
      </TableRow>
      <TableRow>
        <EmptyCell />
        <EmptyCell />
        <TitleCell align={"center"} title={assessment_score} />
        <TitleCell align={"center"} title={assessment_maximum} />
        <TitleCell align={"center"} title={assessment_score / assessment_maximum} />
      </TableRow>
    </TableFrame>
  );
};

export default MobilityCervical;
