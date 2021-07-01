import React, { useState } from "react";
import Info from "./components/Info";
import Calculator from "./components/Calculator";
import ResultList from "./components/ResultList";
import { useEffect } from "react";
import api from "./api";
import { CalculationRecord } from "./collections";
import { AxiosRequestConfig, AxiosResponse } from "axios";

interface Calculation {
  records: CalculationRecord[] | null;
}

const App = (props: Calculation) => {
  const [state, setState] = useState<Calculation>();

  useEffect(() => {
    setState({
      records: {} as CalculationRecord[],
    } as Calculation);
  }, []);

  const onCalculate = async (input: string) => {
    const { data } = (await api.post("/calculate/", null, {
      params: {
        input,
      },
    } as AxiosRequestConfig)) as AxiosResponse;
    const result = data as String;
    const record = { input, result } as CalculationRecord;
    state?.records?.push(record);
  };
  return (
    <div>
      <Info />
      <Calculator onCalculate={onCalculate} />
      <ResultList />
    </div>
  );
};

export default App;
