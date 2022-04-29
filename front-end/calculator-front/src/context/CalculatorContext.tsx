import React, { createContext, useContext, useState } from "react";
import { CalculationRecord } from "../collections";

//to jest stan
interface CalculatorState {
  value?: string;
  records: CalculationRecord[];
}

//context

interface ICalculatorContext {
  state: CalculatorState;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

//context
const CalculatorContext = createContext<ICalculatorContext>({
  state: {
    records: [],
  },
  onChange: () => ({}),
});

//popretis dla providera
interface Props {
  records: CalculationRecord[];
}

function CalculatorContextProvider({
  records,
  children,
}: React.PropsWithChildren<Props>) {
  const [state, setState] = useState<CalculatorState>({
    records: [],
    value: "",
  });

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {};

  return (
    <CalculatorContext.Provider value={{ state, onChange }}>
      {children}
    </CalculatorContext.Provider>
  );
}

export const useCalsulatorState = useContext(CalculatorContext);
