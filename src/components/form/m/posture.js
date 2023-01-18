import { Box, Table, TableBody, TableCell, TableRow, TextField, Typography } from "@mui/material";
import { TextInputCell, TitleCell } from "../cell-types";
import TextInput from "../textinput";
import TableFrame from "./table-frame";
import { initData, useMContext } from './context';
import { useDialog } from "src/components/dialogs/context";
import { useMutation } from "react-query";
import { postMPartial, putMPartial } from "src/data/repository/m";

const Posture = () => {
  const { showAlertDialog } = useDialog();
  const { data, setData } = useMContext();
  const { index } = data.posture || initData.posture;
  
  const body = { 
    customerId: data.id, 
    reqData: data.posture, 
    endpoint: 'musculoskeletal/mobility-and-balance/posture-index'
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
    <TableFrame title={"Posture"} maxWidth={600} onSave={() => putMData(body)}>
      <TableRow>
        <TitleCell title={"Musuloskeletal Index"} />
        <TextInputCell 
          defaultValue={index}
          type={"number"} 
          onChange={v => setData('posture', 'index', v)} 
        />
      </TableRow>
    </TableFrame>
  );
};

export default Posture;
