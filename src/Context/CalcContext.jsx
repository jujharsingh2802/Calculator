import React, { createContext, useContext, useState } from 'react';

export const CalcContext = createContext({
  calc: "0",
  res:"0",
  setCalc: () => {},
  setRes: () => {},
});

export const useCalc = () => {
  return useContext(CalcContext);
};

const CalcProvider = ({ children }) => {
  const [calc, setCalc] = useState("");
  const [res,setRes] = useState("");

  return (
    <CalcContext.Provider value={{ calc, setCalc, res,setRes }}>
      {children}
    </CalcContext.Provider>
  );
};

export default CalcProvider;
