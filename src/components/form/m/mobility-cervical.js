import { Box, Table, TableBody, TableHead, TableRow, Typography } from "@mui/material";
import { useState } from "react";
import { BorderedCell, DropdownCell, EmptyCell, TextInputCell, TitleCell } from "../cell-types";
import TextInput from "../textinput";
import TableFrame from "./table-frame";

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

const initData = {
  extension: 2,
  flexion: 2,
  rotation: 2,
  side: 2,
};

const MobilityCervical = ({ initialData = initData }) => {
  const [data, setData] = useState(initialData);

  const setExtension = (v) => {
    const newData = {
      ...data,
      extension: v.value,
    };
    setData(newData);
  };
  const setFlexion = (v) => {
    const newData = {
      ...data,
      flexion: v.value,
    };
    setData(newData);
  };
  const setRotation = (v) => {
    const newData = {
      ...data,
      rotation: v.value,
    };
    setData(newData);
  };
  const setSide = (v) => {
    const newData = {
      ...data,
      side: v.value,
    };
    setData(newData);
  };

  const sum = Object.values(data).reduce((prev, curr) => prev + curr);

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
          values={dropdownValues}
          renderItem={(v) => (
            <Typography variant="h6" color={"black"}>
              {v.text}
            </Typography>
          )}
          onSelected={setExtension}
        />
        <TitleCell title={data.extension} />
        <TitleCell title={2} />
        <EmptyCell />
      </TableRow>
      <TableRow>
        <TitleCell title={"Cervical Flexion"} />
        <DropdownCell
          id="cervical-flexion"
          values={dropdownValues}
          renderItem={(v) => (
            <Typography variant="h6" color={"black"}>
              {v.text}
            </Typography>
          )}
          onSelected={setFlexion}
        />
        <TitleCell title={data.flexion} />
        <TitleCell title={2} />
        <EmptyCell />
      </TableRow>
      <TableRow>
        <TitleCell title={"Cervical Rotation"} />
        <DropdownCell
          id="cervical-rotation"
          values={dropdownValues}
          renderItem={(v) => (
            <Typography variant="h6" color={"black"}>
              {v.text}
            </Typography>
          )}
          onSelected={setRotation}
        />
        <TitleCell title={data.rotation} />
        <TitleCell title={2} />
        <EmptyCell />
      </TableRow>
      <TableRow>
        <TitleCell title={"Cervical Side Bendering"} />
        <DropdownCell
          id="cervical-side"
          values={dropdownValues}
          renderItem={(v) => (
            <Typography variant="h6" color={"black"}>
              {v.text}
            </Typography>
          )}
          onSelected={setSide}
        />
        <TitleCell title={data.side} />
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
        <TitleCell align={"center"} title={sum} />
        <TitleCell align={"center"} title={8} />
        <TitleCell align={"center"} title={sum / 8} />
      </TableRow>
    </TableFrame>
  );
};

export default MobilityCervical;
