import { Box, Table, TableRow, Typography } from "@mui/material";
import { BorderedCell, EmptyCell, TitleCell } from "../cell-types";
import TextInput from "../textinput";
import TableFrame from "./table-frame";

const Movement = () => {
  return (
    <TableFrame
      title={"Movement"}
      head={
        <TableRow>
          {["Deep Squat", "Assessment", "Assessment Score", "Assessment Maximum"].map((title) => (
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
        <TitleCell title={"hip shift in squat? (y/n)"} />
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
        <TitleCell title={"can squat below 90 deg? (y/n)"} />
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
        <TitleCell title={"feet pronates during squat? (y/n)"} />
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
        <TitleCell title={"Dead Lift (hip hinge)"} align={"center"} />
        <EmptyCell />
        <EmptyCell />
        <EmptyCell />
      </TableRow>
      <TableRow>
        <TitleCell title={"can hinge hip without over extenion at L-s?"} />
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
        <TitleCell title={"A lot of rouding upper back?"} />
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
        <TitleCell title={"Toe touch"} align={"center"} />
        <EmptyCell />
        <EmptyCell />
        <EmptyCell />
      </TableRow>
      <TableRow>
        <TitleCell title={"can finger tip touch the ground? (y/n)"} />
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
        <TitleCell title={"hip shift during toe touch? (y/n)"} />
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
        <TitleCell title={"A lot of rouding upper back?"} />
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
        <TitleCell title={"Shoulder Flexion (N/R/P)"} align={"center"} />
        <EmptyCell />
        <EmptyCell />
        <EmptyCell />
      </TableRow>
      <TableRow>
        <TitleCell title={"Left"} />
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
        <TitleCell title={"Right"} />
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
        <TitleCell title={"Shoulder Lateral Flexion (N/R/P)"} align={"center"} />

        <EmptyCell />
        <EmptyCell />
        <EmptyCell />
      </TableRow>
      <TableRow>
        <TitleCell title={"Left"} />
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
        <TitleCell title={"Right"} />
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
        <EmptyCell />
        <TitleCell title={"Accessment Score"} align={"center"} />
        <TitleCell title={"Accessment Maximum"} align={"center"} />
        <TitleCell title={"Patient Score"} align={"center"} />
      </TableRow>
      <TableRow>
        <TitleCell title={"Mobility Score"} />
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
    </TableFrame>
  );
};

export default Movement;
