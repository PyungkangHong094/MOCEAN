import { Box, Table, TableBody, TableHead, TableRow, Typography } from "@mui/material";
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
  single: { left: 2, right: 2 },
  adduction: { left: 2, right: 2 },
  hip: { left: 2, right: 2 },
  thomas: { left: 2, right: 2 },
  mtp: { left: 2, right: 2 },
};

const MobilityLower = ({ initialData = initData }) => {
  const [data, setData] = useState(initialData);

  const setDropdownData = (key, opt, v) => {
    value = { ...data[key], [opt]: v };
    const newData = {
      ...data,
      [key]: value,
    };
    setData(newData);
  };

  const sumLeft = Object.values(data).reduce((prev, curr) => prev + curr.left, 0);
  const sumRight = Object.values(data).reduce((prev, curr) => prev + curr.right, 0);

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
          values={dropdownValues}
          renderItem={(v) => (
            <Typography variant="h6" color={"black"}>
              {v.text}
            </Typography>
          )}
          onSelected={(v) => setDropdownData("single", "left", v.value)}
        />
        <DropdownCell
          id="lower-single-right"
          values={dropdownValues}
          renderItem={(v) => (
            <Typography variant="h6" color={"black"}>
              {v.text}
            </Typography>
          )}
          onSelected={(v) => setDropdownData("single", "right", v.value)}
        />
        <TitleCell title={data.single.left} />
        <TitleCell title={data.single.right} />
        <TitleCell title={2} />
      </TableRow>
      <TableRow>
        <TitleCell title={"Adduction Drop Test"} />
        <DropdownCell
          id="lower-adduction-left"
          values={dropdownValues}
          renderItem={(v) => (
            <Typography variant="h6" color={"black"}>
              {v.text}
            </Typography>
          )}
          onSelected={(v) => setDropdownData("adduction", "left", v.value)}
        />
        <DropdownCell
          id="lower-adduction-right"
          values={dropdownValues}
          renderItem={(v) => (
            <Typography variant="h6" color={"black"}>
              {v.text}
            </Typography>
          )}
          onSelected={(v) => setDropdownData("adduction", "right", v.value)}
        />
        <TitleCell title={data.adduction.left} />
        <TitleCell title={data.adduction.right} />
        <TitleCell title={2} />
      </TableRow>
      <TableRow>
        <TitleCell title={"Hip IR"} />
        <DropdownCell
          id="lower-hip-left"
          values={dropdownValues}
          renderItem={(v) => (
            <Typography variant="h6" color={"black"}>
              {v.text}
            </Typography>
          )}
          onSelected={(v) => setDropdownData("hip", "left", v.value)}
        />
        <DropdownCell
          id="lower-hip-right"
          values={dropdownValues}
          renderItem={(v) => (
            <Typography variant="h6" color={"black"}>
              {v.text}
            </Typography>
          )}
          onSelected={(v) => setDropdownData("hip", "right", v.value)}
        />
        <TitleCell title={data.hip.left} />
        <TitleCell title={data.hip.right} />
        <TitleCell title={2} />
      </TableRow>
      <TableRow>
        <TitleCell title={"Thomas Test"} />
        <DropdownCell
          id="lower-thomas-left"
          values={dropdownValues}
          renderItem={(v) => (
            <Typography variant="h6" color={"black"}>
              {v.text}
            </Typography>
          )}
          onSelected={(v) => setDropdownData("thomas", "left", v.value)}
        />
        <DropdownCell
          id="lower-thomas-right"
          values={dropdownValues}
          renderItem={(v) => (
            <Typography variant="h6" color={"black"}>
              {v.text}
            </Typography>
          )}
          onSelected={(v) => setDropdownData("thomas", "right", v.value)}
        />
        <TitleCell title={data.thomas.left} />
        <TitleCell title={data.thomas.right} />
        <TitleCell title={2} />
      </TableRow>
      <TableRow>
        <TitleCell title={"1st MTP flexion"} />
        <DropdownCell
          id="lower-mtp-left"
          values={dropdownValues}
          renderItem={(v) => (
            <Typography variant="h6" color={"black"}>
              {v.text}
            </Typography>
          )}
          onSelected={(v) => setDropdownData("mtp", "left", v.value)}
        />
        <DropdownCell
          id="lower-mtp-right"
          values={dropdownValues}
          renderItem={(v) => (
            <Typography variant="h6" color={"black"}>
              {v.text}
            </Typography>
          )}
          onSelected={(v) => setDropdownData("mtp", "right", v.value)}
        />
        <TitleCell title={data.mtp.left} />
        <TitleCell title={data.mtp.right} />
        <TitleCell title={2} />
      </TableRow>
      <TableRow>
        <TitleCell title={"Feet"} />
        <DropdownCell
          id="lower-feet-left"
          values={[
            {
              text: "Supination",
              value: 0,
            },
            {
              text: "Pronation",
              value: 0,
            },
          ]}
          renderItem={(v) => (
            <Typography variant="h6" color={"black"}>
              {v.text}
            </Typography>
          )}
        />
        <DropdownCell
          id="lower-feet-right"
          values={[
            {
              text: "Supination",
              value: 0,
            },
            {
              text: "Pronation",
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
        <EmptyCell />
      </TableRow>
      <TableRow>
        <TitleCell title={"Pattern"} />
        <DropdownCell
          id="lower-pattern"
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
        <TitleCell title={sumLeft} colSpan={2} align={"center"} />
        <TitleCell title={10} align={"center"} />
        <TitleCell title={sumLeft / 10} align={"center"} />
        <EmptyCell />
      </TableRow>
      <TableRow>
        <TitleCell title={"Lower Extremity_Right"} />
        <TitleCell title={sumRight} colSpan={2} align={"center"} />
        <TitleCell title={10} align={"center"} />
        <TitleCell title={sumRight / 10} align={"center"} />
        <EmptyCell />
      </TableRow>
    </TableFrame>
  );
};

export default MobilityLower;
