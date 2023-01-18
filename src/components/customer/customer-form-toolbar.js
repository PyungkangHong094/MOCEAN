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
import { postM, putM } from "src/data/repository/m";
import { postE, putE } from "src/data/repository/e";
import { postO, putO } from "src/data/repository/o";
import { postC, putC } from "src/data/repository/c";
import { useMContext } from "../form/m/context";
import { useOContext } from "../form/o/context";
import { useCContext } from "../form/c/context";
import { useEContext } from "../form/e/context";
import { addUser, updateUser } from "src/data/repository/users";
import { profileContext } from "../form/profile";

export const CustomerFormToolbar = ({ id, currentMenu }) => {
  const isNew = id === null || id === undefined;
  const router = useRouter();
  const { showAlertDialog, showConfirmDialog } = useDialog();

  const { profile } = useContext(profileContext);

  const { data: dataM } = useMContext();
  const { data: dataO } = useOContext();
  const { data: dataC } = useCContext();
  const { data: dataE } = useEContext();
  console.log("Toolbar M", dataM);
  console.log("ToolBar O", dataO);
  console.log("ToolBar C", dataC);
  console.log("ToolBar E", dataE);

  const { mutate: addUserData } = useMutation(addUser, {
    onSuccess: (data) => {
      showAlertDialog({ title: "Success", message: "Add user success", onConfirm: () => {
        console.log(data);
        //router.replace(`/customers/form?id=${}`)
      } });
    },
    onError: () => {
      showAlertDialog({ title: "Failed", message: "Add user failed" });
    },
  });
  const { mutate: updateUserData } = useMutation(updateUser, {
    onSuccess: () => {
      showAlertDialog({ title: "Success", message: "Add user success" });
    },
    onError: () => {
      showAlertDialog({ title: "Failed", message: "Add user failed" });
    },
  });

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

  const { mutate: postMData } = useMutation(postM, {
    onSuccess: onSaveSuccess,
    onError: onSaveFailed,
  });
  const { mutate: putMData } = useMutation(putM, {
    onSuccess: onSaveSuccess,
    onError: () => {
      postMData({id, dataM});
    }
  });
  const { mutate: postOData } = useMutation(postO, {
    onSuccess: onSaveSuccess,
    onError: onSaveFailed,
  });
  const { mutate: putOData } = useMutation(putO, {
    onSuccess: onSaveSuccess,
    onError: () => {
      postOData({id, dataO})
    },
  });
  const { mutate: postCData } = useMutation(postC, {
    onSuccess: onSaveSuccess,
    onError: onSaveFailed,
  });
  const { mutate: putCData } = useMutation(putC, {
    onSuccess: onSaveSuccess,
    onError: () => {
      postCData({ id, dataC})
    },
  });
  const { mutate: postEData } = useMutation(postE, {
    onSuccess: onSaveSuccess,
    onError: onSaveFailed,
  });
  const { mutate: putEData } = useMutation(putE, {
    onSuccess: onSaveSuccess,
    onError: () => {
      postEData({ id, dataE });
    },
  });

  const saveNewUser = () => {
    addUserData(profile);
  }

  const saveUser = ({ customerId, data }) => {
    updateUserData({ customerId, data });
  }

  const saveForm = useCallback(() => {
    saveUser({ customerId: id, data: profile });
    switch (currentMenu) {
      case 0:
        putMData({ id, dataM });
        // showAlertDialog({
        //   title: "Warning",
        //   message: "Only work for customer info. You should click 'Check' button for save data.",
        // });
        break;

      case 1:
        putOData({ id, dataO });
        break;
      case 2:
        putCData({ id, dataC });
        break;
      case 3:
        putEData({ id, dataE });
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
        <Button variant="contained" color="success" sx={{ width: 100, mx: 2 }} onClick={isNew ? saveNewUser : saveForm}>
          Save
        </Button>
      </Box>
    </Box>
  );
};
