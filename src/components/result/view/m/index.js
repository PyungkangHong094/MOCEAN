import { Box, Typography } from "@mui/material";

import Image from "next/image";
import RatingContainer from "../../rating/rating-container";
import { Program } from "../../result-menu";
import ArticleBox from "./articles";

const ResultMView = () => {
  // const data = useUserforM();

  return (
    <>
      <RatingContainer title={Program.M} />
      <Box sx={{ mx: 4, flex: 1 }}>
        <Typography variant="h5">Posture Report</Typography>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Image src={"/static/images/body1.png"} width={500} height={500} objectFit="contain" />
        </Box>
        <ArticleBox />
      </Box>
    </>
  );
};

export default ResultMView;
