import React, { createContext, useContext, useRef, useState } from 'react';
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
  records?: CalculationRecord[];
}

export function CalculatorContextProvider({ records, children }: React.PropsWithChildren<Props>) {
  const initState = useRef(init());
  const [state, setState] = useState<CalculatorState>(initState.current);

  function init(): CalculatorState {
    return records
      ? {
          records: [],
          value: '',
        }
      : {};
  }

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setState({
      ...records,
      value: newValue,
    });
  };

  return <CalculatorContext.Provider value={{ state, onChange }}>{children}</CalculatorContext.Provider>;
}

export const useCalculatorState = () => useContext(CalculatorContext);
