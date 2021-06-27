import React from "react";
import { Container, Grid, TextField, Button } from "@material-ui/core";

const App = () => {
  return (
    <Container maxWidth="sm">
      <Grid container spacing={1}>
        <Grid item xs={9}>
          <TextField />
        </Grid>
        <Grid item xs={3}>
          <Button>Calculate</Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;
