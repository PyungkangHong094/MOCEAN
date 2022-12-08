import { Box, Table, TableBody, TableRow, Typography } from "@mui/material";
import React from "react";
import { TextInputCell, TitleCell } from "../cell-types";

const InputForm = ({ title, maxWidth = 600, children }) => {
  return (
    <Box mb={4}>
      <Typography variant="h5">{title}</Typography>
      <Table sx={{ maxWidth: maxWidth, mt: 2 }}>
        <TableBody>
          <TableRow>
            <TitleCell title={"Figure"} align={"center"} />
            {children}
          </TableRow>
        </TableBody>
      </Table>
    </Box>
  );
};

export default InputForm;
