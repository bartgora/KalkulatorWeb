import { useState } from "react";
import Info from "./components/Info";
import Calculator from "./components/Calculator";
import ResultList from "./components/ResultList";
import { useEffect } from "react";
import api from "./api";
import { CalculationRecord } from "./collections";

interface Calculation {
  records: CalculationRecord[] | null;
}

const App = () => {
  const [state, setState] = useState<Calculation>();

  useEffect(() => {
    setState({
      records: [] as CalculationRecord[],
    } as Calculation);
  }, []);

  const onCalculate = async (input: string) => {
    await api
      .post("/calculate", {"equation" : input})
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
    <div>
      <Info />
      <Calculator onCalculate={onCalculate} />
      <ResultList records={state?.records || []} />
    </div>
  );
};

export default App;
