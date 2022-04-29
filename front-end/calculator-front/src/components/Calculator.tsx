import React, { ChangeEvent } from 'react';
import { Button, Container, Grid, Paper, TextField } from '@material-ui/core';

import style from './components.module.scss';
import { useCalculatorState } from '../context/CalculatorContext';
interface Props {
  onCalculate: (input: string) => void;
}

// interface State {
//   value: string;
// }

const Calculator = (props: Props) => {
  // const [state, setState] = useState<State>();
  // useEffect(() => {
  //   setState({
  //     value: "",
  //   } as State);
  // }, []);
  const { state, onChange } = useCalculatorState();

  // const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const newValue = event.target.value;
  //   setState({
  //     value: newValue,
  //   } as State);
  // };
  return (
    <Container>
      <Paper>
        <Grid container spacing={2}>
          <Grid item>
            <TextField
              label="Input"
              className={style.editor}
              value={state?.value || ''}
              onChange={(event: ChangeEvent<HTMLInputElement>) => onChange(event)}
              variant="outlined"
            />
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              onClick={() => props.onCalculate(state?.value || '')}
              disabled={state?.value === ''}
            >
              Calculate
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default Calculator;
