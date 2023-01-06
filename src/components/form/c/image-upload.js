import { Box, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import AddPhotoAlternateRoundedIcon from "@mui/icons-material/AddPhotoAlternateRounded";
// import { uploadFile } from 'react-s3';
// import S3 from 'react-aws-s3';

// const config = {
//   bucketName: 'circulatory-visceral-fat',
//   // region: 'us-east-1',
//   region: 'ewr1',
//   accessKeyId: 'CBMQIGT02ZONS4E1UUNP',
//   secretAccessKey: 'j7YVFt8coZSRxYBI7IlHO3S1X42ULWwKADDpD1wS',
//   s3Url: 'https://ewr1.vultrobjects.com/circulatory-visceral-fat'
// };

// const ReactS3Client = new S3(config);

const ImageUpload = ({ id, onInput }) => {
  const [image, setImage] = useState(undefined);

  useEffect(() => {
    console.log(image);
    // ReactS3Client.uploadFile(image, image?.name)
    //   .then(res => {
    //     console.log(res);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
  }, [image]);

  return (
    <>
      <input
        accept="image/*"
        style={{ display: "none" }}
        id={id}
        type="file"
        onChange={(e) => {
          // setImage(e.target.files[0]);
          setImage(URL.createObjectURL(e.target.files[0]));
          onInput(URL.createObjectURL(e.target.files[0]));
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
