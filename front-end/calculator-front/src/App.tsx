import React, { useState } from "react";
import Info from "./components/Info";
import Calculator from "./components/Calculator";
import ResultList from "./components/ResultList";
import { useEffect } from "react";
import api from './api'
import { CalculationRecord } from "./collections";
import { AxiosResponse } from "axios";


interface Calculation {
  records: CalculationRecord[] | null
}

const App = (props: Calculation) => {

  const [state, setState] = useState<Calculation>();

  useEffect(() => {
    setState({
      records : {} as CalculationRecord[]
    });
    
  },[])

  const onCalculate = async (input: string) => {
    const {data} = await api.post(input) as AxiosResponse;
    const record = { input, data}

  }
  return (
    <div>
      <Info />
      <Calculator onCalculate={onCalculate} />
      <ResultList />
    </div>
  );
};

export default App;
