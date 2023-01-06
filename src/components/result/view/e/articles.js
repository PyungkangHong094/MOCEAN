import { Box, Typography } from "@mui/material";
import Image from "next/image";
import ScoreText from "../../../score";

const Article = ({ title, children }) => {
  return (
    <Box sx={{ m: 2 }}>
      <Typography variant="h6" mb={2}>
        {title}
      </Typography>
      {children}
    </Box>
  );
};
//
export const EnergyLevel = ({ name = "Client", score = 0 }) => {
  return (
    <Article title={"Energy Level"}>
      <Typography mb={2}>
        Energy level  shows how much energy <b>{name}</b>  uses of their body. 
        The most ideal energy usage level is from 400 to 600. 
      </Typography>
      {score > 1 ? ( //excellent and good
        <Typography>
          <b>{name}</b> currently has a energy level usage value of <b>{score}</b> which is within the ideal range.
        </Typography>
      ) : score == 1 ? ( //fair
        <Typography>
          <b>{name}</b> currently has a energy level usage value of <b>{score}</b> which meaans that the activities of the body are not performing normally. 
          There needs to be an intervention to increase the flow of energy in the body.
        </Typography>
      ) : ( //poor
        <Typography>
          <b>{name}</b> currently has a energy level usage value of <b>{score}</b> which overexceeds the ideal level.
          There needs to be an intervention to let the body rest and regain balance.
        </Typography>
      )}
    </Article>
  );
};

export const YinYangBalance = ({ name = "Client", yin = 0, yang = 0 }) => {
  return (
    <Article title={"Yin-Yang Balance (SNS : PNS)"}>
      <Typography>
      Vitality refers to the use of energy spread to outside of the body by circulating the body&apos;s metabolism and blood qi with the energy released to the outside. 
      The ideal range is ​ [60-65]. Stability purifies the body and functions to absorb all energy into the cells to enhance the cells and muscles. 
      We create toxins the moment we are alive and move. Due to this, we need to activate stability energy to cleanse the body. The ideal range is between [35-40].
      </Typography>
      <Typography mt={2}>
        <b>SNS - Yang</b>
      </Typography>
      {yang == 3 ? (
        <Typography>
          The vitality value of <b>{name}</b> is stable.
        </Typography>
      ) : (
        <Typography>
          The vitality value of <b>{name}</b> is in a state at risk of losing the balance of yin and yang from the over excersion of energy 
          and the by product of carbon diozide and metabolic waste, poisoning the body. 
          There is a need to rest and take care of the body to help find harmony.
        </Typography>
      )}
      <Typography mt={2}>
        <b>PNS - Yin</b>
      </Typography>
      {yin == 3 ? (
        <Typography>
          The vitality balance of <b>{name}</b> is stable.
        </Typography>
      ) : (
        <Typography>
          The stability value of <b>{name}</b> is <b>{yin}</b> which is above or below the normal range. In this case, 
          the body is in a state where the cells draw excess energy stored within so that it could make up for the energy 
          required to purify and sanitize the toxins built inside the body.
          There needs to be an intervention to help the body to relax and regain balance.
        </Typography>
      )}
    </Article>
  );
};

export const BioDynamicField = ({
  name = "Client",
  detox = 0,
  life = 0,
  digestive = 0,
  immune = 0,
  purification = 0,
}) => {
  return (
    <Article title={"Bio-Dynamic Field"}>
      <Typography mt={2}>
        <b>Detox energy</b>
        <br />
        Funtion: Nutrient storage, Blood Volume Control, Emotion Control, Muscle Ligament Control, Detox Function, Vision
        <br />
        One point summary - Toxin, Stress, Drinking, Live/Gallbladder function increase/decline <br />
       Wood is the energy of detoxification. The liver has the function of detoxification as well as creating important proteins and accumulating nutrients in the body, 
       however, the highest to medium priority ability is the detoxification function.
      </Typography>
      {detox == 3 ? (
        <Typography>
          <b>{name}</b>&apos;s Wood element function is normal.
        </Typography>
      ) : true ? ( // 편차 값이 +인 경우
        <Typography>
          <b>{name}</b>&apos;s body has stored an excessive amount of toxins and it is over consuming detoxification energy 
          so the  value of the liver function is in a state of increase. <br />
          In this situation, no matter how small, it is easy to get irritated or get angry and because Ligaments and Muscles 
          can easily reach exhaustion the client has to be careful of musculoskeletal injury. 
          Also, because the liver function is decreasing, the client has to be aware of diseases related to the liver. 
        </Typography>
      ) : (
        <Typography>
          <b>{name}</b>&apos;s body has stored an excessive amount of toxins and is over consuming detoxification energy 
          so the value of the liver function is in a state of decrease. <br />
          In this case, no matter how small, it is easy to get irritated or get angry and because Ligaments and Muscles can easily reach exhaustion 
          the client has to be careful of musculoskeletal injury. Also, because the liver function is decreasing, the client has to be aware of diseases related to the liver. 
        </Typography>
      )}

      <Typography mt={2}>
        <b>Life energy</b>
        <br />
        Funtion: Mind, Consciousness, Leadership of Internal Organ Function, Power of Blood Circulation <br />
        One point summary - Overuse of Life Energy, Excessive Work or Overwork and Stress, Heart, Increase/Decrease in Small Intestine Function{" "}
        <br />
        Fire is the energy responsible for the Life function. 
        The fire element shows the force that becomes the key to life such as Blood Circulation, Circulation Organs etc.{" "}
      </Typography>
      {life == 3 ? (
        <Typography>
          <b>{name}</b>&apos;s Fire element function is normal.
        </Typography>
      ) : true ? ( // 편차 값이 +인 경우
        <Typography>
          Due to excessive stress, worry and concern. <b>{name}</b>&apos;s is over consuming internal life energy and the function is in an increasing state.  
          In this case, because the client could become vulnerable to cardiovascular diseases and circulatory system diseases, the client has to be especially careful. 
          Danger!! The Heart energy is in a state of trying to make the body react by any means so if 
          the fire energy is lower than one of Wood, Metal, Earth, Water there is a direct connection to heart/vascular diseases. 
        </Typography>
      ) : (
        <Typography>
          Due to excessive stress, worry and concern. <b>{name}</b>&apos;s is over consuming internal life energy and the function is in a decreasing state.  
          Danger!! The Heart energy is in a state of trying to make the body react by any means so if 
          the fire energy is lower than one of Wood, Metal, Earth, Water, there is a direct connection to heart/vascular diseases. 
        </Typography>
      )}

      <Typography mt={2}>
        <b>Digestive energy</b>
        <br />
        Funtion: Function of Absorption after Digestion, Body Temperature Maintenance <br />
        One point summary - Digestive Energy Imbalance, Increase/Decrease in Spleen, Stomach, Pancreas Function <br />
        Earth is the energy of the digestive function. 
        The stomach and pancreas digest and create insulin and glucose, digest important nutrients, and possess the function of absorption.
      </Typography>
      {digestive == 3 ? (
        <Typography>
          <b>{name}</b>&apos;s Earth element function is normal.
        </Typography>
      ) : true ? ( // 편차 값이 +인 경우
        <Typography>
          <b>{name}</b>&apos;s digestive function is currently in the state of increase. 
          Also, the body easily gets fatigued and it is also easy to fall into worry, concern, and negative thoughts about small things.   
        </Typography>
      ) : (
        <Typography>
          <b>{name}</b>&apos;s digestive function is currently in the state of decrease. 
          In such a case, the client is vulnerable to digestion problems and worry, concern, and easily getting stressed about small things.   
        </Typography>
      )}

      <Typography mt={2}>
        <b>Immune energy</b>
        <br />
        Funtion: Respiration, Excretion Function, Skin Respiration, Detoxification Function <br />
        One point summary - Immunity Energy Imbalance, Lung, Large Intestine, Smoking, Instant Food, Lung, Increase/Decrease in Large Intestine Function{" "}
        <br />
        Metal is the energy that controls immunity, lungs, and large intestine function.{" "}
      </Typography>
      {immune == 3 ? (
        <Typography>
          <b>{name}</b>&apos;s Metal element function is normal.
        </Typography>
      ) : true ? ( // 편차 값이 +인 경우
        <Typography>
          Through excessive stress and toxification, <b>{name}</b>&apos;s immunity is being overly consumed and immunity is increasing to a venereal level. 
          Also, the function of the bronchial tube and large intestine is in an excessively increased state. 
          In this case, because the client can be vulnerable to immune system diseases and circulatory system and large intestine diseases, 
          the client should be especially careful.
        </Typography>
      ) : (
        <Typography>
          Due to excessive stress and toxins, <b>{name}</b>&apos;s mmune system is overworking and therefore chronically deteriorated.
          The function of the bronchial system and large intestine is in a state of vulnerability. 
          In this case, the client easily becomes stressed with depressive emotions. 
          Also, because the client can become vulnerable to immune and circulatory diseases as well as large intestine diseases, the client should be especially careful. 
        </Typography>
      )}

      <Typography mt={2}>
        <b>Purification energy</b>
        <br />
        Funtion: Endocrine Reproductive Function, Fluid Metabolism function, Maintenance of Hearing
        <br />
        One point summary - Purification Energy Imbalance, Kidneys, Bladder, Increase/Decrease in Urinogenital Organ Function <br />
        The Water element is the energy responsible for purification and Kidney function.{" "}
      </Typography>
      {purification == 3 ? (
        <Typography>
          <b>{name}</b>&apos;s Water element function is normal.
        </Typography>
      ) : true ? ( // 편차 값이 +인 경우
        <Typography>
          Due to internal toxins and inflammation, <b>{name}</b>&apos;s purification and kidney function are in an excessively increased state. 
          In such a case, because the client can become vulnerable to decreasing blood circulation and lumbago and Edema due to the increase in kidney function, 
          the client should be especially careful.
        </Typography>
      ) : (
        <Typography>
          Due to the decrease in kidney function, <b>{name}</b>&apos;s purification is decreasing and in order to remove toxins, 
          Edema and lumbago inside the body, kidney function is being overconsumed and the purification function is decreasing. 
          In such a case, the client can easily get anxious and stress over small things. Also, because kidney function is decreasing, 
          the client can become vulnerable to kidney diseases so the client needs to be especially careful. 
        </Typography>
      )}
    </Article>
  );
};
