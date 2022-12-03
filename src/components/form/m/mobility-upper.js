import { Box, TableRow, Typography } from "@mui/material";
import { BorderedCell, EmptyCell, TitleCell } from "../cell-types";
import TextInput from "../textinput";
import TableFrame from "./table-frame";

const MobilityUpper = () => {
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
      </TableRow>
      <TableRow>
        <TitleCell title={"Internal Rotation"} />
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
      </TableRow>
      <TableRow>
        <TitleCell title={"External Rotation"} />
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
      </TableRow>
      <TableRow>
        <TitleCell title={"Horizontal Abduction"} />
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
      </TableRow>
      <TableRow>
        <TitleCell title={"Apical expansion\n(which lung is restricted with breathing?)"} />
        <BorderedCell>
          <TextInput fullWidth />
        </BorderedCell>
        <EmptyCell />
        <EmptyCell />
        <EmptyCell />
      </TableRow>
      <TableRow>
        <TitleCell title={"Infrasternal Angle\n(wide or narrow)"} />
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
      </TableRow>
      <TableRow>
        <EmptyCell />
        <TitleCell title={"Accessment Score"} colSpan={2} align={"center"} />
        <TitleCell title={"Accessment Maximum"} align={"center"} />
        <TitleCell title={"Patient Score"} align={"center"} />
      </TableRow>
      <TableRow>
        <TitleCell title={"Upper Extremity_Left"} />
        <BorderedCell colSpan={2} align={"center"}>
          <Typography>-</Typography>
        </BorderedCell>
        <BorderedCell align={"center"}>
          <Typography>-</Typography>
        </BorderedCell>
        <BorderedCell align={"center"}>
          <Typography>-</Typography>
        </BorderedCell>
      </TableRow>
      <TableRow>
        <TitleCell title={"Upper Extremity_Right"} />
        <BorderedCell colSpan={2} align={"center"}>
          <Typography>-</Typography>
        </BorderedCell>
        <BorderedCell align={"center"}>
          <Typography>-</Typography>
        </BorderedCell>
        <BorderedCell align={"center"}>
          <Typography>-</Typography>
        </BorderedCell>
      </TableRow>
    </TableFrame>
  );
};

export default MobilityUpper;
