import React, { ChangeEvent, useEffect, useState } from "react";
import { Button, Container, Grid, makeStyles, Paper, TextField } from "@material-ui/core";

interface Props {
  onCalculate: (input: string) => void;
}

interface State {
  value: string;
}

const Calculator = (props: Props) => {

  const [state, setState] = useState<State>();
  useEffect(() => {
    setState({
      value: ''
    } as State)
  }, []);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value
    setState({
      value: newValue
    } as State);
  }
  const classes = useStyles();
  const valueText = state?.value || "";
  return (
    <Container className={classes.container}>
      <Paper>
        <Grid container spacing={2}>
          <Grid item >
            <TextField label="Input" className={classes.editor} value={state?.value || ""} onChange={(event :ChangeEvent<HTMLInputElement>) => onChange(event)} />
          </Grid>
          <Grid item >
            <Button variant="contained" color="primary" onClick={() => props.onCalculate(valueText)}>Calculate</Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default Calculator;

const useStyles = makeStyles({
  container: {
    width: "800px"
  },
  editor: {
    width: "600px"
  }
});