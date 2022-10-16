import { Box } from "@mui/material";

const { default: Image } = require("next/image");
const { useUserforM } = require("src/data/repository/users");
const { default: RatingContainer } = require("../rating/rating-container");
const { Program } = require("../result-menu");

const ResultOView = () => {
    // const data = useUserforM();

    return (<>
        <RatingContainer title={Program.O} />
        <Box>
        </Box>
    </>);
}

export default ResultOView;