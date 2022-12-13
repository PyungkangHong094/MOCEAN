import { Box, Table, TableRow, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { BorderedCell, DropdownCell, TextInputCell, TitleCell } from "../cell-types";
import TextInput from "../textinput";
import TableFrame from "./table-frame";

const initData = {
  age: 0,
  seconds_on_bruce_protocol: 0,
  maximum_hr: 0,
};

const Cardio = ({ initialData = initData }) => {
  const [data, setData] = useState(initialData);

  const setAge = (value) => {
    const newData = {
      ...data,
      age: value,
    };
    setData(newData);
  };
  const setProtocol = (value) => {
    const newData = {
      ...data,
      seconds_on_bruce_protocol: value,
    };
    setData(newData);
  };

  return (
    <TableFrame title={"Cardio-respiraotory strength"} maxWidth={600}>
      <TableRow>
        <TitleCell title={"Gender (M/F)"} />
        <DropdownCell
          values={["Male", "Female"]}
          renderItem={(v) => <Typography color="black">{v}</Typography>}
        />
      </TableRow>
      <TableRow>
        <TitleCell title={"Age"} />
        <TextInputCell type={"number"} defaultValue={data.age} onChange={setAge} />
      </TableRow>
      <TableRow>
        <TitleCell title={"Maximum HR"} />
        <TitleCell title={192 - 0.007 * data.age * data.age} />
      </TableRow>
      <TableRow>
        <TitleCell title={"Time on bruce protocol"} />
        <TextInputCell
          type={"number"}
          defaultValue={data["seconds_on_bruce_protocol"]}
          onChange={setProtocol}
        />
      </TableRow>
    </TableFrame>
  );
};

export default Cardio;
