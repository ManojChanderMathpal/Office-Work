import { createContext, useContext, useState } from "react";

const CounterContext = createContext();

export const CounterProvider = ({ children }) => {

    const[counter,setcounter]=useState(0);

    const[darkmode, setdarkmode]=useState(false);
 
  return (
    <CounterContext.Provider value={{ counter, setcounter, darkmode, setdarkmode }}>
      {children}
    </CounterContext.Provider>
  );
};

export const usedCounter = () => useContext(CounterContext);