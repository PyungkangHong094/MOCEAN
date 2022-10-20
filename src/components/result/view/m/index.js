import { Box, Typography } from "@mui/material";

import Image from "next/image";
import RatingContainer from "../../rating/rating-container";
import { Program } from "../../result-menu";

const ResultMView = () => {
    // const data = useUserforM();

    return (<>
        <RatingContainer title={Program.M} />
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Image src={"/static/images/body1.png"} width={500} height={500} objectFit="contain" />
            <Typography>
                Hi
            </Typography>
        </Box>
    </>);
}

export default ResultMView;