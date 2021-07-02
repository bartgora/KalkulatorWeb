import { Container, Grid, Paper } from "@material-ui/core";
import React from "react";
import { useStyles } from "../styles/styles";

const Info = () => {
  const styles = useStyles();
  return (
    <Container className={styles.container}>
      <Paper>
        <Grid container spacing={2}>
          <Grid item>Info</Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default Info;
