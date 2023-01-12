import React, { useContext, useState } from "react";

const initData = {
  name: '',
  cellular_health_score: {
    weight: 0,
    smm: 0,
    body_fat: 0,
    score: 0
  },
  hydration: {
    gender: 'male',
    total_body_water: 0,
    weight: 0,
    score: 0
  },
  body_fat: {
    gender: 'male',
    age: 0,
    body_fat: 0
  },
  visceral_fat: {
    visceral_fat: 0,
    visceral_fat_divide_10: 0
  },
  inflammation_reference: {
    right_arm: 0,
    left_arm: 0,
    right_leg: 0,
    left_leg: 0,
    trunk: 0,
    inflammation: 0
  },
  cell_integrity: {
    gender: 'male',
    age: 0,
    whole_body_phase_angle: 0
  }
};

const Ocontext = React.createContext({
  data: initData,
  initData: (data) => {},
  setData: ({ section, key, value }) => {},
});

export const useOContext = () => useContext(Ocontext);

export const OProvider = ({ children }) => {
  const [data, setData] = useState(initData);

  const setPair = ({ section, key, value }) => {
    let newData = { ...data };
    if (!newData[section]) {
      newData[section] = initData[section];
    }
    newData[section][key] = value;
    
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
