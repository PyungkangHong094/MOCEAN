import { Button, Dialog, DialogContent, DialogContentText, DialogTitle, Grid } from "@mui/material";
import React from "react";

const BaseDialog = ({ children: actions, ...restProps }) => (
  <Dialog open={restProps.open} maxWidth="sm" onClose={restProps.onClose}>
    <DialogTitle textAlign="center" sx={{ px: 16 }}>
      {restProps.title}
    </DialogTitle>

    <DialogContent>
      <DialogContentText align="center" style={{ whiteSpace: "pre-line" }}>
        {restProps.message}
      </DialogContentText>
    </DialogContent>
    <Grid container minHeight={50}>
      {React.Children.map(actions, (e) => (
        <Grid item={true} xs display="flex">
          {e}
        </Grid>
      ))}
    </Grid>
  </Dialog>
);

export const AlertDialog = ({ open, dismiss, title, message, onConfirm }) => {
  return (
    <BaseDialog title={title} message={message} open={open} onClose={dismiss}>
      <Button
        fullWidth
        color="success"
        variant="contained"
        style={{ borderRadius: 0 }}
        onClick={() => {
          dismiss();
          onConfirm();
        }}
      >
        OK
      </Button>
    </BaseDialog>
  );
};

export const ConfirmDialog = ({ open, dismiss, title, message, onConfirm, onCancel }) => {
  return (
    <BaseDialog title={title} message={message} open={open} onClose={dismiss}>
      <Button
        fullWidth
        color="success"
        variant="contained"
        style={{ borderRadius: 0 }}
        onClick={() => {
          dismiss();
          onConfirm();
        }}
      >
        YES
      </Button>
      <Button
        fullWidth
        color="error"
        variant="contained"
        style={{ borderRadius: 0 }}
        onClick={() => {
          dismiss();
          onCancel();
        }}
      >
        NO
      </Button>
    </BaseDialog>
  );
};
