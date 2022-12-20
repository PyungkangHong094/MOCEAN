import { Box, Table, TableBody, TableRow, Typography } from "@mui/material";
import React from "react";
import { TextInputCell, TitleCell } from "../cell-types";

const InputForm = ({ title, defaultValue, onChange, children }) => {
  return (
    <Box mb={4}>
      <Typography variant="h5">{title}</Typography>
      <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", mt: 2 }}>
        <Table sx={{ maxWidth: 600, mr: 2 }}>
          <TableBody>
            <TableRow>
              <TitleCell title={"Score"} align={"center"} />
              <TextInputCell type="number" defaultValue={defaultValue} onChange={onChange} />
            </TableRow>
          </TableBody>
        </Table>
        {children}
      </Box>
    </Box>
  );
};

export default InputForm;
