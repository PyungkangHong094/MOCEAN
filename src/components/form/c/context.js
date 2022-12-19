import React, { useContext, useState } from "react";

const initData = {
  blood_circulation: 0,
  lymph_circulation: 0,
  toxicity_level: 0,
  visceral_fat_type: "poor",
  visceral_fat_url: "string",
  systolic_pressure: 0,
  diastolic_pressure: 0,
  oxygen_level: 0,
  pulse_rate: 0,
  blood_glucose: 0,
  blood_cholesterol: 0,
  respiratory_circulation: 0,
  nitric_oxide_level: "optimal",
  red_blood_cell_type: "excellent",
  red_blood_cell_url: "string",
};

const Ccontext = React.createContext({
  data: initData,
  initData: (data) => {},
  setData: ({ key, value }) => {},
});

export const useCContext = () => useContext(Ccontext);

export const CProvider = ({ children }) => {
  const [data, setData] = useState(initData);

  const setPair = ({ key, value }) => {
    const newData = {
      ...data,
      [key]: value,
    };
    setData(newData);
  };

  return (
    <Ccontext.Provider
      value={{
        data,
        initData: setData,
        setData: setPair,
      }}
    >
      {children}
    </Ccontext.Provider>
  );
};
