import { useState } from 'react';
import Calculator from './components/Calculator';
import ResultList from './components/ResultList';
import { useEffect } from 'react';
import api from './api';
import { CalculationRecord } from './collections';
import { CalculatorContextProvider } from './context/CalculatorContext';

interface Calculation {
  records?: CalculationRecord[];
}

const App = () => {
  const [state, setState] = useState<Calculation>();

  useEffect(() => {
    setState({
      records: [] as CalculationRecord[],
    } as Calculation);
  }, [state?.records]);

  const onCalculate = async (input: string) => {
    await api
      .post('/calculate', { equation: input })
      .then((response) => {
        const { data } = response;
        const record = data as CalculationRecord;
        const records = state?.records || ([] as CalculationRecord[]);
        records.push(record);
        setState({
          records: records,
        });
      })
      .catch((error) => {
        const { errorMsg } = error.response.data;
        const result = errorMsg as string;
        const errorRecord = { input, result } as CalculationRecord;
        const records = state?.records || ([] as CalculationRecord[]);
        records.push(errorRecord);
        setState({
          records: records,
        });
      });
  };
  return (
    <div className="container">
      <CalculatorContextProvider records={state?.records}>
        <Calculator onCalculate={onCalculate} />
        <ResultList />
      </CalculatorContextProvider>
    </div>
  );
};

export default App;
