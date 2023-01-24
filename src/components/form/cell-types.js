import { Button, Menu, MenuItem, TableCell, TextField, Typography } from "@mui/material";
import { useState } from "react";
import TextInput from "./textinput";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";

export const BorderedCell = ({ children, ...restProps }) => (
  <TableCell {...restProps} sx={{ border: 1, p: 1, maxWidth: (restProps.colSpan ?? 1) * 10 }}>
    {children}
  </TableCell>
);

export const EmptyCell = ({ colSpan }) => (
  <BorderedCell colSpan={colSpan}>
    <Typography> &nbsp;</Typography>
  </BorderedCell>
);

export const TitleCell = ({ title, colSpan, align = "center" }) => (
  <BorderedCell colSpan={colSpan} align={align}>
    <Typography whiteSpace={"pre-wrap"} fontWeight={600}>
      {title}
    </Typography>
  </BorderedCell>
);

export const TextInputCell = ({ type, colSpan, defaultValue, hint, onChange = (v) => {} }) => (
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
      placeholder={hint}
      defaultValue={defaultValue}
      onChange={(e) => onChange(e.target.value)}
      onSubmit={() => {}}
    />
  </BorderedCell>
);

export const DropdownCell = ({
  id = "basic",
  colSpan,
  defaultValue,
  values = [],
  renderSelectedItem,
  renderItem,
  onSelected = (v) => {},
}) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const isStatusOpen = Boolean(anchorEl);
  const [status, setStatus] = useState(values.find(v => v.value == defaultValue) || values[0]);
  const openStatus = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const selectStatus = (status) => {
    setStatus(status);
    onSelected(status);
    closeStatus();
  };
  const closeStatus = () => {
    setAnchorEl(null);
  };

  return (
    <BorderedCell colSpan={colSpan}>
      <Button
        id={`${id}-button`}
        fullWidth
        aria-controls={isStatusOpen ? `${id}-menu` : undefined}
        aria-haspopup="true"
        aria-expanded={isStatusOpen ? "true" : undefined}
        onClick={openStatus}
        sx={{ justifyContent: "space-between", m: 0 }}
      >
        {renderSelectedItem ? renderSelectedItem(status) : renderItem(status)}
        <ArrowDropDownRoundedIcon fontSize="large" color="action" />
      </Button>
      <Menu
        id={`${id}-menu`}
        anchorEl={anchorEl}
        open={isStatusOpen}
        onClose={closeStatus}
        MenuListProps={{
          "aria-labelledby": `${id}-menu`,
          sx: { width: anchorEl && anchorEl.offsetWidth },
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
