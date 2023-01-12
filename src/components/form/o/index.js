import { Box, CircularProgress, Typography } from "@mui/material";
import LoadingBar from "src/components/loading-bar";
import { useUserforO } from "src/data/repository/o";
import BodyFat from "./body-fat";
import CellIntegrity from "./cell-integrity";
import Cellular from "./cellular";
import Hydration from "./hydration";
import Inflammation from "./inflammation";
import Visceral from "./visceral";
import { useOContext } from "./context";
import { useEffect } from "react";

const FormOView = ({ id }) => {
  const { initData, setData } = useOContext();
  const { isLoading, data: apiResult } = useUserforO(id);

  useEffect(() => {
    if (apiResult) {
      initData(apiResult);
    }
    console.log('O Data: ' + apiResult);
  }, [apiResult]);

  if (isLoading) {
    return <LoadingBar />;
  }

  const onInput = (section, key) => (value) =>
    setData({
      section, 
      key,
      value,
    });

  return (
    <Box px={4} mb={4}>
      <Cellular 
        onWeightInput={onInput('cellular_health_score', 'weight')}
        onSMMInput={onInput('cellular_health_score', 'smm')}
        onBodyFatInput={onInput('cellular_health_score', 'body_fat')}
      />
      <Hydration 
        onGenderInput={onInput('hydration', 'gender')}
        onBodyWaterInput={onInput('hydration', 'total_body_water')}
        onWeightInput={onInput('hydration', 'weight')}
      />
      <BodyFat 
        onGenderInput={onInput('body_fat', 'gender')}
        onAgeInput={onInput('body_fat', 'age')}
        onBodyFatInput={onInput('body_fat', 'body_fat')}
      />
      <Visceral 
        onVisceralInput={onInput('visceral_fat', 'visceral_fat')}
        onVisceralDivideInput={onInput('visceral_fat', 'visceral_fat_divide_10')}
      />
      <Inflammation 
        onRightArmInput={onInput('inflammation_reference', 'right_arm')}
        onLeftArmInput={onInput('inflammation_reference', 'left_arm')}
        onRightLegInput={onInput('inflammation_reference', 'right_leg')}
        onLeftLegInput={onInput('inflammation_reference', 'left_leg')}
        onTrunkInput={onInput('inflammation_reference', 'trunk')}
        onInflammationInput={onInput('inflammation_reference', 'inflammation')}
      />
      <CellIntegrity 
        onGenderInput={onInput('cell_integrity', 'gender')}
        onAgeInput={onInput('cell_integrity', 'age')}
        onAngleInput={onInput('cell_integrity', 'whole_body_phase_angle')}
      />
    </Box>
  );
};

export default FormOView;
