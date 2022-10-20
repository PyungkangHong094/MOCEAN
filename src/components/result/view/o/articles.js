import { Box, Typography } from "@mui/material"
import ScoreText from "./score"

const Article = ({ title, children }) => {
    return <Box sx={{ m: 2 }}>
        <Typography variant="h6" mb={2}>
            {title}
        </Typography>
        {children}
    </Box>
}

export const TotalScoreArticle = ({ name = 'Client', score = 0 }) => {
    return <Article title={'Total Evaluation'}>
        <Typography mb={1.5}>
            <b>{name}</b>'s overall cellular health condition is <ScoreText score={score} />
        </Typography>
        <Typography>
            It is recommened to do more exercise and diet control
        </Typography>
    </Article>
}

export const HydrationArticle = ({ score = 0 }) => {
    const helpMessage = () => {
        switch (score) {
            case 0:
            case 1:
                return 'For optimal health, you should drink at least 6-8 glasses, which is rougly 45 oz water daily.'
            case 2:
                return 'You are almost there! Keep hydration level up!'
            case 3:
                return 'You are well-hydrated! Keep up this hydration level!'
            default:
                return 'Unknown'
        }
    }
    return <Article title={'Hydration'}>
        <Typography>
            Hydration is key for the optimal health! Dehydration may cause muscles and organs to lose their ability to perform optimally.<br />
            When body become dehydrated, muscle lose their ability to perform optimally, causing a decrease in performance, and posture Dehydration may also impact mental ability to operate at their best.
        </Typography>
        <Typography>
            <br />For the optimal health, hydration level should be 63%
            <br /><br />
        </Typography>
        <Typography>
            <b>Client</b>'s hydration level is <ScoreText score={score} />
        </Typography>
        <Typography>
            {helpMessage}
        </Typography>
    </Article>
}

export const MuscleArticle = ({ leanFat = 0, leanBodyFat = 0, bodyFat = 0 }) => {
    // const helpMessage = ({ score = 0 }) => {
    //     switch (score) {
    //         case 0:
    //         case 1:
    //             return 'For optimal health, you should drink at least 6-8 glasses, which is rougly 45 oz water daily.'
    //         case 2:
    //             return 'You are almost there! Keep hydration level up!'
    //         case 3:
    //             return 'You are well-hydrated! Keep up this hydration level!'
    //         default:
    //             return 'Unknown'
    //     }
    // }
    return <Article title={'Muscle & Fat mass'}>
        <Typography>
            Body composition is an important metrics to measures overall health and fitness level.<br />
            For optimal health, it's important to build lean muscle and lowers body fat.<br />
            Keeping body fat will enhance bone density, digestive and circulatory function and  immune system
        </Typography>
        <Typography>
            <br />Your body fat % is <b>{bodyFat}%</b>. This is consdiered as <ScoreText score={bodyFat} />
            <br /><br />
        </Typography>
        <Typography>
            To be in the optimal healthy state, you should <b>GAIN Lean Body Mass</b> and <b>LOSE Lean Fat Mass</b>
        </Typography>
    </Article>
}

export const VisceralArticle = ({ name = 'Client', fat = 0, score = 0 }) => {
    // const helpMessage = ({ score = 0 }) => {
    //     switch (score) {
    //         case 0:
    //         case 1:
    //             return 'For optimal health, you should drink at least 6-8 glasses, which is rougly 45 oz water daily.'
    //         case 2:
    //             return 'You are almost there! Keep hydration level up!'
    //         case 3:
    //             return 'You are well-hydrated! Keep up this hydration level!'
    //         default:
    //             return 'Unknown'
    //     }
    // }
    return <Article title={'Visceral Fat'}>
        <Typography>
            <b>Visceral fat</b> is internal fat that develops in the abdominal cavity, gets stored and wraps around organs.<br />
            High levels of visceral fat may leads to many advese effect on physical and mental health.<br />
            Keeping body fat will enhance bone density, digestive and circulatory function and  immune system
        </Typography>
        <Typography>
            Therefore keeping optimal visceral fat balance is key for the optimal health!
        </Typography>
        <Typography my={2}>
            <b>{name}</b>'s current visceral fat level is <b>{fat}</b>. This is considered as <ScoreText score={score} />
        </Typography>
        {score == 0 || score == 1 ? <Typography>Engage in more cardiovascular exercise is recommended to lower visceral fat and to improve overall health. </Typography> : null}
    </Article>
}

export const InflammationArticle = ({ name = 'Client', ecw = 0, twb = 1 }) => {
    // const helpMessage = ({ score = 0 }) => {
    //     switch (score) {
    //         case 0:
    //         case 1:
    //             return 'For optimal health, you should drink at least 6-8 glasses, which is rougly 45 oz water daily.'
    //         case 2:
    //             return 'You are almost there! Keep hydration level up!'
    //         case 3:
    //             return 'You are well-hydrated! Keep up this hydration level!'
    //         default:
    //             return 'Unknown'
    //     }
    // }
    return <Article title={'Inflammation Level'}>
        <Typography>
            Ratio of Extracellular Water (ECW) to Total Body Water (TWB) is an important indicator of inflammation balance.<br />
        </Typography>
        <Typography my={2}>
            {name}'s ECW/TBW ratio is <b>{ecw / twb}</b>, which is indicative of <ScoreText score={ecw / twb} /> level
        </Typography>
        <Typography>
            You have a difference in upper & lower body ECW/TBW ratio, which indicates there is a circulation issue.
        </Typography>
    </Article>
}

export const PhaseArticle = ({ value = 0 }) => {
    // const helpMessage = ({ score = 0 }) => {
    //     switch (score) {
    //         case 0:
    //         case 1:
    //             return 'For optimal health, you should drink at least 6-8 glasses, which is rougly 45 oz water daily.'
    //         case 2:
    //             return 'You are almost there! Keep hydration level up!'
    //         case 3:
    //             return 'You are well-hydrated! Keep up this hydration level!'
    //         default:
    //             return 'Unknown'
    //     }
    // }
    return <Article title={'Phase Angle'}>
        <Typography>
            Phase Angle is a indicator of cellular health.<br />
            The higher the Phase angle, reflect a invididuals with healthy cell memberane.<br />
            Those who are nutritionally deficient, high stressed state or carry high inflammation exhibits low Phase Angles.
        </Typography>
        <Typography>
            Your phase angle is {value} which is considered as <ScoreText score={value} />
        </Typography>
    </Article>
}

