import { Typography } from "@mui/material";
import { theme } from "src/theme";

const ScoreText = ({ score = 0 }) => {
    let color, text;
    switch (score) {
        case 0:
            color = theme.palette.score.poor
            text = 'Poor'
            break;
        case 1:
            color = theme.palette.score.fair
            text = 'Fair'
            break;
        case 2:
            color = theme.palette.score.good
            text = 'Good'
            break;
        case 3:
            color = theme.palette.score.excellent
            text = 'Excellent'
            break;
        default:
            color = theme.palette.score.poor
            text = 'Unknown'
            break;
    }
    return <Typography display={'inline'} color={color}><b>{text}</b></Typography>;
}

export default ScoreText;