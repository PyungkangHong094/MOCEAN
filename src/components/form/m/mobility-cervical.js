import { Box, Table, TableBody, TableHead, TableRow, Typography } from "@mui/material";
import { BorderedCell, EmptyCell, TitleCell } from "../cell-types";
import TextInput from "../textinput";
import TableFrame from "./table-frame";

const MobilityCervical = () => {
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
        <TitleCell title={"Cervical Extension"} />
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
        <TitleCell title={"Cervical Flexion"} />
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
        <TitleCell title={"Cervical Rotation"} />
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
        <TitleCell title={"Cervical Side Bendering"} />
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
        <EmptyCell />
        <EmptyCell />
        <TitleCell title={"Accessment Score"} align={"center"} />
        <TitleCell title={"Accessment Maximum"} align={"center"} />
        <TitleCell title={"Patient Score"} align={"center"} />
      </TableRow>
      <TableRow>
        <EmptyCell />
        <EmptyCell />
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

export default MobilityCervical;
