import { TableCell, Typography } from "@mui/material";

export const BorderedCell = ({ children, ...restProps }) => (
  <TableCell {...restProps} sx={{ border: 1 }}>
    {children}
  </TableCell>
);

export const EmptyCell = ({ colSpan }) => (
  <BorderedCell colSpan={colSpan}>
    <Typography> &nbsp;</Typography>
  </BorderedCell>
);
export const TitleCell = ({ title, colSpan, align }) => (
  <BorderedCell colSpan={colSpan} align={align}>
    <Typography fontWeight={600}>{title}</Typography>
  </BorderedCell>
);
