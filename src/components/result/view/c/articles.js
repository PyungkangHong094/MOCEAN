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

export const BloodPressureArticle = ({ name = "Client", score = 0 }) => {
  return (
    <Article title={"Blood Pressure"}>
      <Typography>
        Good blood circulation is essential to a healthy body. <br />
        Therefore maintaining optimal blood pressure and circulation is crucial for the health. 
      </Typography>
      <Typography my={2}>
        <b>{name}</b>&apos;s blood pressure level is <ScoreText score={score} />
        {/*[low / optimal / high normal / hypertension]*/}
      </Typography>
      {score > 1 ? (
        <Typography>
          The causes of high blood pressure are blood that has become cloudy due to waste products,
          constriction of blood vessels due to excessive stress, and blood vessels with poor
          elasticity. <br />
          Lack of exercise is also a cause of high blood pressure. <br />
          Due to lack of exercise, the muscles surrounding the blood vessels deteriorate, and the
          heart has no choice but to increase the pressure to supply blood. <br />
          <br />
          If high blood pressure is left unattended and wastes are not removed from the blood
          vessels, it can cause a number of different complications, which can lead to serious
          problems such as arteriosclerosis, myocardial infraction, and stroke. <br />
          <br />
          Therefore, the key to the treatment of blood pressure is restoration of blood circulation
          and purification of blood.
        </Typography>
      ) : (
        <Typography>
          The causes of low blood pressure are due to loss of blood vessel elasticity, and muscle
          tightness. <br />
          <br />
          The most common symptoms of low blood pressure are dizziness or headache, and symptoms
          such as fatigue, constipation, visual disturbances, and nausea may also appear. <br />
          The key to the treatment of blood pressure is restoration of blood circulation,
          purification of blood, increase blood vessel elasticity, and release muscle tightness.
        </Typography>
      )}
    </Article>
  );
};

export const GlucoseArticle = ({ name = "Client", score = 0 }) => {
  return (
    <Article title={"Glucose (sugar level)"}>
      <Typography>
        Proper blood sugar management is directly related to obesity and weight gain as well as
        prevention of chronic diseases such as diabetes, so blood sugar management is important for
        health.
      </Typography>
      <Typography my={2}>
        <b>{name}</b>&apos;s glucose level is <ScoreText score={score} />
        {/* [low / good  / high / very high] */}
      </Typography>
      {score > 1 ? (
        <Typography>
          When blood sugar levels remain high, complications can develop throughout the body, not
          just in a specific area. <br />
          <br />
          High blood sugar level may caused by: <br />
          1. Lack of sleep <br />
          2. Fatty liver (fatty liver causes high liver levels, which can lead to increased glucose
          production, leading to high blood sugar level) 3. Excessive stress <br />
          4. Overeating in the evening <br />
          5. Lack of exercise <br />
          <br />
          The key to restore glucose level is to relieve stress, increase muscle mass through
          resistance training, avoid processed food and incorporate proper recovery period. <br />
        </Typography>
      ) : (
        <Typography>
          When blood-sugar level is low, symptoms such as fatigue and anxiety may arise.  <br />
          <br />
          To normalize blood sugar level, following guidelines is needed: <br />
          1. Eat more fiber - fibers help stalize blood sugar level <br />
          2. Eat light, eat often to sustain a consistent supply of absorbable sugar <br />
          3. Take 200 mcg of chromium (essential mineral) to help stablize blood sugar swing <br />
          4. Cut back on refined carb - avoid carbs that are quickly absorbed such has white sugar,
          flour <br />
          5. Reduce or eliminate alcoholic and caffeinated rink  <br />
        </Typography>
      )}
    </Article>
  );
};

export const CholesterolArticle = ({ name = "Client", score = 0 }) => {
  return (
    <Article title={"Cholesterol"}>
      <Typography>
        Cholesterol constitutes cells and cell membranes, serves as a raw material for steroid
        hormones and bile, and is a substance necessary for maintaining life. <br />
        However, excessive cholesterol is closely related to arteriosclerosis and is a cause of
        cardiovascular disease, so managing cholesterol levels is important for health.
      </Typography>
      <Typography my={2}>
        <b>{name}</b>&apos;s cholosterol level is <ScoreText score={score} />
        {/* [optimal / elevated / high]														 */}
      </Typography>
      {score > 1 ? (
        <Typography>
          The cause of high cholesterol is chronic inflammation due to decreased blood circulation.{" "}
          <br />
          Cholesterol is the main component that forms the cell wall, and the higher the cholesterol
          level, the more inflammation and wounds in the blood vessels and there are more places to
          repair.
          <br />
          Cholesterol level is also directly related to excessive stress. Cholesterol is the main
          source of stress hormones. <br />
          <br />
          Therefore, when we are under excessive stress, our body has to secrete more stress
          hormones, which increases the production of cholesterol. <br />
          In order to lower the cholesterol level, stress relief, blood circulation recovery, organ
          function recovery, and lowering inflammation are the key to treatment.
        </Typography>
      ) : null}
    </Article>
  );
};

export const RespiratoryArticle = ({ name = "Client", score = 0 }) => {
  return (
    <Article title={"Respiratory circulation"}>
      <Typography>
        Body oxygen level test (BOLT) is to measure the depth of breathing and consequent retention
        of CO2, resultant oxygenation and health. <br />
        <br />
        The ideal BOLT score for a healthy range is 40 seconds. <br />
        The lower score , the more breathlessness you will experience during exercise and it will
        impact on your overal physical and mental health. <br />
      </Typography>
      <Typography my={2}>
        Your BOLT score is <b>{score}</b>, which is considered as <ScoreText score={score} />
      </Typography>
      {score > 1 ? (
        <Typography>Your cardio-respiratory function is in great condition!</Typography>
      ) : (
        <Typography>
          Your breathing receptors are sensitive, and may experience a blocked nose, cough, wheeze,
          disrupted sleep, snotring, fatigue and excessive breathlessness during physical exercise.{" "}
          <br />
          You need to increase your oxygen tolerance level through proper exercise, nutrition, and
          recovery.
        </Typography>
      )}
    </Article>
  );
};

export const NitricArticle = ({ name = "Client", score = 0 }) => {
  return (
    <Article title={"Nitric Oxide Level"}>
      <Typography>
        Nitric oxide is vitally important for maintaining a healthy cardiovascular system. <br />
        Keeping good nitric oxide level is required through a healthy diet and targeted
        supplementation to promotees overall health energy and vitality
      </Typography>
      <Typography my={2}>
        <b>{name}</b>&apos;s current nitric oxide level is <ScoreText score={score} />
      </Typography>
    </Article>
  );
};

export const LiveBloodArticle = ({ name = "Client", score = 0 }) => {
  return (
    <Article title={"Live blood analysis"}>
      <Typography>
        Live blood analysis can help identify and treat your health problems. <br />
        Blood analysis is used to determine inflammation, oxidative stress, nutritional status,
        liver and immune health, giving an indication of overall health.
      </Typography>
      <Typography my={2}>
        <b>{name}</b> have <ScoreText score={score} /> Red Blood Cells.
      </Typography>
      {score <= 1 && (
        <Typography>
          The presence of <ScoreText score={score} /> restrics the blood circulation and decrease
          toxic waste products excretion. <br />
          To purify blood and resotre RBC, restoration of liver and kidney function is needed.
        </Typography>
      )}
      <Box sx={{ position: "relative", height: 200, mt: 2 }}>
        <Image
          src={
            "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
          }
          layout="fill"
          objectFit="contain"
        />
      </Box>
    </Article>
  );
};
