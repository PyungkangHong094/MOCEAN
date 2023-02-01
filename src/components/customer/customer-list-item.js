import {
  Avatar,
  Button,
  ButtonGroup,
  Checkbox,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import Link from "next/link";
import { getInitials } from "../../utils/get-initials";
import { useDialog } from "../dialogs/context";

export const CustomerListItem = ({ customer, selected, onSelect, onRemove }) => {
  const { showConfirmDialog } = useDialog();

  const requestRemove = () => {
    showConfirmDialog({
      title: "Delete customer",
      message: "All information about the user will be deleted. \n Click to delete.",
      onConfirm: onRemove,
    });
  };

  return (
    <TableRow hover key={customer.id} selected={selected}>
      <TableCell padding="checkbox">
        <Checkbox checked={selected} onChange={(event) => onSelect(customer.id)} value="true" />
      </TableCell>
      <TableCell>
        <Box
          sx={{
            alignItems: "center",
            display: "flex",
          }}
        >
          <Avatar src={customer.avatarUrl} sx={{ mr: 2 }}>
            {getInitials(customer.name)}
          </Avatar>
          <Typography color="textPrimary" variant="body1">
            {customer.name}
          </Typography>
        </Box>
      </TableCell>
      <TableCell>{customer.email}</TableCell>
      <TableCell>{customer.birthday}</TableCell>
      <TableCell>{customer.phone_number}</TableCell>
      <TableCell>
        <Link href={`customers/form?id=${customer.id}`}>
          <Button color="primary" variant="contained" sx={{ mr: 1 }}>
            Edit
          </Button>
        </Link>
        <Link href={`customers/${customer.id}`}>
          <Button color="success" variant="contained" sx={{ mr: 1 }}>
            Reslut
          </Button>
        </Link>
        <Button color="error" variant="contained" sx={{ mr: 1 }} onClick={requestRemove}>
          Delete
        </Button>
      </TableCell>
    </TableRow>
  );
};
