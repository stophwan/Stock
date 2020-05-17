import React,{useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { createStockEstimate } from "../actions";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from 'react-router-dom';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});


export default function SimpleTable() {
  const classes = useStyles();

  const stockestimates = useSelector(state => state.stockestimate)
  const {ticker} = useParams();
  const dispatch = useDispatch();

  
  useEffect(()=>{
    if(stockestimates){
      if(ticker !== stockestimates[0].ticker){
        dispatch((createStockEstimate(ticker)))
      }else{
        return;
      }
    }
    else{
      dispatch((createStockEstimate(ticker)));
    }
  })

  return (
    stockestimates&&
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Period</TableCell>
            <TableCell align="right">epsAvg</TableCell>
            <TableCell align="right">epsHigh</TableCell>
            <TableCell align="right">epsLow</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {stockestimates.map((stockestimate) => (
            <TableRow key={stockestimate.name}>
              <TableCell component="th" scope="row">
                {stockestimate.period}
              </TableCell>
              <TableCell align="right">{stockestimate.epsAvg}</TableCell>
              <TableCell align="right">{stockestimate.epsHigh}</TableCell>
              <TableCell align="right">{stockestimate.epsLow}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}