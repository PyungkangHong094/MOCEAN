import { Box, Divider } from "@mui/material";

import Image from "next/image";
import RatingContainer from "../../rating/rating-container";
import { Program } from "../../result-menu";
import { BioDynamicField, EnergyLevel, YinYangBalance } from "./articles";

const ratingData = [
  {
    items: [
      { title: "Stress Score", score: 2 },
      { title: "Sleep Score", score: 1 },
      { title: "Digestive Score", score: 1 },
      { title: "Energy Level", score: 1 },
    ],
  },
  {
    category: "Yin-Yang Balance",
    items: [
      { title: "SNS-Yang", score: 4 },
      { title: "PNS-Yin", score: 2 },
    ],
  },
  {
    category: "Bio-Dynamic Field",
    items: [
      { title: "Detox energy", score: 3 },
      { title: "Life energy", score: 3 },
      { title: "Digestive energy", score: 1 },
      { title: "Immune energy", score: 2 },
      { title: "Purification energy", score: 3 },
    ],
  },
];

const ResultEView = () => {
  // const data = useUserforM();

  return (
    <>
      <RatingContainer title={Program.E} data={ratingData} />
      <Box>
        <EnergyLevel />
        <Divider variant="middle" sx={{ color: "black", borderBottom: 1.5 }} />
        <YinYangBalance />
        <Divider variant="middle" sx={{ color: "black", borderBottom: 1.5 }} />
        <BioDynamicField />
      </Box>
    </>
  );
};

export default ResultEView;
