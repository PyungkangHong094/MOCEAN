import { Box, TableRow, Typography } from "@mui/material";
import { useState } from "react";
import { BorderedCell, DropdownCell, EmptyCell, TitleCell } from "../cell-types";
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
  flexion: { left: 2, right: 2 },
  internal: { left: 2, right: 2 },
  external: { left: 2, right: 2 },
  horizontal: { left: 2, right: 2 },
};

const MobilityUpper = ({ initialData = initData }) => {
  const [data, setData] = useState(initialData);

  const setFlexion = (opt, v) => {
    value = { ...data.flexion, [opt]: v };
    const newData = {
      ...data,
      flexion: value,
    };
    setData(newData);
  };
  const setInternal = (opt, v) => {
    value = { ...data.internal, [opt]: v };

    const newData = {
      ...data,
      internal: value,
    };
    setData(newData);
  };
  const setExternal = (opt, v) => {
    value = { ...data.external, [opt]: v };

    const newData = {
      ...data,
      external: value,
    };
    setData(newData);
  };
  const setHorizontal = (opt, v) => {
    value = { ...data.horizontal, [opt]: v };

    const newData = {
      ...data,
      horizontal: value,
    };
    setData(newData);
  };

  const sumLeft = Object.values(data).reduce((prev, curr) => prev + curr.left, 0);
  const sumRight = Object.values(data).reduce((prev, curr) => prev + curr.right, 0);

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
    >
      <TableRow>
        <TitleCell title={"Flexion"} />
        <DropdownCell
          id="upper-flexion-left"
          values={dropdownValues}
          renderItem={(v) => (
            <Typography variant="h6" color={"black"}>
              {v.text}
            </Typography>
          )}
          onSelected={(v) => setFlexion("left", v.value)}
        />
        <DropdownCell
          id="upper-flexion-right"
          values={dropdownValues}
          renderItem={(v) => (
            <Typography variant="h6" color={"black"}>
              {v.text}
            </Typography>
          )}
          onSelected={(v) => setFlexion("right", v.value)}
        />
        <TitleCell title={data.flexion.left} />
        <TitleCell title={data.flexion.right} />
      </TableRow>
      <TableRow>
        <TitleCell title={"Internal Rotation"} />
        <DropdownCell
          id="upper-internal-left"
          values={dropdownValues}
          renderItem={(v) => (
            <Typography variant="h6" color={"black"}>
              {v.text}
            </Typography>
          )}
          onSelected={(v) => setInternal("left", v.value)}
        />
        <DropdownCell
          id="upper-internal-right"
          values={dropdownValues}
          renderItem={(v) => (
            <Typography variant="h6" color={"black"}>
              {v.text}
            </Typography>
          )}
          onSelected={(v) => setInternal("right", v.value)}
        />
        <TitleCell title={data.internal.left} />
        <TitleCell title={data.internal.right} />
      </TableRow>
      <TableRow>
        <TitleCell title={"External Rotation"} />
        <DropdownCell
          id="upper-external-left"
          values={dropdownValues}
          renderItem={(v) => (
            <Typography variant="h6" color={"black"}>
              {v.text}
            </Typography>
          )}
          onSelected={(v) => setExternal("left", v.value)}
        />
        <DropdownCell
          id="upper-external-right"
          values={dropdownValues}
          renderItem={(v) => (
            <Typography variant="h6" color={"black"}>
              {v.text}
            </Typography>
          )}
          onSelected={(v) => setExternal("right", v.value)}
        />
        <TitleCell title={data.external.left} />
        <TitleCell title={data.external.right} />
      </TableRow>
      <TableRow>
        <TitleCell title={"Horizontal Abduction"} />
        <DropdownCell
          id="upper-horizontal-left"
          values={dropdownValues}
          renderItem={(v) => (
            <Typography variant="h6" color={"black"}>
              {v.text}
            </Typography>
          )}
          onSelected={(v) => setHorizontal("left", v.value)}
        />
        <DropdownCell
          id="upper-horizontal-right"
          values={dropdownValues}
          renderItem={(v) => (
            <Typography variant="h6" color={"black"}>
              {v.text}
            </Typography>
          )}
          onSelected={(v) => setHorizontal("right", v.value)}
        />
        <TitleCell title={data.horizontal.left} />
        <TitleCell title={data.horizontal.right} />
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
          values={[
            {
              text: "Wide",
              value: 0,
            },
            {
              text: "Narrow",
              value: 0,
            },
          ]}
          renderItem={(v) => (
            <Typography variant="h6" color={"black"}>
              {v.text}
            </Typography>
          )}
        />
        <EmptyCell />
        <EmptyCell />
      </TableRow>
      <TableRow>
        <TitleCell title={"Pattern"} />
        <DropdownCell
          id="upper-pattern"
          colSpan={2}
          values={[
            {
              text: "RDP",
              value: 0,
            },
            {
              text: "Bilateral",
              value: 0,
            },
            {
              text: "Patho",
              value: 0,
            },
          ]}
          renderItem={(v) => (
            <Typography variant="h6" color={"black"}>
              {v.text}
            </Typography>
          )}
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
        <TitleCell title={sumLeft} colSpan={2} align={"center"} />
        <TitleCell title={8} align={"center"} />
        <TitleCell title={sumLeft / 8} align={"center"} />
      </TableRow>
      <TableRow>
        <TitleCell title={"Upper Extremity_Right"} />
        <TitleCell title={sumRight} colSpan={2} align={"center"} />
        <TitleCell title={8} align={"center"} />
        <TitleCell title={sumRight / 8} align={"center"} />
      </TableRow>
    </TableFrame>
  );
};

export default MobilityUpper;
