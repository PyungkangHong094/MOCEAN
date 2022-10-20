import { Box } from "@mui/material";

import { Image } from "next/image";
import RatingContainer from "../../rating/rating-container";
import { Program } from "../../result-menu";

const ResultCView = () => {
    // const data = useUserforM();

    return (<>
        <RatingContainer title={Program.C} />
        <Box>
        </Box>
    </>);
}

export default ResultCView;