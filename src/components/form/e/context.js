import React, { useContext, useState } from "react";

const initData = {
  stress: 0,
  sleep: 0,
  digestion: 0,
  energy: 0,
  sns_yang: 0,
  pns_yin: 0,
  default: 0,
  detox_energy: 0,
  life_energy: 0,
  digestive_energy: 0,
  immune_energy: 0,
  purification_energy: 0,
};

const Econtext = React.createContext({
  data: initData,
  initData: (data) => {},
  setData: ({ key, value }) => {},
});

export const useEContext = () => useContext(Econtext);

export const EProvider = ({ children }) => {
  const [data, setData] = useState(initData);

  const initEData = (eData) => {
    let newData = { ...data };
    const keys = Object.keys(initData);

    for (const key of keys) {
      if (eData && eData[key]) {
        newData[key] = eData[key];
      }
      else {
        newData[key] = initData[key];
      }
    }

    setData(newData);
  }

  const setPair = ({ key, value }) => {
    const newData = {
      ...data,
      [key]: value,
    };
    setData(newData);
  };

  return (
    <Econtext.Provider
      value={{
        data,
        initData: initEData,
        setData: setPair,
      }}
    >
      {children}
    </Econtext.Provider>
  );
};
