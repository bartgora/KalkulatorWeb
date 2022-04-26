import { Container, Grid, Paper } from "@material-ui/core";
import { useStyles } from "../styles/styles";

const Info = () => {
  const styles = useStyles();
  return (
    <Container className={styles.container}>
      <Paper>
        <Grid container spacing={2}>
          <Grid item>
            <div>
              <iframe
                className={styles.iframe}
                title="info"
                src="http://bartlomiej-gora.github.io/RPNLibrary/"
              ></iframe>
            </div>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default Info;
