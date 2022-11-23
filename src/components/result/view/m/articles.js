import { Box, Divider, Typography } from "@mui/material"
import ScoreText from "../../../score"

const ArticleBox = ({ name = 'Client', score = 1 }) => {
    let resultMessage;
    switch (score) {
        case 0:
            resultMessage = <PoorMessage name={name} />
            break;
        case 1:
            resultMessage = <FairMessage name={name} />
            break;
        case 2:
            resultMessage = <GoodMessage name={name} />
            break;
        case 3:
            resultMessage = <ExcellentMessage name={name} />
            break;
    }

    return <Box sx={{ p: 3, border: 1.5, borderColor: 'grey', borderRadius: 3, }}>
        <Typography>
            The musculoskeletal function is directly related to our living environment and pattern.<br />
            <br />
            Poor posture and bad habits in everyday life result in postural imbalance and structural deformation, which affect the musculoskeletal function.<br />
            Decreased musculoskeletal function affects the health of other organs and systems.<br />
            <br />
            Problems with posture, mobility & balance, and power function increase the possibility of structural deformation of the body, adversely affecting chronic inflammation, pain, sleep disorders, breathing disorders, digestive disorders, and mental health problems.<br />
            <br />
            Therefore, it is very important to manage musculoskeletal conditions in order to maintain a healthy life.
        </Typography>
        <Divider sx={{ color: 'grey', borderBottom: 1, my: 4, }} />
        {resultMessage}
    </Box>
}

const PoorMessage = ({ name }) => <Typography>
    The musculoskeletal functional state of <b>{name}</b> is <ScoreText score={0} />, which can cause problems such as chronic pain, sleep disorders, and digestive disorders.<br />
    <br />
    In order to improve the musculoskeletal function, it is necessary to recover <b>[List the list of fair or dangerous in the current state]</b>.
</Typography>

const FairMessage = ({ name }) => <Typography>
    The musculoskeletal function of the <b>{name}</b> is <ScoreText score={1} />, and maintaining this posture risks causing pain and structural deformation and exacerbating functional problems.<br />
    <br />
    In order to improve the musculoskeletal function, it is necessary to recover <b>[현재 상태에서 fair 또는 poor 인 것들의 리스트 나열]</b>.
</Typography>

const GoodMessage = ({ name }) => <Typography>
    The musculoskeletal function of the <b>{name}</b> is <ScoreText score={2} />.<br />
    <br />
    Improving <b>[현재 상태에서 fair 또는 poor 인 것들의 리스트 나열]</b> can enhance your musculoskeletal function and overall health!
</Typography>

const ExcellentMessage = ({ name }) => <Typography>
    The musuloskeletal functional status of <b>{name}</b> is <ScoreText score={3} />. Let's keep this condition and stay healthy!
</Typography>


export default ArticleBox;