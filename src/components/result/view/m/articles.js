import { Box, Divider, Typography } from "@mui/material";
import ScoreText from "../../../score";

const ArticleBox = ({ name = "Client", score = 0, data = [] }) => {
  let list = [];
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].items.length; j++) {
      if (data[i].items[j].score < 2) {
        list.push(data[i].items[j].title);
      }
    }
  }

  let resultMessage;
  switch (score) {
    case 0:
      resultMessage = <PoorMessage name={name} list={list} />;
      break;
    case 1:
      resultMessage = <FairMessage name={name} list={list} />;
      break;
    case 2:
      resultMessage = <GoodMessage name={name} list={list} />;
      break;
    case 3:
      resultMessage = <ExcellentMessage name={name} list={list} />;
      break;
  }

  return (
    <Box sx={{ p: 3, border: 1.5, borderColor: "grey", borderRadius: 3 }}>
      <Typography>
        The musculoskeletal function is directly related to our living environment and pattern.
        <br />
        <br />
        Poor posture and bad habits in everyday life result in postural imbalance and structural
        deformation, which affect the musculoskeletal function.
        <br />
        Decreased musculoskeletal function affects the health of other organs and systems.
        <br />
        <br />
        Problems with posture, mobility & balance, and power function increase the possibility of
        structural deformation of the body, adversely affecting chronic inflammation, pain, sleep
        disorders, breathing disorders, digestive disorders, and mental health problems.
        <br />
        <br />
        Therefore, it is very important to manage musculoskeletal conditions in order to maintain a
        healthy life.
      </Typography>
      <Divider sx={{ color: "grey", borderBottom: 1, my: 4 }} />
      {resultMessage}
    </Box>
  );
};

const PoorMessage = ({ name, list }) => (
  <Typography>
    The musculoskeletal functional state of <b>{name}</b> is <ScoreText score={0} />, which can
    cause problems such as chronic pain, sleep disorders, and digestive disorders.
    <br />
    <br />
    In order to improve the musculoskeletal function, it is necessary to recover{" "}
    {list.map(item => <b key={item}>{item}, </b>)}.
  </Typography>
);

const FairMessage = ({ name, list }) => (
  <Typography>
    The musculoskeletal function of the <b>{name}</b> is <ScoreText score={1} />, and maintaining
    this posture risks causing pain and structural deformation and exacerbating functional problems.
    <br />
    <br />
    In order to improve the musculoskeletal function, it is necessary to recover{" "}
    {list.map(item => <b key={item}>{item}, </b>)}.
  </Typography>
);

const GoodMessage = ({ name, list }) => (
  <Typography>
    The musculoskeletal function of the <b>{name}</b> is <ScoreText score={2} />.<br />
    <br />
    Improving {list.map(item => <b key={item}>{item}, </b>)} can enhance your
    musculoskeletal function and overall health!
  </Typography>
);

const ExcellentMessage = ({ name, list }) => (
  <Typography>
    The musuloskeletal functional status of <b>{name}</b> is <ScoreText score={3} />. Let&apos;s
    keep this condition and stay healthy!
  </Typography>
);

export default ArticleBox;
