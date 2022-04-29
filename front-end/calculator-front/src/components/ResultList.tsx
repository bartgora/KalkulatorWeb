import { Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import { CalculationRecord } from '../collections';
import { useCalculatorState } from '../context/CalculatorContext';
import styles from './components.module.scss';

const ResultList = () => {
  let key = 0 as number;

  const { state } = useCalculatorState();

  console.log('List state: ' + JSON.stringify(state));
  const renderResults = () => {
    return state.records?.map((record: CalculationRecord) => {
      return (
        <TableRow key={key++}>
          <TableCell component="th" scope="row">
            {record.input}
          </TableCell>
          <TableCell>{record.result}</TableCell>
        </TableRow>
      );
    });
  };
  return (
    <Container className={styles.container}>
      <TableContainer component={Paper}>
        <Table className={styles.table} aria-label="Results">
          <TableHead>
            <TableRow>
              <TableCell align="center">Equation</TableCell>
              <TableCell align="center">Result</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{renderResults()}</TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default ResultList;
