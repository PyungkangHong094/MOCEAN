import { Box, Table, TableRow, Typography } from "@mui/material";
import { useState } from "react";
import { BorderedCell, DropdownCell, EmptyCell, TitleCell } from "../cell-types";
import TextInput from "../textinput";
import TableFrame from "./table-frame";

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

const initData = {
  forward: 0,
  flat: 0,
  scapular: 0,
  toe: 0,
};

const MobilitySpine = ({ initialData = initData }) => {
  const [data, setData] = useState(initialData);

  const setForward = (v) => {
    const newData = {
      ...data,
      forward: v.value,
    };
    setData(newData);
  };
  const setFlat = (v) => {
    const newData = {
      ...data,
      flat: v.value,
    };
    setData(newData);
  };
  const setScapular = (v) => {
    const newData = {
      ...data,
      scapular: v.value,
    };
    setData(newData);
  };
  const setToe = (v) => {
    const newData = {
      ...data,
      toe: v.value,
    };
    setData(newData);
  };

  const sum = Object.values(data).reduce((prev, curr) => prev + curr);

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
    >
      <TableRow>
        <TitleCell title={"Forward Head Posture"} />
        <DropdownCell
          id="spine-forward"
          values={dropdownValues}
          renderItem={(v) => (
            <Typography variant="h6" color={"black"}>
              {v.text}
            </Typography>
          )}
          onSelected={setForward}
        />
        <TitleCell title={data.forward} />
        <TitleCell title={2} />
        <EmptyCell />
      </TableRow>
      <TableRow>
        <TitleCell title={"Flat Back"} />
        <DropdownCell
          id="spine-flat"
          values={dropdownValues}
          renderItem={(v) => (
            <Typography variant="h6" color={"black"}>
              {v.text}
            </Typography>
          )}
          onSelected={setFlat}
        />
        <TitleCell title={data.flat} />
        <TitleCell title={2} />
        <EmptyCell />
      </TableRow>
      <TableRow>
        <TitleCell title={"Scapular Wining"} />
        <DropdownCell
          id="spine-scapular"
          values={dropdownValues}
          renderItem={(v) => (
            <Typography variant="h6" color={"black"}>
              {v.text}
            </Typography>
          )}
          onSelected={setScapular}
        />
        <TitleCell title={data.scapular} />
        <TitleCell title={2} />
        <EmptyCell />
      </TableRow>
      <TableRow>
        <TitleCell title={"Toe Touch"} />
        <DropdownCell
          id="spine-toe"
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
          onSelected={setToe}
        />
        <TitleCell title={data.toe} />
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
        <TitleCell align={"center"} title={sum} />
        <TitleCell align={"center"} title={8} />
        <TitleCell align={"center"} title={sum / 8} />
      </TableRow>
    </TableFrame>
  );
};

export default MobilitySpine;
