import React from "react";
import { Button, Container, Grid, makeStyles, Paper, TextField } from "@material-ui/core";

const Calculator = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Paper>
      <Grid container spacing={2}>
        <Grid item >
          <TextField label="Input" className={classes.editor}/>
        </Grid>
        <Grid item >
          <Button variant="contained" color="primary">Calculate</Button>
        </Grid>
      </Grid>
      </Paper>
    </Container>
  );
};

export default Calculator;

const useStyles = makeStyles({
  container:{
    width :"800px"
  },
  editor:{
    width:"600px"
  }
});