import { Button, Menu, MenuItem, TableCell, TextField, Typography } from "@mui/material";
import { useState } from "react";
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

export const DropdownCell = ({
  colSpan,
  defaultValue,
  values = [],
  renderSelectedItem,
  renderItem,
}) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const isStatusOpen = Boolean(anchorEl);
  const [status, setStatus] = useState(defaultValue ?? values[0]);
  const openStatus = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const selectStatus = (status) => {
    setStatus(status);
    closeStatus();
  };
  const closeStatus = () => {
    setAnchorEl(null);
  };

  return (
    <BorderedCell colSpan={colSpan}>
      <Button
        id="basic-button"
        fullWidth
        aria-controls={isStatusOpen ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={isStatusOpen ? "true" : undefined}
        onClick={openStatus}
      >
        {renderSelectedItem ? renderSelectedItem(status) : renderItem(status)}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={isStatusOpen}
        onClose={closeStatus}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {values.map((v, i) => (
          <MenuItem key={i.toString()} onClick={() => selectStatus(v)}>
            {renderItem(v)}
          </MenuItem>
        ))}
      </Menu>
    </BorderedCell>
  );
};
