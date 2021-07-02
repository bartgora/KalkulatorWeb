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
import React from "react";
import { CalculationRecord } from "../collections";
import { useStyles } from "../styles/styles";

interface Props {
  records: CalculationRecord[];
}
const ResultList = (props: Props) => {
  const styles = useStyles();

  const renderResults = () => {
    return props.records.map(function (record) {
      console.log(record);
      <TableRow key={record.input}>
        <TableCell component="th" scope="row">
          {record.input}
        </TableCell>
        <TableCell>{record.result}</TableCell>
      </TableRow>;
    });
  };
  return (
    <Container className={styles.container}>
      <TableContainer component={Paper}>
        <Table className={styles.table} aria-label="Results">
          <TableHead>
            <TableCell align="center">Equation</TableCell>
            <TableCell align="center">Result</TableCell>
          </TableHead>
          <TableBody>{renderResults()}</TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default ResultList;
