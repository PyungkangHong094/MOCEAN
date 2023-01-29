import { Box, Table, TableRow, TextField, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { BorderedCell, DropdownCell, TextInputCell, TitleCell } from "../cell-types";
import TextInput from "../textinput";
import TableFrame from "./table-frame";
import { useMContext } from './context';
import { useDialog } from "src/components/dialogs/context";
import { useMutation } from "react-query";
import { postMPartial, putMPartial } from "src/data/repository/m";

const Cardio = ({ id }) => {
  const { showAlertDialog } = useDialog();
  const { data, setData } = useMContext();
  const {
    age,
    gender,
    seconds_on_bruce_protocol,
    maximum_hr
  } = data?.cardio_respiratory_strength;

  const body = {
    customerId: id, 
    reqData: data.cardio_respiratory_strength, 
    endpoint: 'cardio-respiratory-strength'
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
    setData('cardio_respiratory_strength', 'maximum_hr', 192 - 0.007 * age * age);
  }, [age]);

  return (
    <TableFrame title={"Cardio-respiraotory strength"} maxWidth={600} onSave={() => putMData(body)}>
      <TableRow>
        <TitleCell title={"Gender (M/F)"} />
        <DropdownCell
          defaultValue={gender}
          values={[
            { text: "Male", value: "male" },
            { text: "Female", value: "female" }
          ]}
          renderItem={(v) => (
            <Typography variant="h6" color={"black"}>
              {v.text}
            </Typography>
          )}
          onSelected={(v) => setData('cardio_respiratory_strength', 'gender', v.value)}
        />
      </TableRow>
      <TableRow>
        <TitleCell title={"Age"} />
        <TextInputCell 
          type={"number"} 
          defaultValue={age} 
          onChange={v => setData('cardio_respiratory_strength', 'age', v)} 
        />
      </TableRow>
      <TableRow>
        <TitleCell title={"Maximum HR"} />
        <TitleCell title={maximum_hr} />
      </TableRow>
      <TableRow>
        <TitleCell title={"Time on bruce protocol"} />
        <TextInputCell
          type={"number"}
          defaultValue={seconds_on_bruce_protocol}
          onChange={v => setData('cardio_respiratory_strength', 'seconds_on_bruce_protocol', v)}
        />
      </TableRow>
    </TableFrame>
  );
};

export default Cardio;
