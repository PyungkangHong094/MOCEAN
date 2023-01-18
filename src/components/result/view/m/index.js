import { Box, Typography } from "@mui/material";

import Image from "next/image";
import LoadingBar from "src/components/loading-bar";
import { useUserforM } from "src/data/repository/m";
import RatingContainer from "../../rating/rating-container";
import { Program } from "../../result-menu";
import ArticleBox from "./articles";
import {
  getPostureScore,
  getCervicalScore,
  getSpineScore,
  getUpperExtremityScore,
  getLowerExtremityScore,
  getMovementScore,
  getCardioRespiratoryScore,
  getMusculoskeletalScore
} from './logic';

const ratingData = [
  { category: "Posture", items: [{ title: "Posture", score: 0 }] },
  {
    category: "Mobility & Balance",
    items: [
      { title: "Spine_Cervical", score: 0 },
      { title: "Spine_Thoraco-lumbar", score: 0 },
    ],
  },
  {
    category: "Upper Extremity",
    items: [
      { title: "Left", score: 0 },
      { title: "Right", score: 0 },
    ],
  },
  {
    category: "Lower Extremity",
    items: [
      { title: "Left", score: 0 },
      { title: "Right", score: 0 },
    ],
  },
  { category: "Movement", items: [{ title: "Movement", score: 0 }] },
  { category: "Cardio-respiratory strength", items: [{ title: "VO2 Max", score: 0 }] },

  {
    category: "Musculo skeletal strength",
    items: [
      { title: "Push-up Test", score: 0 },
      { title: "Squat Test", score: 0 },
      { title: "Plank Test", score: 0 },
    ],
  },
];

const initData = (data) => {
  if (!data) {
    return ratingData;
  }
  const {
    posture,
    mobility_and_balance_cervical,
    mobility_and_balance_spine,
    mobility_and_balance_upper_extremity,
    mobility_and_balance_lower_extremity,
    movement,
    cardio_respiratory_strength,
    musculo_skeletal_health
  } = data;

  ratingData[0].items[0].score = getPostureScore(posture?.index);
  ratingData[1].items[0].score = getCervicalScore(mobility_and_balance_cervical?.patient_score);
  ratingData[1].items[1].score = getSpineScore(mobility_and_balance_spine?.patient_score);
  ratingData[2].items[0].score = getUpperExtremityScore(mobility_and_balance_upper_extremity?.patient_score_left);
  ratingData[2].items[1].score = getUpperExtremityScore(mobility_and_balance_upper_extremity?.patient_score_right);  
  ratingData[3].items[0].score = getLowerExtremityScore(mobility_and_balance_lower_extremity?.patient_score_left);
  ratingData[3].items[1].score = getLowerExtremityScore(mobility_and_balance_lower_extremity?.patient_score_right);
  ratingData[4].items[0].score = getMovementScore(movement?.patient_score);
  ratingData[5].items[0].score = getCardioRespiratoryScore(cardio_respiratory_strength?.score);
  ratingData[6].items[0].score = getMusculoskeletalScore(musculo_skeletal_health?.pushup_score);
  ratingData[6].items[1].score = getMusculoskeletalScore(musculo_skeletal_health?.squat_score);
  ratingData[6].items[2].score = getMusculoskeletalScore(musculo_skeletal_health?.plank_score);

  return ratingData;
}

const ResultMView = ({ id }) => {
  const { isLoading, data } = useUserforM(id);

  const { musculo_skeletal_health } = data;

  let imageId = null;
  if (musculo_skeletal_health?.upper_extremity_assessment === 'rdp') {
    if (musculo_skeletal_health?.lower_extremity_assessment === 'rdp') {
      imageId = 1;
    } else if (musculo_skeletal_health?.lower_extremity_assessment === 'bilateral') {
      imageId = 2;
    }
  } else if (musculo_skeletal_health?.upper_extremity_assessment === 'bilateral') {
    if (musculo_skeletal_health?.lower_extremity_assessment === 'rdp') {
      imageId = 3;
    } else if (musculo_skeletal_health?.lower_extremity_assessment === 'bilateral') {
      imageId = 4;
    }
  }

  if (isLoading) {
    return <LoadingBar />;
  }

  if (!data) {
    return <Box />;
  }

  const result = initData(data);
  console.log("M Data", data);
  console.log("M Result", result);

  return (
    <>
      <RatingContainer title={Program.M} data={result} />
      <Box sx={{ mx: 4, flex: 1 }}>
        <Typography variant="h5">Posture Report</Typography>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Image
            src={`/static/images/inputs/m/${imageId}.png`}
            width={500}
            height={500}
            objectFit="contain"
          />
        </Box>
        <ArticleBox 
          name={data.name}
          data={result}
          score={getMusculoskeletalScore(musculo_skeletal_health?.condition)} 
        />
      </Box>
    </>
  );
};

export default ResultMView;
