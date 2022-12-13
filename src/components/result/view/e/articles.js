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

export const EnergyLevel = ({ name = "Client", score = 0 }) => {
  return (
    <Article title={"Energy Level"}>
      <Typography mb={2}>
        Energy level 은 <b>{name}</b> 얼마나 몸의 에너지를 사용하고 있는지 보여줍니다. 가장 이상적인
        에너지 사용값은 400~600 사이입니다.
      </Typography>
      {score > 1 ? (
        <Typography>
          <b>{name}</b> 은 현재 에너지 사용값이 [energy level 값] 로 이상적인 몸의 에너지 사용을
          하고 있는 상태입니다.
        </Typography>
      ) : score == 1 ? (
        <Typography>
          <b>{name}</b> 은 현재 에너지 사용값이 [energy level 값] 로 에너지의 활동이 정상적으로
          이루어지고 있지 않다는 신호입니다. 몸의 에너지위 순환을 올려주는 관리가 필요합니다.
        </Typography>
      ) : (
        <Typography>
          <b>{name}</b> 은 현재 에너지 사용값이 [energy level 값] 로 에너지를 지나치게 과소비 하고
          있습니다. 몸을 쉬며 균형을 잡을수 있도록 관리가 필요합니다.
        </Typography>
      )}
    </Article>
  );
};

export const YinYangBalance = ({ name = "Client", score = 0 }) => {
  return (
    <Article title={"Yin-Yang Balance (SNS : PNS)"}>
      <Typography>
        활력도란 에너지가 바깥으로, 방출하는 에너지로 몸의 신진대사와 혈기를 순환시켜 몸 밖으로
        기운을 사용하는 것입니다. 이상적인 값은 [60-65] 입니다. 안정도는 몸 안을 정화하고 해독하기
        위해 모든 에너지를 세포내부로 수렴하고 세포/근육의 이완을 시켜주는 작용을 합니다. 우리는
        살아서 움직이고 활동을 하는 매순간 많은 독소를 만들어냅니다. 그 상태에서 정화를 위하여
        안정도 에너지 작용은 매우 중요합니다. 이상적인 값은 [35-40] 입니다.
      </Typography>
      <Typography mt={2}>
        <b>SNS - Yang</b>
      </Typography>
      {score == 3 ? (
        <Typography>
          <b>{name}</b> 의 활력도 벨런스는 안정적입니다.
        </Typography>
      ) : (
        <Typography>
          <b>{name}</b>의 활력도의 값이 [입력값]으로 과하게 에너지 밖으로 사용하여 내부에 활성산소와
          신진대사 노폐물을 과도하게 만들어 내는 상태로 몸이 독소화 되어 음양의 조화와 균형이 깨지기
          쉬운 상태일 가능성이 있습니다. 몸을 쉬며 균형을 잡을 수 있도록 관리가 필요합니다.
        </Typography>
      )}
      <Typography mt={2}>
        <b>PNS - Yin</b>
      </Typography>
      {score == 3 ? (
        <Typography>
          <b>{name}</b> 의 활력도 벨런스는 안정적입니다
        </Typography>
      ) : (
        <Typography>
          <b>{name}</b>의 안정도읙 값은[입력값]으로 정상이상으로 높거나 낮은 상태입니다. 이런경우
          세포 스트레스로 인해 몸이 몸안을 정화하고 해독하기 위해 에너지를 세포 내부로 수렴하고 있는
          상태입니다. 몸을 쉬며 균형을 잡을 수 있도록 관리가 필요합니다.
        </Typography>
      )}
    </Article>
  );
};

export const BioDynamicField = ({ name = "Client", score = 0 }) => {
  return (
    <Article title={"Bio-Dynamic Field"}>
      <Typography mt={2}>
        <b>Detox energy</b>
        <br />
        Funtion: 영양분 저장, 혈액량 조절, 감정 조절, 근육 인대 조절, 해독 작용, 시력
        <br />
        One point summary - 독소, 스트레스, 음주간/담낭 기능 항진/저하 <br />
        wood 는 해독 기능의 에너지 입니다. 간은 몸에서 해독 기능과, 중요한 단백질을 생성, 및
        영양소를 축적하는 기능을 가지고 있는데 그중 가장 중요한 능력이 해독 능력입니다.
      </Typography>
      {score == 3 ? (
        <Typography>
          <b>{name}</b>님의 wood element 기능은 정상입니다.
        </Typography>
      ) : true ? ( // 편차 값이 +인 경우
        <Typography>
          <b>{name}</b> 의 몸속에 독소들이 과도하게 많이 싸여 있는 상태로, 해독 에너지를 과도하게
          소모하여 간 기능의 수치가 항진되어 있는 상태입니다. <br />
          이러한 경우, 사소한 일에도 쉽게 짜증이 나거나 화가 나기 쉽고, 인대나 근육들이 쉽게
          피로해지므로 근골격계 injury 를 조심해야 합니다. 또한 간기능이 저하 되어있으므로, 간과
          관련된 질환들을 주의해야 합니다
        </Typography>
      ) : (
        <Typography>
          <b>{name}</b> 의 몸속에 독소들이 과도하게 많이 싸여 있는 상태로, 해독 에너지를 과도하게
          소모하여 간 기능의 수치가 저하되어 있는 상태입니다.
          <br />
          이러한 경우, 사소한 일에도 쉽게 짜증이 나거나 화가 나기 쉽고, 인대나 근육들이 쉽게
          피로해지므로 근골격계 injury 를 조심해야 합니다. 또한 간기능이 저하 되어있으므로, 간과
          관련된 질환들을 주의해야 합니다
        </Typography>
      )}

      <Typography mt={2}>
        <b>Life energy</b>
        <br />
        Funtion: 정신, 의식, 오장육부의 기능을 주도, 혈액순환의 동력 <br />
        One point summary - 생명에너지 과사용, 지나친 업무나 과로와 스트레스 심장, 소장 기능 항진{" "}
        <br />
        Fire 는 생명 기능을 담당하는 에너지 입니다. Fire element 는 혈액순환, 순환기 등, 살아가는데
        핵심이 되는 기운을 보여줍니다.{" "}
      </Typography>
      {score == 3 ? (
        <Typography>
          <b>{name}</b>님의 fire element 기능은 정상입니다.
        </Typography>
      ) : true ? ( // 편차 값이 +인 경우
        <Typography>
          <b>{name}</b> 은 과도한 스트레스, 근심, 걱정으로 인해 몸속 생명 에너지가 과도하게 소모하여
          기능이 항진되어 있는 상태입니다. 이러한 경우 심혈관질환,순환기질환에 취약해질 수 있으므로
          특별히 주의해야합니다. 위험!! 심장의 에너지가 어떻게서든우리 몸을 반응하게 하려고
          하는상태이며 화 에너지가 목금토수중 하나보다 더 낮다면 심장/혈관 질환과 직접 연관이
          있습니다.
        </Typography>
      ) : (
        <Typography>
          <b>{name}</b> 은 과도한 스트레스, 근심, 걱정으로 인해 몸속 생명 에너지가 과도하게 소모하여
          기능이 저하되어 있는 상태입니다. 위험!! 심장의 에너지가 어떻게서든우리 몸을 반응하게
          하려고 하는상태이며 화 에너지가 목금토수중 하나보다 더 낮다면 심장/혈관 질환과 직접 연관이
          있습니다.
        </Typography>
      )}

      <Typography mt={2}>
        <b>Digestive energy</b>
        <br />
        Funtion: 소화 흡수 기능, 체온 관리 <br />
        One point summary - 소화에너지 imbalance, 비장, 위장, 췌장 기능 항진 <br />
        Earth는 소화 기능 에너지 입니다. 위와 췌장은 소화 및 인슐린, 포도당을 생성해 필요한 영양소를
        소화 시키고 흡수 시키는 기능을 가지고 있습니다.
      </Typography>
      {score == 3 ? (
        <Typography>
          <b>{name}</b>님의 Earth element 기능은 정상입니다.
        </Typography>
      ) : true ? ( // 편차 값이 +인 경우
        <Typography>
          <b>{name}</b> 는 현재 소화기능이 저하되어 있는 상태입니다. 이러한 경우 사소한일에도 근심,
          걱정, 스트레스를 쉽게 받고 소화기 문제에 취약합니다.
        </Typography>
      ) : (
        <Typography>
          <b>{name}</b> 은 과도한 스트레스, 근심, 걱정으로 인해 몸속 생명 에너지가 과도하게 소모하여
          기능이 저하되어 있는 상태입니다. 위험!! 심장의 에너지가 어떻게서든우리 몸을 반응하게
          하려고 하는상태이며 화 에너지가 목금토수중 하나보다 더 낮다면 심장/혈관 질환과 직접 연관이
          있습니다.
        </Typography>
      )}

      <Typography mt={2}>
        <b>Immune energy</b>
        <br />
        Funtion: 호흡, 배설 기능, 피부호흡, 해독 작용 <br />
        One point summary - 면역 에너지 imbalance, 폐, 대장, 흡연, 인스턴트 식품, 폐, 대장 이능 항진{" "}
        <br />
        Metal 은 면역 기능과 폐, 대장의 기능을 조절하는 에너지 입니다.{" "}
      </Typography>
      {score == 3 ? (
        <Typography>
          <b>{name}</b>님의 Metal element 기능은 정상입니다.
        </Typography>
      ) : true ? ( // 편차 값이 +인 경우
        <Typography>
          <b>{name}</b> 는 과도한 스트레스, 독소로 인해 면역 기능이 과도하게 소모되어 면역 기능이
          금성적으로 항진되어 있는 상태 입니다. 또한, 기관지와 대장의 기능이 과도하게 항진되어 있는
          상태 입니다. 이런경우 면역계 질환및 순환기 질환과 대장 질환에 취약해질 수 있으므로 각별히
          주의해야합니다.
        </Typography>
      ) : (
        <Typography>
          <b>{name}</b> 는 과도한 스트레스, 독소로 인해 면역 기능이 과도하게 소모되어 면역 기능이
          만성적으로 저하되어 있는 상태 입니다. 또한, 기관지와 대장의 기능이 약화 되어있는 상태
          입니다. 이런경우 사소한 일에도 슬품, 우울한 감정으로 스트레스를 쉽게 받습니다.또한 면역계
          질환및 순환기 질환과 대장 질환에 취약해질 수 있으므로 각별히 주의해야합니다.
        </Typography>
      )}

      <Typography mt={2}>
        <b>Purification energy</b>
        <br />
        Funtion: 내분비 생식기능, 비뇨 수액 대사기능, 청력 유지
        <br />
        One point summary - 정화에너지 imbalance, 콩팥, 방광, 비뇨 생식기 기능 항진 <br />
        Water element 는 정화 기능과 신장의 기능을 담당하는 에너지 입니다.{" "}
      </Typography>
      {score == 3 ? (
        <Typography>
          <b>{name}</b>님의 Water element 기능은 정상입니다.
        </Typography>
      ) : true ? ( // 편차 값이 +인 경우
        <Typography>
          <b>{name}</b> 는 몸안에 독소와 염증으로 인해 정화 기능과 신장의 기능이 과도하게 항진
          되어있는 상태입니다. 이런경우 신장의 기능 항진으로 혈액순환 저하와, 요통, 부종에 취약해
          질수 있으므로 각별히 주의해야합니다.
        </Typography>
      ) : (
        <Typography>
          <b>{name}</b> 는 신장의 기능 저하로 해독 능력이 저하되어 몸안에 독소, 부종과 염증을
          제거하기 위해 신장의기능이 과도하게 소모되어 정화 기능이 저하되어있는 상태입니다.이런경우
          사소한 일에도 불안감과 스트레스를 쉽게 받습니다. 또한 신장의 기능이 저하 되어있기 때문에
          신장 질환에 취약해질 수 있으므로 각별히 주의해야합니다.
        </Typography>
      )}
    </Article>
  );
};
