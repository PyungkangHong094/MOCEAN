import { Box, Divider, Typography } from "@mui/material";
import { theme } from "src/theme";

import Image from "next/image";
import RatingContainer from "../../rating/rating-container";
import { Program } from "../../result-menu";
import { useUserforM } from "src/data/repository/users";
import ScoreText from "./score";
import { HydrationArticle, InflammationArticle, MuscleArticle, PhaseArticle, TotalScoreArticle, VisceralArticle, } from "./articles";

const ResultOView = () => {
    const data = useUserforM();

    return (<>
        <RatingContainer title={Program.O} />
        <Box>
            <TotalScoreArticle />
            <Divider variant="middle" sx={{ color: 'black', borderBottom: 1.5 }} />
            <HydrationArticle />
            <Divider variant="middle" sx={{ color: 'black', borderBottom: 1.5 }} />
            <MuscleArticle />
            <Divider variant="middle" sx={{ color: 'black', borderBottom: 1.5 }} />
            <VisceralArticle />
            <Divider variant="middle" sx={{ color: 'black', borderBottom: 1.5 }} />
            <InflammationArticle />
            <Divider variant="middle" sx={{ color: 'black', borderBottom: 1.5 }} />
            <PhaseArticle />
            <Divider variant="middle" sx={{ color: 'black', borderBottom: 1.5 }} />
        </Box>
    </>);
}

export default ResultOView;