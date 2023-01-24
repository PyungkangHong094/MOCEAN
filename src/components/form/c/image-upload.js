import { Box, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import AddPhotoAlternateRoundedIcon from "@mui/icons-material/AddPhotoAlternateRounded";
import { useDialog } from "src/components/dialogs/context";
import { useMutation } from "react-query";
import { postImage } from 'src/data/repository/c';

const ImageUpload = ({ type, image, onInput }) => {
  const router = useRouter();
  const { showAlertDialog } = useDialog();
  const { id } = router.query;

  const onSaveSuccess = () => {
    // showAlertDialog({ title: "Success", message: "Image uploaded" });
  };
  const onSaveFailed = () => {
    // showAlertDialog({ title: "Failed", message: "Image upload failed" });
  };

  const { mutate: uploadImage } = useMutation(postImage, {
    onSuccess: (data) => {
      onInput(data);
      onSaveSuccess();
    },
    onError: (error) => {
      console.log(error);
      onSaveFailed();
    }
  });

  return (
    <>
      <input
        accept="image/*"
        style={{ display: "none" }}
        id={type}
        type="file"
        onChange={(e) => uploadImage({
          id: id,
          imageType: type,
          file: e.target.files[0]
        })}
      />
      <label htmlFor={type}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            my: 2,
            p: 4,
            mx: "auto",
            maxWidth: 600,
            borderRadius: 4,
            backgroundColor: "lightgrey",
            ":hover": {
              backgroundColor: "grey",
            },
          }}
        >
          {image ? (
            <img style={{ width: "100%", objectFit: "cover" }} src={`https://${image}`} />
          ) : (
            <AddPhotoAlternateRoundedIcon fontSize="large" />
          )}

          <Typography variant="h5" mt={2}>
            Upload Image
          </Typography>
        </Box>
      </label>
    </>
  );
};

export default ImageUpload;
