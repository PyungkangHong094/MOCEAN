import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import AddPhotoAlternateRoundedIcon from "@mui/icons-material/AddPhotoAlternateRounded";

const ImageUpload = ({ id }) => {
  const [image, setImage] = useState(undefined);

  return (
    <>
      <input
        accept="image/*"
        style={{ display: "none" }}
        id={id}
        type="file"
        onChange={(e) => {
          setImage(URL.createObjectURL(e.target.files[0]));
        }}
      />
      <label htmlFor={id}>
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
            <img style={{ width: "100%", objectFit: "cover" }} src={image} />
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
