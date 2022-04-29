import {
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { CalculationRecord } from "../collections";
import styles from "./components.module.scss";
interface Props {
  records: CalculationRecord[];
}
const ResultList = (props: Props) => {
  let key = 0 as number;

  const renderResults = () => {
    return props.records.map((record: CalculationRecord) => {
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
