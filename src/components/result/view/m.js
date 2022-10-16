import { Box, Typography } from "@mui/material";

const { default: Image } = require("next/image");
const { useUserforM } = require("src/data/repository/users");
const { default: RatingContainer } = require("../rating/rating-container");
const { Program } = require("../result-menu");

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