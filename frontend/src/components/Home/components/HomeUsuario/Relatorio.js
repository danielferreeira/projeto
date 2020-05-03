import React, { useState, useEffect } from "react";

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { makeStyles, Typography, Divider } from "@material-ui/core";

import { relatorioUsuario } from "./requests";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  container: {
    margin: 20,
    padding: 5
  },
  title: {
    flex: '1 1 100%',
    textAlign: 'center'
  },
});

export default function HomeUsuario() {
  const classes = useStyles();

  useEffect(() => {
    buscarRelatorio();
  }, []);

  const [rows, setRows] = useState([]);
  const buscarRelatorio = async () => {
    const rows = await relatorioUsuario();

    setRows(rows);
  }

  return (
    <Paper className={classes.container}>
      <Typography className={classes.title} variant="h6" id="tableTitle" component="div">
        Relatório de compra
      </Typography>
      <Divider />
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Cliente</TableCell>
            <TableCell align="center">Data</TableCell>
            <TableCell align="center">Produto</TableCell>
            <TableCell align="center">Quantidade</TableCell>
            <TableCell align="center">Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">{row.nomecliente}</TableCell>
              <TableCell align="left">{new Date(row.datapedido).toLocaleDateString()}</TableCell>
              <TableCell align="left">{row.nomeproduto}</TableCell>
              <TableCell align="left">{row.quantidadeproduto}</TableCell>
              <TableCell align="left">{row.valortotalpedido}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
