import { Box } from "@mui/material";

const { default: Image } = require("next/image");
const { useUserforM } = require("src/data/repository/users");
const { default: RatingContainer } = require("../rating/rating-container");
const { Program } = require("../result-menu");

const ResultCView = () => {
    // const data = useUserforM();

    return (<>
        <RatingContainer title={Program.C} />
        <Box>
        </Box>
    </>);
}

export default ResultCView;