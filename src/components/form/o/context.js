import React, { useContext, useState } from "react";

const initData = {
  score: 0,
  weight: 0,
  smm: 0,
  body_fat: 0,
  visceral_fat: 0,
  total_body_water: 0,
  whole_body_phase_angle: 0,
  right_arm: 0,
  left_arm: 0,
  right_leg: 0,
  left_leg: 0,
  trunk: 0,
  inflamation: 0,
};

const Ocontext = React.createContext({
  data: initData,
  initData: (data) => {},
  setData: ({ key, value }) => {},
});

export const useOContext = () => useContext(Ocontext);

export const OProvider = ({ children }) => {
  const [data, setData] = useState(initData);

  const setPair = ({ key, value }) => {
    const newData = {
      ...data,
      [key]: value,
    };
    setData(newData);
  };

  return (
    <Ocontext.Provider
      value={{
        data,
        initData: setData,
        setData: setPair,
      }}
    >
      {children}
    </Ocontext.Provider>
  );
};
