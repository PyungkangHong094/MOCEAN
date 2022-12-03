import { Box, Table, TableRow, Typography } from "@mui/material";
import { BorderedCell, EmptyCell, TitleCell } from "../cell-types";
import TextInput from "../textinput";
import TableFrame from "./table-frame";

const MobilitySpine = () => {
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
        <TitleCell title={"Flat Back"} />
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
        <TitleCell title={"Scapular Wining"} />
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
        <TitleCell title={"Toe Touch"} />
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

        <BorderedCell align={"center"}>
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

export default MobilitySpine;
