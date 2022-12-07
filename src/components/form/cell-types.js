import { TableCell, TextField, Typography } from "@mui/material";
import TextInput from "./textinput";

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

export const TextInputCell = ({ type, colSpan, defaultValue, onChange }) => (
  <BorderedCell colSpan={colSpan}>
    <TextField
      variant="standard"
      fullWidth
      inputProps={{
        style: {
          textAlign: "center",
        },
      }}
      InputProps={{
        disableUnderline: true,
      }}
      maxRows={1}
      type={type}
      defaultValue={defaultValue}
      onChange={(e) => onChange(e.target.value)}
      onSubmit={() => {}}
    />
  </BorderedCell>
);
