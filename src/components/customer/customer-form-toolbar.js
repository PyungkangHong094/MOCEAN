import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon,
  Typography,
  Divider,
} from "@mui/material";
import { Search as SearchIcon } from "../../icons/search";
import { Upload as UploadIcon } from "../../icons/upload";
import { Download as DownloadIcon } from "../../icons/download";
import { useRouter } from "next/router";
import { useDialog } from "../dialogs/context";
import { useCallback, useContext, useState } from "react";
import { ArrowBackIosNewRounded } from "@mui/icons-material";
import { useMutation } from "react-query";
import { postE, putE } from "src/data/repository/e";
import { postO, putO } from "src/data/repository/o";
import { postC, putC } from "src/data/repository/c";
import { useCContext } from "../form/c/context";
import { useEContext } from "../form/e/context";
import { addUser, updateUser } from "src/data/repository/users";
import { profileContext } from "../form/profile";

export const CustomerFormToolbar = ({ id, currentMenu }) => {
  const isNew = id === null || id === undefined;
  const router = useRouter();
  const { showAlertDialog, showConfirmDialog } = useDialog();

  const { profile } = useContext(profileContext);

  const { data: dataC } = useCContext();
  const { data: dataE } = useEContext();
  console.log("ToolBar C", dataC);
  console.log("ToolBar E", dataE);

  const { mutate: saveUser } = useMutation(isNew ? addUser : updateUser);

  // const { mutate: saveE } = useMutation(isNew ? postE : putE, {
  //   onSuccess: onSaveSuccess,
  //   onError: onSaveFailed,
  // });

  const onSaveSuccess = () => {
    showAlertDialog({ title: "Success", message: "Save completed" });
  };
  const onSaveFailed = () => {
    showAlertDialog({ title: "Failed", message: "Save failed" });
  };

  const { mutate: saveO } = useMutation(isNew ? postO : putO, {
    onSuccess: onSaveSuccess,
    onError: onSaveFailed,
  });
  const { mutate: saveC } = useMutation(isNew ? postC : putC, {
    onSuccess: onSaveSuccess,
    onError: onSaveFailed,
  });
  const { mutate: saveE } = useMutation(isNew ? postE : putE, {
    onSuccess: onSaveSuccess,
    onError: onSaveFailed,
  });

  const saveForm = useCallback(() => {
    if (profile.name !== "") {
      saveUser(isNew ? profile : { customerId: id, data: profile });
    }
    switch (currentMenu) {
      case 0:
        showAlertDialog({
          title: "Warning",
          message: "Only work for customer info. You should click 'Check' button for save data.",
        });
        break;

      case 1:
        saveO({
          customerId: id,
          dataO: {
            score: 0,
            weight: 0,
            smm: 0,
            body_fat: 0,
            visceral_fat: 0,
            total_body_water: 0,
            whole_body_phase_angle: 0,
            right_arm: 0,
            left_arm: 0,
            right_leg: 0,
            left_leg: 0,
            trunk: 0,
            inflamation: 0,
          },
        });
        break;

      case 2:
        saveC({ id, dataC });
        break;
      case 3:
        saveE({ id, dataE });
        break;
    }
  }, [currentMenu, profile, dataC, dataE]);

  const cancelForm = () => {
    showConfirmDialog({
      title: `Cancel ${isNew ? "Adding" : "Editing"} Customer`,
      message: "Are you sure to exit?",
      onConfirm: router.back,
    });
  };

  return (
    <Box
      sx={{
        alignItems: "center",
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        height: 80,
        backgroundColor: "#F9FAFC",
        px: 3,
        py: 2,
      }}
    >
      <Typography variant="h5">{isNew ? "Add Customer" : "Edit Customer"}</Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Button variant="contained" color="error" sx={{ width: 100 }} onClick={cancelForm}>
          Cancel
        </Button>
        <Button variant="contained" color="success" sx={{ width: 100, mx: 2 }} onClick={saveForm}>
          Save
        </Button>
      </Box>
    </Box>
  );
};
