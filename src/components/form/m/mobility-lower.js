import { Box, Table, TableBody, TableHead, TableRow, Typography } from "@mui/material";
import { BorderedCell, EmptyCell, TitleCell } from "../cell-types";
import TextInput from "../textinput";
import TableFrame from "./table-frame";

const MobilityLower = () => {
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
        <BorderedCell>
          <TextInput fullWidth />
        </BorderedCell>
        <BorderedCell>
          <TextInput fullWidth />
        </BorderedCell>
        <BorderedCell>
          <TextInput fullWidth />
        </BorderedCell>
        <BorderedCell>
          <TextInput fullWidth />
        </BorderedCell>
        <EmptyCell />
      </TableRow>
      <TableRow>
        <TitleCell title={"Single Leg Raise"} />
        <BorderedCell>
          <TextInput fullWidth />
        </BorderedCell>
        <BorderedCell>
          <TextInput fullWidth />
        </BorderedCell>
        <BorderedCell>
          <TextInput fullWidth />
        </BorderedCell>
        <BorderedCell>
          <TextInput fullWidth />
        </BorderedCell>
        <EmptyCell />
      </TableRow>
      <TableRow>
        <TitleCell title={"Adduction Drop Test"} />
        <BorderedCell>
          <TextInput fullWidth />
        </BorderedCell>
        <BorderedCell>
          <TextInput fullWidth />
        </BorderedCell>
        <BorderedCell>
          <TextInput fullWidth />
        </BorderedCell>
        <BorderedCell>
          <TextInput fullWidth />
        </BorderedCell>
        <EmptyCell />
      </TableRow>
      <TableRow>
        <TitleCell title={"Hip IR"} />
        <BorderedCell>
          <TextInput fullWidth />
        </BorderedCell>
        <BorderedCell>
          <TextInput fullWidth />
        </BorderedCell>
        <BorderedCell>
          <TextInput fullWidth />
        </BorderedCell>
        <BorderedCell>
          <TextInput fullWidth />
        </BorderedCell>
        <EmptyCell />
      </TableRow>
      <TableRow>
        <TitleCell title={"Thomas Test"} />
        <BorderedCell>
          <TextInput fullWidth />
        </BorderedCell>
        <BorderedCell>
          <TextInput fullWidth />
        </BorderedCell>
        <BorderedCell>
          <TextInput fullWidth />
        </BorderedCell>
        <BorderedCell>
          <TextInput fullWidth />
        </BorderedCell>
        <EmptyCell />
      </TableRow>
      <TableRow>
        <TitleCell title={"1st MTP flexion"} />
        <BorderedCell>
          <TextInput fullWidth />
        </BorderedCell>
        <BorderedCell>
          <TextInput fullWidth />
        </BorderedCell>
        <BorderedCell>
          <TextInput fullWidth />
        </BorderedCell>
        <BorderedCell>
          <TextInput fullWidth />
        </BorderedCell>
        <EmptyCell />
      </TableRow>
      <TableRow>
        <TitleCell title={"Feet"} />
        <BorderedCell>
          <TextInput fullWidth />
        </BorderedCell>
        <BorderedCell>
          <TextInput fullWidth />
        </BorderedCell>
        <EmptyCell />
        <EmptyCell />
        <EmptyCell />
      </TableRow>
      <TableRow>
        <TitleCell title={"Pattern"} />
        <BorderedCell>
          <TextInput fullWidth />
        </BorderedCell>
        <EmptyCell />
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
        <BorderedCell colSpan={2} align={"center"}>
          <Typography>-</Typography>
        </BorderedCell>
        <BorderedCell align={"center"}>
          <Typography>-</Typography>
        </BorderedCell>
        <BorderedCell align={"center"}>
          <Typography>-</Typography>
        </BorderedCell>
        <EmptyCell />
      </TableRow>
      <TableRow>
        <TitleCell title={"Lower Extremity_Right"} />
        <BorderedCell colSpan={2} align={"center"}>
          <Typography>-</Typography>
        </BorderedCell>
        <BorderedCell align={"center"}>
          <Typography>-</Typography>
        </BorderedCell>
        <BorderedCell align={"center"}>
          <Typography>-</Typography>
        </BorderedCell>
        <EmptyCell />
      </TableRow>
    </TableFrame>
  );
};

export default MobilityLower;
