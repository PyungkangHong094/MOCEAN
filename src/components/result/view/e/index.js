import { Box } from "@mui/material";

import Image from "next/image";
import RatingContainer from "../../rating/rating-container";
import { Program } from "../../result-menu";

const ResultEView = () => {
    // const data = useUserforM();

    return (<>
        <RatingContainer title={Program.E} />
        <Box>
        </Box>
    </>);
}

export default ResultEView;