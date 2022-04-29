import React, { createContext, useContext, useEffect, useRef, useState } from 'react';
import { Calculation } from '../App';
import { CalculationRecord } from '../collections';

//to jest stan
interface CalculatorState {
  value?: string;
  records?: CalculationRecord[];
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
  calculation?: Calculation;
}

export function CalculatorContextProvider({ calculation, children }: React.PropsWithChildren<Props>) {
  const initState = useRef<CalculatorState>(initData());
  const [state, setState] = useState<CalculatorState>(initState.current);

  function initData(): CalculatorState {
    return { records: [], value: '' };
  }

  useEffect(() => {
    setState({
      records: calculation?.records,
    });
  }, [calculation]);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setState({
      ...state?.records,
      value: newValue,
    });
  };

  return <CalculatorContext.Provider value={{ state, onChange }}>{children}</CalculatorContext.Provider>;
}

export const useCalculatorState = () => useContext(CalculatorContext);
