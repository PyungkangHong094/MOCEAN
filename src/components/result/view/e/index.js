import { Box, Divider } from "@mui/material";

import Image from "next/image";
import LoadingBar from "src/components/loading-bar";
import { useUserforE } from "src/data/repository/e";
import RatingContainer from "../../rating/rating-container";
import { Program } from "../../result-menu";
import { BioDynamicField, EnergyLevel, YinYangBalance } from "./articles";
import {
  getDetoxScore,
  getDigestiveEnergyScore,
  getDigestiveScore,
  getEnergyScore,
  getImmuneScore,
  getLifeScore,
  getPurificationScore,
  getSleepScore,
  getStressScore,
  getYangScore,
  getYinScore,
} from "./logic";

const ratingData = [
  {
    items: [
      { title: "Stress Score", score: 0 },
      { title: "Sleep Score", score: 0 },
      { title: "Digestive Score", score: 0 },
      { title: "Energy Level", score: 0 },
    ],
  },
  {
    category: "Yin-Yang Balance",
    items: [
      { title: "SNS-Yang", score: 0 },
      { title: "PNS-Yin", score: 0 },
    ],
  },
  {
    category: "Bio-Dynamic Field",
    items: [
      { title: "Detox energy", score: 0 },
      { title: "Life energy", score: 0 },
      { title: "Digestive energy", score: 0 },
      { title: "Immune energy", score: 0 },
      { title: "Purification energy", score: 0 },
    ],
  },
];

const initData = (data) => {
  if (!data) {
    return ratingData;
  }
  const {
    stress,
    sleep,
    digestion,
    energy,
    sns_yang,
    pns_yin,
    default: standard,
    detox_energy,
    life_energy,
    digestive_energy,
    immune_energy,
    purification_energy,
  } = data;
  ratingData[0].items[0].score = getStressScore(stress);
  ratingData[0].items[1].score = getSleepScore(sleep);
  ratingData[0].items[2].score = getDigestiveScore(digestion);
  ratingData[0].items[3].score = getEnergyScore(energy);
  ratingData[1].items[0].score = getYangScore(sns_yang);
  ratingData[1].items[1].score = getYinScore(pns_yin);
  ratingData[2].items[0].score = getDetoxScore(standard, detox_energy);
  ratingData[2].items[1].score = getLifeScore(standard, life_energy);
  ratingData[2].items[2].score = getDigestiveEnergyScore(standard, digestive_energy);
  ratingData[2].items[3].score = getImmuneScore(standard, immune_energy);
  ratingData[2].items[4].score = getPurificationScore(standard, purification_energy);
  return ratingData;
};

const ResultEView = ({ id }) => {
  const { isLoading, data } = useUserforE(id);

  if (isLoading) {
    return <LoadingBar />;
  }

  if (!data) {
    return <Box />;
  }
  const result = initData(data.emotion);
  console.log("E data", result);
  const { name: customerName } = data;

  return (
    <>
      <RatingContainer title={Program.E} data={result} />
      <Box>
        <EnergyLevel name={customerName} score={result[0].items[3].score} />
        <Divider variant="middle" sx={{ color: "black", borderBottom: 1.5 }} />
        <YinYangBalance
          name={customerName}
          yin={result[1].items[1].score}
          yang={result[1].items[0].score}
        />
        <Divider variant="middle" sx={{ color: "black", borderBottom: 1.5 }} />
        <BioDynamicField
          name={customerName}
          detox={result[2].items[0].score}
          life={result[2].items[1].score}
          digestive={result[2].items[2].score}
          immune={result[2].items[3].score}
          purification={result[2].items[4].score}
        />
      </Box>
    </>
  );
};

export default ResultEView;
