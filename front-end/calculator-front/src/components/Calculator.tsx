import React from "react";
import { Button, Container, Grid, makeStyles, Paper, TextField } from "@material-ui/core";

interface Props {
  input?: string | null,
  onCalculate: (input: string) => void;
}

const Calculator = (props: Props) => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Paper>
        <Grid container spacing={2}>
          <Grid item >
            <TextField label="Input" className={classes.editor} value={props.input}/>
          </Grid>
          <Grid item >
            <Button variant="contained" color="primary" onClick={() => props.onCalculate(props.input!)}>Calculate</Button>
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