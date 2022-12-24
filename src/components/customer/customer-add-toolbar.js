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
import { useOContext } from "../form/o/context";
import { useCContext } from "../form/c/context";
import { useEContext } from "../form/e/context";
import { addUser, updateUser } from "src/data/repository/users";
import { profileContext } from "../form/profile";

export const CustomerAddToolbar = () => {
  const router = useRouter();
  const { showAlertDialog, showConfirmDialog } = useDialog();

  const { profile } = useContext(profileContext);

  const { mutate: addUserData } = useMutation(addUser, {
    onSuccess: (data) => {
      showAlertDialog({ title: "Success", message: "Add user success", onConfirm: () => {
        console.log(data);
        router.replace(`/customers/form?id=${data.id}`)
      } });
    },
    onError: () => {
      showAlertDialog({ title: "Failed", message: "Add user failed" });
    },
  });

  const saveUser = () => {
    addUserData(profile)
  }

  const cancelForm = () => {
    showConfirmDialog({
      title: `Cancel Adding Customer`,
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
      <Typography variant="h5">Add Customer</Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Button variant="contained" color="error" sx={{ width: 100 }} onClick={cancelForm}>
          Cancel
        </Button>
        <Button variant="contained" color="success" sx={{ width: 100, mx: 2 }} onClick={saveUser}>
          Save
        </Button>
      </Box>
    </Box>
  );
};
