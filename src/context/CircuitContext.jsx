/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";

const CircuitContext = createContext(null);

export function CircuitProvider({ children }) {
  const [selectedCircuit, setSelectedCircuit] = useState("");
  return (
    <CircuitContext.Provider value={{ selectedCircuit, setSelectedCircuit }}>
      {children}
    </CircuitContext.Provider>
  );
}

export function useCircuit() {
  return useContext(CircuitContext);
}
